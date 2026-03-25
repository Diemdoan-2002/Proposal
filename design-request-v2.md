# 🎨 Design Request V2 — Kolia Pitch Deck Professional Redesign

> **Role:** Senior Designer — 10+ năm kinh nghiệm thiết kế pitch deck cho HealthTech / MedTech  
> **Tham chiếu:** Google Health keynotes, Apple WWDC slide design, McKinsey/BCG consulting decks  
> **Mục tiêu:** Nâng cấp bộ slide từ "functional" lên "**Google-grade keynote**" — chuyên nghiệp, hiện đại, thể hiện công nghệ AI vào y tế

---

## Nguyên tắc thiết kế tổng thể

### 1. Thay thế TOÀN BỘ emoji bằng custom SVG icons
- Mỗi icon phải **stroke-based**, cùng weight = 1.5-2px
- Phong cách: **medical-tech fusion** — kết hợp y tế + công nghệ
- Màu icon theo context: teal cho tính năng, đỏ cho cảnh báo, xanh lá cho thành công
- KHÔNG dùng icon library có sẵn (Feather, Lucide, etc.) — tự vẽ mới

### 2. Background depth system
- Thêm **dot-grid pattern** cực nhạt (opacity 3-5%) cho các slide content
- **Gradient mesh blob** lớn ở góc slide (teal, opacity 5-8%)
- **Concentric ring** decorations quanh phone mockup (stroke 0.5px, opacity 8%)

### 3. Card & component elevation
- Cards: `box-shadow: 0 4px 24px rgba(0,0,0,.06)` + border `rgba(0,0,0,.03)`
- Hover: lift 4px + shadow spread
- Glassmorphism accent cho floating badges: `backdrop-filter: blur(12px)` + `background: rgba(255,255,255,.85)`

### 4. Animation refinements
- Các element reveal: `cubic-bezier(.22,1,.36,1)` — snappy, Apple-like
- Phone mockup: **subtle float** animation (translateY ±6px, 4s ease loop)
- Stat numbers: **count-up** animation on slide enter

---

## Chi tiết chỉnh sửa từng Slide

### Slide 1 — COVER (Trang bìa)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Background | Trắng phẳng | Thêm **subtle dot-grid** + gradient mesh blob góc phải dưới (teal, 5% opacity) |
| Heart rate card | Box shadow nhẹ | **Glassmorphism**: backdrop-blur, border trắng mờ, glow pulse nhẹ |
| AI chat bubble | Box shadow nhẹ | Thêm **typing indicator** dots animation |
| CTA button | Gradient teal đơn giản | Thêm **subtle glow pulse** animation (box-shadow teal mờ nhấp nháy nhẹ 2s) |
| Mascot | Drop shadow cơ bản | Giữ nguyên — vị trí tốt rồi |
| Tag "OSP AI" | Cơ bản | Thêm icon diamond/star SVG nhỏ trước text |

### Slide 2 — THỐNG KÊ (Statistics)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Donut chart | Tĩnh | Giữ SVG donut — thêm **count-up** animation cho số 70% |
| 3 stat cards | Basic stat boxes | Custom SVG icons: **warning triangle** (46%), **brain-pulse EKG** (~30%), **heart-crack** (~50%) — thay thế inline SVG hiện tại |
| "Biến chứng phòng ngừa" | Card teal border | Thêm **checkmark-shield** SVG icon, background gradient teal nhẹ |
| Nguồn dữ liệu | Text nhỏ plain | Thêm icon "**document-verified**" SVG nhỏ bên cạnh |

### Slide 3 — VẤN ĐỀ (Problems)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 2 column headers | Gradient background | Giữ gradient — thêm custom SVG: **person-broken** (bệnh nhân), **hospital-cross** (cơ sở y tế) |
| Problem items (8 mục) | Numbered squares | Thay số bằng **custom SVG icon** cho từng vấn đề: pill-forget, blood-pressure-off, lonely-clock, motivation-down, data-gap, calendar-miss, timer-short, hospital-readmit |
| Divider giữa 2 cột | Khoảng trống (gap) | Thêm **dashed vertical line** gradient teal-to-coral (opacity 15%) |
| Bottom callout | Basic callout | Thêm **warning-explosion** SVG icon, background gradient danger nhẹ |

