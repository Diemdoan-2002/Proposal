$dir = "c:\Users\admin\Desktop\Working\Proposal\Mascot-extracted\Mascot"
$files = Get-ChildItem $dir
foreach ($f in $files) {
    $n = $f.Name
    if ($n -like "*awwww*") { Copy-Item $f.FullName (Join-Path $dir "koala-happy.png") -Force; Write-Host "Copied $n -> koala-happy.png" }
    if ($n -like "*38751*") { Copy-Item $f.FullName (Join-Path $dir "koala-formal.svg") -Force; Write-Host "Copied $n -> koala-formal.svg" }
}
# Handle unicode names via byte matching
$pngFiles = $files | Where-Object { $_.Extension -eq ".png" -and $_.Name -ne "koala-happy.png" -and $_.Name -notlike "*awwww*" }
$svgFiles = $files | Where-Object { $_.Extension -eq ".svg" -and $_.Name -ne "koala-formal.svg" -and $_.Name -notlike "*38751*" }

$i = 0
foreach ($f in $pngFiles) {
    if ($i -eq 0) { Copy-Item $f.FullName (Join-Path $dir "koala-tired.png") -Force; Write-Host "Copied $($f.Name) -> koala-tired.png" }
    if ($i -eq 1) { Copy-Item $f.FullName (Join-Path $dir "koala-chef.png") -Force; Write-Host "Copied $($f.Name) -> koala-chef.png" }
    $i++
}
$i = 0
foreach ($f in $svgFiles) {
    if ($i -eq 0) { Copy-Item $f.FullName (Join-Path $dir "koala-front.svg") -Force; Write-Host "Copied $($f.Name) -> koala-front.svg" }
    if ($i -eq 1) { Copy-Item $f.FullName (Join-Path $dir "koala-front-alt.svg") -Force; Write-Host "Copied $($f.Name) -> koala-front-alt.svg" }
    $i++
}
Write-Host "Done!"
Get-ChildItem $dir -Filter "koala-*" | ForEach-Object { Write-Host "  $($_.Name) ($($_.Length) bytes)" }
