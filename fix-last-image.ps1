$dir = "c:\Users\admin\Desktop\Working\Proposal\proposal-screenshots-extracted\proposal-screenshots"
$files = Get-ChildItem $dir -Filter "*.png"
foreach ($f in $files) {
    if ($f.Name -match "Chi" -and -not $f.Name.StartsWith("do-")) {
        Copy-Item $f.FullName (Join-Path $dir "bao-cao-suc-khoe.png") -Force
        Write-Host "Copied: $($f.Name)"
        break
    }
}
Write-Host "SCRIPT_DONE"
