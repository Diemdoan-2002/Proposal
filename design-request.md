# 🎨 Design Request — Kolia Investor Pitch Deck

> **Reviewer:** UX Designer · Senior, 7+ năm kinh nghiệm thiết kế trải nghiệm người dùng
> **Concept gốc:** Concept A — "MedTech Lumina" (Light, Clean, Medical)
> **Mục đích:** Pitch deck gọi vốn / trình bày tại BV/phòng khám
> **Đối tượng xem:** Lãnh đạo bệnh viện, trưởng khoa, bác sĩ tim mạch, nhà đầu tư

---

## 1. Nhận xét Concept A hiện tại

### ✅ Ưu điểm giữ lại
- Tone sáng trắng tạo cảm giác sạch sẽ, y khoa — **đúng ngành**
- Màu teal #00BFA5 làm accent — **đúng brand**
- Tối giản, không rối — **phù hợp đối tượng lãnh đạo BV** (thường là người >40 tuổi, ưu tiên rõ ràng hơn hào nhoáng)

### ⚠️ Vấn đề cần cải thiện

| Vấn đề | Tại sao quan trọng |
|---|---|
| **Thiếu visual hierarchy rõ ràng** | Nhà đầu tư chỉ dành ~3 giây quyết định có đọc tiếp hay không. Nếu không biết nhìn vào đâu trước → mất hứng |
| **Quá "phẳng" và thiếu chiều sâu** | Slide trắng + chữ đen thuần túy giống tài liệu Word, không giống pitch deck tầm cỡ |
| **Không có nhịp thở** | 17 slide cùng 1 layout = nhàm chán. Cần luân phiên slide "hero" (visual mạnh) và slide "content" (nội dung chi tiết) |
| **Screenshot chưa được staging** | Ảnh app chỉ dán thô, thiếu mockup device frame → trông nghiệp dư |
| **Thiếu data visualization** | Slide thống kê 70% cần visual biểu đồ thay vì chỉ gạch đầu dòng |
| **Chưa có storytelling flow** | Slide nhảy từ feature này sang feature khác thiếu "sợi dây" kết nối cảm xúc |

---

## 2. Yêu cầu thiết kế — Nguyên tắc cốt lõi

### 2.1 Storytelling Flow — "Hành trình cảm xúc"

Pitch deck không chỉ là trình bày tính năng, mà là **kể một câu chuyện** dẫn dắt người xem đi từ **"Vấn đề nghiêm trọng"** → **"Giải pháp khả thi"** → **"Tin tưởng và hành động"**.

```
[Gây sốc]  →  [Đồng cảm]  →  [Hy vọng]  →  [Thuyết phục]  →  [Tin tưởng]  →  [Hành động]
 Slide 2       Slide 3       Slide 4-13     Slide 14        Slide 15-16    Slide 17
 "70% mắc      "Vấn đề        "Kolia         "Bác sĩ         "An toàn        "Liên hệ
  huyết áp"     chưa giải      giải quyết     được lợi gì?"   & Đội ngũ"      hợp tác"
                quyết"         từng vấn đề"
```

> **Quy tắc:** Mỗi slide phải trả lời được **"Tại sao tôi cần đọc slide tiếp theo?"**

### 2.2 Nhịp thở — Luân phiên slide

Không được thiết kế 17 slide giống nhau. Cần luân phiên giữa:

| Loại slide | Đặc điểm | Ví dụ |
|---|---|---|
| **Hero slide** | 1 con số lớn hoặc 1 hình ảnh hero, ít chữ, gây impact | Slide 1 (bìa), Slide 2 (70%) |
| **Content slide** | Grid 2 cột: text + visual, nội dung chi tiết | Slide 5-13 (tính năng) |
| **Evidence slide** | Bảng, biểu đồ, badges — tạo sự tin tưởng | Slide 14, 15, 16 |
| **CTA slide** | Tối giản, 1 hành động duy nhất | Slide 17 (liên hệ) |

Nhịp lý tưởng: `Hero → Content → Content → Hero → Content → Content → Evidence → CTA`

### 2.3 Visual Hierarchy — "Quy tắc 3 giây"

Khi mở bất kỳ slide nào, trong 3 giây đầu người xem phải:
1. **Biết đây là slide về gì** (title lớn, rõ ràng)
2. **Thấy 1 visual chính** (ảnh, biểu đồ, hoặc con số)  
3. **Muốn đọc tiếp** (nội dung phụ đủ hấp dẫn nhưng không quá tải)

---

## 3. Yêu cầu thiết kế — Chi tiết từng thành phần

### 3.1 Color Palette