### Slide 4 — GIẢI PHÁP (Solution)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 3 feature cards | Feather stroke icons | Custom SVGs: **shield-heartbeat** (tuân thủ), **heart-pulse-ai** (AI cải thiện), **people-connected** (kết nối) |
| Phone mockup | Tilted basic | Thêm **glow ring** phía sau, subtle float animation |
| Mascot | koala-happy nhỏ | Thêm **speech bubble** nhỏ "Kolia đây!" |
| Callout 👴 | Emoji 👴 | Thay bằng **elder-accessibility** SVG icon |

### Slide 5 — NHẮC THUỐC (Smart Medication)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Floating badges (4 cái) | Tất cả dùng ✓ checkmark giống nhau | Custom SVG cho mỗi badge: **camera-scan** (chụp toa), **pill-interaction** (tương tác thuốc), **cabinet-pill** (tủ thuốc), **bell-family** (báo người thân) |
| Shield badge | Text + shield icon | Custom **shield-4-layers** SVG icon |
| Phone mockup | 3D perspective | Thêm **concentric ring** decorations xung quanh |
| Background circles | Plain circles border | Thêm **animated dash** rotation cực chậm (60s/vòng) |

### Slide 6 — HUYẾT ÁP (Blood Pressure)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 3 feature rows | Emoji icons (📸⚠️📋) | Custom SVGs: **camera-bp-device** (chụp máy đo), **alert-threshold** (cảnh báo ngưỡng), **clipboard-share** (sẵn sàng tái khám) |
| Icon backgrounds | Solid gradient squares | Subtle gradient + inner shadow |
| Phone mockup | Small, no decoration | Larger, thêm **vitals-wave** SVG decoration phía sau |

### Slide 7 — TÁI KHÁM (Follow-up)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 4 step circles | Numbered circles gradient | Giữ layout — thêm **mini icon** trong mỗi circle: camera, bell, brain-ai, archive |
| Arrow giữa steps | Text "→" | SVG **chevron-right** với gradient teal |
| Bottom callout | Emoji 📱 | Custom **phone-camera** SVG icon |

### Slide 8 — TRỢ LÝ AI (AI Assistant)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 4 metric badges | Emoji icons (🎙️☀️🌙🧠) | Custom SVGs: **mic-vietnamese** (giọng nói), **sun-action** (bản tin sáng), **moon-heartbeat** (bản tin tối), **brain-network** (150K kịch bản) |
| Center phone | Basic phone mockup | Thêm **AI glow ring** animation xung quanh |
| Background | Plain | Thêm **neural network** pattern rất nhẹ (opacity 3%) |

### Slide 9 — LỐI SỐNG (Lifestyle)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 3 cards | Emoji icons (🍎🏃📋) | Custom SVGs: **apple-heart** (dinh dưỡng), **runner-elderly** (vận động), **menu-personalized** (thực đơn cá nhân) |
| Card top border | 3px solid color | **Gradient** top border (pri → pri-light, warm → warm-light, green → green-light) |
| Mascot | Opacity .15 rất mờ | Giữ mờ nhưng tăng lên .20, thêm subtle float |

### Slide 10 — BÁO CÁO (Health Reports)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Report card | Emoji 📊 | Custom **chart-trend-up** SVG icon |
| Risk card | Emoji 🫀 | Custom **heart-score** SVG icon |
| Numbers "7 · 30" | Gradient text | Giữ — thêm subtle glow effect |

### Slide 11 — KẾT NỐI (Family Connection)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 4 feature rows | Emoji icons (👁️🔔📝💛) | Custom SVGs: **eye-remote** (theo dõi xa), **bell-alert** (cảnh báo), **hand-task** (làm thay), **heart-encourage** (động viên) |
| Left panel background | Solid teal gradient | Thêm **subtle wave pattern** overlay (opacity 8%) |

### Slide 12 — SOS (Emergency)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Topbar | Red background | Giữ — rất tốt rồi |
| 4 emergency cards | Emoji icons (🆘📞🗺️🎙️) | Custom SVGs: **sos-circle** (SOS), **phone-115** (gọi 115), **map-hospital** (BV gần nhất), **mic-first-aid** (sơ cứu giọng nói) |
| Cards layout | 2x2 grid | Giữ, thêm **pulse animation** border cho SOS card |

### Slide 13 — GAMIFICATION

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| 4 cards | Emoji icons (📚🧠🌳🎁) | Custom SVGs: **book-video** (giáo dục), **quiz-brain** (đố vui), **tree-growth** (nuôi cây), **gift-reward** (đổi quà) |
| Left/right cards | Basic border-left | Thêm gradient border-left |

