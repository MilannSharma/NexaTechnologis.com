Add-Type -AssemblyName 'System.IO.Compression.FileSystem'
$docxPath = 'c:\Users\cc\Documents\Mishh-ideas\nexa-technologies\Nexa_Technology_Blueprint.docx'
$zip = [System.IO.Compression.ZipFile]::OpenRead($docxPath)
$entry = $zip.GetEntry('word/document.xml')
$stream = $entry.Open()
$reader = New-Object System.IO.StreamReader($stream)
$xml = [xml]$reader.ReadToEnd()
$reader.Close()
$stream.Close()
$zip.Dispose()

$nsMgr = New-Object System.Xml.XmlNamespaceManager($xml.NameTable)
$nsMgr.AddNamespace('w','http://schemas.openxmlformats.org/wordprocessingml/2006/main')

foreach($p in $xml.SelectNodes('//w:p', $nsMgr)) {
    $line = ''
    foreach($t in $p.SelectNodes('.//w:t', $nsMgr)) {
        $line += $t.InnerText
    }
    if($line.Trim()) {
        Write-Output $line
    }
}