| Vai trò | Màu | Hex | Cách dùng |
|---|---|---|---|
| **Primary** | Teal | `#00BFA5` | Heading, icon chính, accent line, CTA button |
| **Primary Dark** | Teal đậm | `#00897B` | Text heading trên nền trắng, hover state |
| **Background** | Trắng ngà | `#FAFBFC` | Nền chính toàn bộ slide |
| **Surface** | Xám cực nhạt | `#F0F4F5` | Nền card, nền bảng dữ liệu |
| **Text Primary** | Đen than | `#1A2B3C` | Body text, heading phụ |
| **Text Secondary** | Xám | `#6B7B8D` | Mô tả, caption, nguồn dữ liệu |
| **Danger/Alert** | Coral đỏ | `#E74C3C` | Số liệu cảnh báo, vấn đề (slide 2, 3) |
| **Accent warm** | Cam nhẹ | `#FF8A65` | Badge, tag "Mới", highlight phụ |

> **Quy tắc:** KHÔNG sử dụng quá 3 màu trên cùng 1 slide. Teal là màu dẫn dắt, các màu khác chỉ hỗ trợ.

### 3.2 Typography

| Cấp | Font | Size | Weight | Dùng ở đâu |
|---|---|---|---|---|
| **H1 — Hero** | Be Vietnam Pro | 48-64px | 800 (ExtraBold) | Tiêu đề slide bìa, con số lớn |
| **H2 — Slide Title** | Be Vietnam Pro | 32-40px | 700 (Bold) | Tiêu đề mỗi slide |
| **H3 — Section** | Be Vietnam Pro | 20-24px | 600 (SemiBold) | Tiêu đề nhóm trong slide |
| **Body** | Be Vietnam Pro | 16-18px | 400 (Regular) | Nội dung chính |
| **Caption** | Be Vietnam Pro | 13-14px | 400 | Nguồn, chú thích |

> **Quy tắc chữ:** Line-height body = 1.7. Không dùng quá 4 bullet points/slide. Mỗi bullet ≤ 2 dòng.

### 3.3 Layout Grid

- **Canvas:** 1440×900px (16:10) hoặc 1920×1080px (16:9)
- **Margin:** 80px trái/phải, 60px trên/dưới
- **Grid:** 12 cột, gutter 24px
- **Content max-width:** 1200px, căn giữa

**Slide template phổ biến:**
1. **50/50 Split** — Text trái (6 col) + Visual phải (6 col) → cho feature slides
2. **Full-width Hero** — 1 visual/số liệu chiếm toàn bộ → cho impact slides
3. **3-Column Grid** — 3 card ngang (4 col mỗi cái) → cho overview/team slides
4. **Table** — Full-width bảng dữ liệu → cho evidence slides

### 3.4 Xử lý Screenshot App

> [!IMPORTANT]
> **KHÔNG BAO GIỜ** dán ảnh screenshot thô lên slide. Luôn đặt vào device mockup.

- Đặt screenshot vào **iPhone/Android mockup frame** (màu trắng hoặc xám nhạt)
- Thêm **subtle shadow** phía dưới (giả 3D nổi)
- Nếu 2 screenshot: đặt chồng lể nhau (overlap) tạo chiều sâu
- Nếu 1 screenshot: đặt hơi nghiêng 5-10° tạo dynamic
- Phía sau mockup: thêm **gradient blob teal mờ nhạt** (opacity 8-12%) tạo vùng focus

### 3.5 Slide Cover (Slide 1)

- Nền: Gradient tinh tế teal-to-white (`#E0F2F1` → `#FAFBFC`) hoặc nền trắng thuần
- Logo Kolia: trung tâm, kích thước lớn đủ nhận diện
- Tagline: typography rõ ràng, 2 dòng, teal + dark
- Logo OSP nhỏ góc dưới + "Quý 1/2026"
- **Mascot Koala** ở góc — tạo ấn tượng nhận diện thương hiệu ngay từ đầu
- **Không có quá nhiều element** — tối giản, chuyên nghiệp, tự tin

### 3.6 Slide Thống kê (Slide 2)

- Con số **70%** phải chiếm ít nhất 1/3 diện tích slide
- Font size 120-160px, màu teal, font-weight 900
- Phía dưới con số: 1 dòng giải thích ngắn
- Bên phải: 3-4 stat nhỏ dạng **icon + số + mô tả ngắn** (ví dụ: biểu tượng tim + "50% bệnh tim")
- Dải accent bar mỏng phía dưới mỗi stat

### 3.7 Slide Vấn đề (Slide 3)