### Slide 14 — GIÁ TRỊ CHO ĐỐI TÁC (Partner Value)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Table | Emoji in text (📊⬆️⏰💬🏥) | Custom SVGs inline cho mỗi row: **chart-data**, **arrow-improve**, **clock-ontime**, **chat-reduce**, **hospital-down** |
| Mascot | Opacity .12 | Tăng .18, thêm subtle animation |

### Slide 15 — BẢO CHỨNG (Trust & Safety)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Card icons | Emoji (🏥🔒✅) | Custom SVGs: **stethoscope-verified**, **lock-shield**, **app-published** |
| "Đã phát hành" card | Basic span-2 card | Thêm **App Store + Google Play** badge icons |

### Slide 16 — ĐỘI NGŨ (Team)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Photo frames | Simple border teal | **Double ring** frame: outer teal gradient + inner white gap |
| Name/title formatting | Basic text | Thêm subtle divider line dưới tên |
| OSP callout | Basic callout | Thêm **building-enterprise** SVG icon |

### Slide 17 — LIÊN HỆ (Contact/CTA)

| Hạng mục | Hiện tại | Yêu cầu mới |
|---|---|---|
| Background | Plain white | Gradient teal rất nhẹ từ bottom-up (5% opacity) |
| Contact icons | Emoji (📞🌐) | Custom SVGs: **phone-call**, **globe-web** |
| Quote | Italic text plain | Trong **card nhẹ** bo góc, border teal nhạt |
| Mascot | koala-happy | Giữ — thêm subtle bounce animation |

---

## Tổng hợp Custom Icons cần tạo (~45 icons)

### Medical Icons
1. `heart-crack` — tim nứt (bệnh tim)
2. `heart-pulse-ai` — tim + sóng + AI
3. `heart-score` — tim + điểm số
4. `heart-encourage` — tim + tay vẫy
5. `shield-heartbeat` — khiên + nhịp tim
6. `shield-4-layers` — khiên 4 lớp bảo vệ
7. `brain-pulse` — não + sóng EKG
8. `brain-network` — não + neural connections
9. `stethoscope-verified` — ống nghe + dấu tick

### Medication Icons
10. `pill-forget` — viên thuốc + dấu X
11. `pill-interaction` — 2 viên thuốc chạm nhau + warning
12. `cabinet-pill` — tủ thuốc
13. `camera-scan` — camera + scan lines

### Vital Signs Icons
14. `blood-pressure-off` — máy đo HA + slashed
15. `camera-bp-device` — camera + máy đo
16. `alert-threshold` — tam giác warning + threshold line
17. `chart-trend-up` — biểu đồ xu hướng lên

### Action/Feature Icons
18. `clipboard-share` — clipboard + share
19. `phone-camera` — điện thoại + camera
20. `mic-vietnamese` — microphone + flag hint
21. `sun-action` — mặt trời + checklist
22. `moon-heartbeat` — trăng + nhịp tim
23. `eye-remote` — mắt + wifi signal
24. `bell-alert` — chuông + chấm cảnh báo
25. `bell-family` — chuông + người thân
26. `hand-task` — bàn tay + task checkmark

### Lifestyle Icons
27. `apple-heart` — táo + tim nhỏ
28. `runner-elderly` — người chạy + gậy
29. `menu-personalized` — menu + AI sparkle

### Emergency Icons
30. `sos-circle` — SOS trong vòng tròn đỏ
31. `phone-115` — điện thoại + 115
32. `map-hospital` — bản đồ + cross y tế
33. `mic-first-aid` — micro + cross sơ cứu

### Gamification Icons
34. `book-video` — sách + play button
35. `quiz-brain` — não + dấu hỏi
36. `tree-growth` — cây + mũi tên lên
37. `gift-reward` — hộp quà + ngôi sao

### General/UI Icons
38. `warning-triangle` — tam giác cảnh báo
39. `checkmark-shield` — tick trong khiên
40. `document-verified` — tài liệu + tick
41. `person-broken` — người + broken line
42. `hospital-cross` — nhà + cross y tế  
43. `building-enterprise` — tòa nhà doanh nghiệp
44. `phone-call` — điện thoại gọi
45. `globe-web` — quả cầu web
46. `app-published` — app icon + checkmark

---

## Quy tắc thiết kế icon

```
Viewbox:  24×24
Stroke:   currentColor
Width:    1.5px (consistency)
Cap:      round
Join:     round
Fill:     none (outline style)
```

Mỗi icon phải:
- Dễ nhận biết ở kích thước 16-48px
- Hài hòa khi đặt cạnh nhau
- Mang tính **nhận diện y tế + công nghệ**
- Không bị trùng với bất kỳ icon library nào
