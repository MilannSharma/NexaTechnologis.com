import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    setAnimationLoaded(true);

    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    // Get current container bounds
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const scene = new THREE.Scene();
    
    // Camera Setup (60, ratio, near, far)
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height, false);

    // Group to hold nodes and lines for parallax rotation
    const systemGroup = new THREE.Group();
    scene.add(systemGroup);

    // Initial positioning parameters
    const nodeCount = 120;
    const nodes: {
      mesh: THREE.Mesh;
      velocity: THREE.Vector3;
      basePos: THREE.Vector3;
      phase: number;
    }[] = [];

    // Create 120 nodes: 70% blue, 30% dark slate cream
    const sphereGeo = new THREE.SphereGeometry(0.04, 8, 8); // nice clean light round spheres

    const blueMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#2B5CE6"),
      transparent: true,
      opacity: 0.5,
    });

    const darkMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4A4A6A"),
      transparent: true,
      opacity: 0.25,
    });

    for (let i = 0; i < nodeCount; i++) {
      const isBlue = Math.random() < 0.7;
      const mesh = new THREE.Mesh(sphereGeo, isBlue ? blueMat : darkMat);

      // Random position inside a 5x4x4 box
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 5;
      const z = (Math.random() - 0.5) * 4;

      mesh.position.set(x, y, z);
      systemGroup.add(mesh);

      nodes.push({
        mesh,
        basePos: mesh.position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002,
          (Math.random() - 0.5) * 0.002
        ),
        phase: Math.random() * Math.PI * 2,
      });
    }

    // Material for linking segments
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color("#2B5CE6"),
      transparent: true,
      opacity: 0.12,
    });

    // Create container for line dynamics
    let lineSegments: THREE.LineSegments | null = null;

    // Track mouse coordinates for parallax
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Watch scroll position for zoom lerping and opacity fading
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    // ResizeObserver to prevent canvas pixelation on container resizing
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length === 0) return;
      const entry = entries[0];
      const newWidth = entry.contentRect.width || canvas.clientWidth;
      const newHeight = entry.contentRect.height || canvas.clientHeight;

      width = newWidth;
      height = newHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height, false);
    });
    
    if (canvas) {
      resizeObserver.observe(canvas);
    }

    // Main render loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Simple document visibility checks to conserve CPU
      if (document.hidden) return;

      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Slow drift update
      nodes.forEach((node, idx) => {
        // Organic sinusoidal pathing
        node.phase += 0.4 * delta;
        node.mesh.position.x = node.basePos.x + Math.sin(node.phase) * 0.15;
        node.mesh.position.y = node.basePos.y + Math.cos(node.phase * 0.8) * 0.15;
        
        // Staggered node opacity pulsing standard 0.2 -> 0.6
        const mat = node.mesh.material as THREE.MeshBasicMaterial;
        const baseOpacity = mat === blueMat ? 0.5 : 0.25;
        mat.opacity = baseOpacity + Math.sin(time + idx) * 0.15;
      });

      // Clear previous lines
      if (lineSegments) {
        systemGroup.remove(lineSegments);
      }

      // Detect node proximity inside 2.6 threshold and create dynamic linkages
      const linePositions: number[] = [];
      const connectThreshold = 2.6;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const posA = nodes[i].mesh.position;
          const posB = nodes[j].mesh.position;
          const dist = posA.distanceTo(posB);

          if (dist < connectThreshold) {
            linePositions.push(posA.x, posA.y, posA.z);
            linePositions.push(posB.x, posB.y, posB.z);
          }
        }
      }

      if (linePositions.length > 0) {
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
        lineSegments = new THREE.LineSegments(lineGeo, lineMat);
        systemGroup.add(lineSegments);
      }

      // Learn Mouse Parallax translation shifts
      const targetRotY = mouseX * 0.15;
      const targetRotX = mouseY * 0.10;
      systemGroup.rotation.y += (targetRotY - systemGroup.rotation.y) * 0.05;
      systemGroup.rotation.x += (targetRotX - systemGroup.rotation.x) * 0.05;

      // Learn Camera Zoom lerping from 5 to 7.8 past 500px scrolled
      const scrollRatio = Math.min(scrollY / 800, 1);
      const targetZ = 5 + scrollRatio * 2.8;
      camera.position.z += (targetZ - camera.position.z) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanups
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      renderer.dispose();
      sphereGeo.dispose();
      blueMat.dispose();
      darkMat.dispose();
      lineMat.dispose();
    };
  }, []);

  // Subtle GSAP ScrollTrigger parallax effect on background shapes
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".bg-orb-1", {
        y: "160px",
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        }
      });

      gsap.to(".bg-orb-2", {
        y: "-160px",
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const smoothScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative w-full h-[100svh] md:h-[100vh] flex items-center justify-center overflow-hidden bg-[var(--bg-base)] pt-[72px] pb-4 md:pt-0 md:pb-0">
      
      {/* Three.js canvas layer behind everything */}
      <canvas 
        ref={canvasRef} 
        id="hero-canvas" 
        className="absolute inset-0 w-full h-full mix-blend-multiply opacity-25 md:opacity-80" 
        style={{ zIndex: 1, pointerEvents: "none" }}
      />

      {/* Radial soft lighting gradients overlay */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          zIndex: 2,
          background: "radial-gradient(ellipse at 50% 30%, rgba(43,92,230,0.08) 0%, transparent 65%)"
        }}
      />

      {/* Dynamic Background Orbs parallax placeholders */}
      <div className="bg-orb-1 transform translate-y-[-10%] scale-90 md:scale-100" />
      <div className="bg-orb-2 transform translate-y-[20%] scale-90 md:scale-100" />

      {/* Content Columns Front layer */}
      <div 
        className="relative flex flex-col items-center justify-center text-center max-w-[1100px] px-5 md:px-6 pt-0 md:pt-20 select-none"
        style={{ zIndex: 10 }}
      >
        
        {/* H1 Heading Word Reveals */}
        <h1 className="font-sans tracking-tight mb-3 md:mb-6 hero-heading">
          <span 
            className={`block text-[var(--text-primary)] font-bold transition-all duration-700 delay-300 transform ${animationLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[28px]"}`}
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.04em", fontSize: "var(--text-hero)", lineHeight: "1.12", paddingBottom: "2px" }}
          >
            Get found by AI.
          </span>
          <span 
            className={`block text-gradient font-bold transition-all duration-700 delay-500 transform ${animationLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-[28px] scale-[0.98]"}`}
            style={{ fontFamily: "var(--font-sans)", letterSpacing: "-0.04em", fontSize: "var(--text-hero)", lineHeight: "1.12", paddingTop: "2px" }}
          >
            Run on AI. Build with AI.
          </span>
        </h1>

        {/* Informative quiet luxury Subheading Paragraph */}
        <p 
          className={`font-sans font-medium text-[15px] md:text-[var(--text-body-lg)] leading-[1.55] md:leading-[1.8] text-[var(--text-body)] max-w-[580px] mb-5 md:mb-8 transition-all duration-700 delay-700 transform hero-subtext ${animationLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}
        >
          AI systems now answer questions, recommend brands, and drive enterprise decisions. 
          Companies not visible to AI, not running on AI, or not building on AI are already falling behind. 
          <span className="font-semibold text-[var(--accent)]"> Nexa Technology</span> exists to change that.
        </p>

        {/* Dynamic call to action buttons row */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto transition-all duration-700 delay-[900ms] transform ${animationLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[16px]"}`}
        >
          <button 
            className="btn-primary w-full sm:w-auto text-center justify-center"
            onClick={() => smoothScrollToSection("development")}
          >
            See What We're Building <ArrowRight className="w-4 h-4 text-white" />
          </button>
          <button 
            className="btn-secondary w-full sm:w-auto text-center justify-center"
            onClick={() => smoothScrollToSection("contact")}
          >
            Get in Touch
          </button>
        </div>

      </div>

    </section>
  );
}