- Chia 2 cột: **Bệnh nhân** (trái) vs **Cơ sở y tế** (phải)
- Mỗi cột: 4 problem cards xếp dọc
- Dùng **icon** thay bullet point (🔴 cho vấn đề)
- Header mỗi cột: badge màu coral (bệnh nhân) và teal (CSYT)
- **Accent:** Đường kẻ dọc giữa 2 cột = gradient teal mờ

### 3.8 Feature Slides (Slide 5-13)

**Layout chuẩn cho feature slide:**

```
┌──────────────────────────────────────────────────┐
│  [Tag: TÍNH NĂNG]                    [05 / 17]   │
│                                                   │
│  ┌─────────────────┐  ┌─────────────────────────┐│
│  │                 │  │ 💊 Nhắc thuốc           ││
│  │   📱 Phone     │  │    thông minh            ││
│  │   Mockup       │  │ ─────                    ││
│  │   (screenshot) │  │ • Feature point 1        ││
│  │                 │  │ • Feature point 2        ││
│  │                 │  │ • Feature point 3        ││
│  │                 │  │ • Feature point 4        ││
│  └─────────────────┘  └─────────────────────────┘│
│                                                   │
│  ──────────── teal accent line ──────────────     │
└──────────────────────────────────────────────────┘
```

- **Luân phiên vị trí:** Slide lẻ = visual trái, Slide chẵn = visual phải → tạo rhythm zig-zag
- Mỗi feature point: **icon nhỏ + chữ đậm keyword + giải thích** (1 dòng)
- Tối đa 4 bullets/slide, mỗi bullet ≤ 2 dòng
- Keyword quan trọng nhất: **in đậm + teal**

### 3.9 Evidence Slides (Slide 14-16)

- **Slide 14 (Lợi ích BS):** Bảng 5 dòng, mỗi dòng có icon lớn + tiêu đề bold + mô tả. Nền xen kẽ trắng-xám nhạt (zebra striping)
- **Slide 15 (An toàn):** 2 card lớn cạnh nhau (Y khoa + Dữ liệu) + badges App Store/Google Play phía dưới
- **Slide 16 (Đội ngũ):** 3 card ngang, mỗi card: ảnh tròn (border teal) + tên + chức vụ. Nền card xám nhạt, shadow subtle

### 3.10 Slide Liên hệ (Slide 17)

- Logo Kolia lớn, trung tâm
- Thông tin liên hệ: icon + text, căn giữa, khoảng cách rộng rãi
- Quote cuối: italic, trong khung bo góc teal nhạt
- **QR Code** link kolia.vn (nếu có) — để người xem quét ngay
- Cảm giác: **mời gọi, tự tin, dễ hành động**

---

## 4. Micro-interactions & Transitions (cho HTML)

| Element | Hiệu ứng | Thời gian |
|---|---|---|
| Chuyển slide | Smooth scroll-snap, fade nhẹ | 400ms |
| Text xuất hiện | Slide-up + fade-in theo thứ tự | 300ms, delay 100ms giữa các element |
| Phone mockup | Float nhẹ (subtle hover animation) | 3s loop |
| Con số lớn (70%) | Count-up animation từ 0 → 70 | 1.5s, ease-out |
| Navigation dot | Scale + glow khi active | 200ms |
| Hover card | Lift-up 4px + shadow đậm hơn | 200ms |

> **Quy tắc:** Animation phải **tinh tế**, giống Apple/Google keynote. Tuyệt đối KHÔNG nhấp nháy, KHÔNG quay vòng, KHÔNG gây mất tập trung.

---

## 5. Responsive & Technical

- **Primary:** Desktop 1440-1920px (chiếu trên projector/TV)
- **Secondary:** Tablet landscape (gửi PDF cho đối tác)
- Single HTML file, tự chứa (self-contained)
- Đảm bảo ảnh load nhanh — optimize < 500KB/ảnh
- Hỗ trợ in PDF nếu cần (print-friendly CSS)

---

## 6. Checklist trước khi duyệt

- [ ] Mỗi slide có visual hierarchy rõ ràng (biết nhìn đâu trước trong 3 giây)
- [ ] Luân phiên nhịp thở Hero/Content/Evidence
- [ ] Tất cả screenshot đặt trong device mockup
- [ ] Không slide nào có quá 4 bullet points
- [ ] Mỗi bullet ≤ 2 dòng
- [ ] Không quá 3 màu trên cùng 1 slide
- [ ] Animation tinh tế, không gây xao nhãng
- [ ] Storytelling flow liền mạch — mỗi slide "hook" sang slide tiếp theo
- [ ] Logo và brand Kolia nhất quán toàn bộ
- [ ] Slide đọc tốt trên projector (contrast đủ, chữ đủ lớn)
