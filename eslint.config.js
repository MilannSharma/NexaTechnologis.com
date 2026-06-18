import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript + React source files
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react": reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      // ── React ──────────────────────────────────────────────────
      "react/react-in-jsx-scope": "off",        // Not needed with React 17+
      "react/prop-types": "off",                 // TypeScript handles this

      // Disable "no inline styles" — project uses dynamic style objects
      // for animations and theming (CSS variables + runtime values)
      "react/forbid-component-props": "off",
      "react/no-inline-styles": "off",

      // ── React Hooks ─────────────────────────────────────────────
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // ── TypeScript ──────────────────────────────────────────────
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // ── Security / Best Practices ───────────────────────────────
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
    settings: {
      react: { version: "detect" },
    },
  },

  // Ignore build output and node_modules
  {
    ignores: ["dist/**", "node_modules/**", "*.config.js"],
  },
];
