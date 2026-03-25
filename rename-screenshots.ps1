$dir = "c:\Users\admin\Desktop\Working\Proposal\proposal-screenshots-extracted\proposal-screenshots"
$files = Get-ChildItem $dir
foreach ($f in $files) {
    $n = $f.Name
    $newName = $null
    if ($n -match "thu.*c.*converted") { $newName = "uong-thuoc.png" }
    elseif ($n -match "Huy.*t.*p") { $newName = "huyet-ap.jpg" }
    elseif ($n -match "Tr.*ly.*s.*c.*kh") { $newName = "tro-ly-ai.png" }
    elseif ($n -match "Dinh") { $newName = "dinh-duong.png" }
    elseif ($n -match "n.*ng\.png" -and $n -notmatch "tin" -and $n -notmatch "Quang" -and $n -notmatch "Chi" -and $n -notmatch "H") { $newName = "van-dong.png" }
    elseif ($n -match "n.*i.*ng.*i.*th") { $newName = "ket-noi.png" }
    elseif ($n -match "kh.*n.*c.*p") { $newName = "ho-tro-khan-cap.png" }
    elseif ($n -match "tin.*h.*nh") { $newName = "ban-tin-hanh-dong.png" }
    elseif ($n -match "tin.*nh.*p.*24") { $newName = "ban-tin-nhip-dap.png" }
    elseif ($n -match "cao.*s.*c.*kh.*Chi") { $newName = "bao-cao-suc-khoe.png" }
    elseif ($n -match "Quang") { $newName = "le-quang-dung.png" }
    elseif ($n -match "Th.*H.*ng") { $newName = "pham-the-hung.jpg" }
    elseif ($n -match "V.*n.*Chi.*n") { $newName = "do-van-chien.png" }
    if ($newName) {
        Rename-Item $f.FullName -NewName $newName -Force
        Write-Host "OK: $($f.Name) -> $newName"
    }
}
Write-Host "RENAME_ALL_DONE"
