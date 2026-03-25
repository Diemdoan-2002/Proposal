$dir = "c:\Users\admin\Desktop\Working\Proposal\Mascot-extracted\Mascot"
$files = Get-ChildItem $dir -Filter "*.png"
foreach ($f in $files) {
    $n = $f.Name
    $newName = $null
    if ($n -match "awwww") { $newName = "koala-happy.png" }
    elseif ($n -match "oaÌ‰i" -or $n -match "oải") { $newName = "koala-tired.png" }
    elseif ($n -match "beÌ‚Ìp" -or $n -match "bếp") { $newName = "koala-chef.png" }
    if ($newName) {
        Copy-Item $f.FullName (Join-Path $dir $newName) -Force
        Write-Host "OK: $newName"
    }
}
Write-Host "MASCOT_DONE"
