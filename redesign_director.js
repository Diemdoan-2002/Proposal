const fs = require('fs');

const target = 'c:\\Users\\admin\\Desktop\\Working\\Proposal\\kolia-proposal-v6.html';

// Start from fresh V5
fs.copyFileSync('c:\\Users\\admin\\Desktop\\Working\\Proposal\\kolia-proposal-v5.html', target);
let html = fs.readFileSync(target, 'utf8');

function replaceBetween(text, startMarker, endMarker, newContent) {
    const startIndex = text.indexOf(startMarker);
    const endIndex = text.indexOf(endMarker);
    if (startIndex !== -1 && endIndex !== -1) {
        return text.substring(0, startIndex + startMarker.length) + "\n" + newContent + "\n  " + text.substring(endIndex);
    }
    return text; // fallback
}

// ----------------------------------------------------
// REDESIGN SLIDE 3 (VẤN ĐỀ)
// ----------------------------------------------------
const s3_new = `
<div class="slide" style="background: #ffffff; padding: 50px 60px; justify-content: flex-start;">
  <div style="border-bottom: 2px solid #ef4444; padding-bottom: 12px; margin-bottom: 40px; display: flex; justify-content: space-between; align-items: flex-end;">
    <div>
      <div style="font-size: 13px; font-weight: 700; color: #ef4444; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">Thực trạng & Vấn đề</div>
      <div style="font-size: 32px; font-weight: 800; color: #0f172a;">Những khoảng trống trong quản lý điều trị</div>
    </div>
    <div style="font-size: 12px; color: #64748b; font-weight: 600;">03 / 17</div>
  </div>

  <div style="display: flex; gap: 40px; align-items: stretch;">
    <!-- Patient -->
    <div style="flex: 1; background: #fef2f2; border: 1px solid #fee2e2; border-left: 4px solid #ef4444; padding: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border-radius: 4px;">
      <div style="font-size: 20px; font-weight: 800; color: #991b1b; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #fca5a5;">
        Phía Bệnh Nhân & Gia Đình
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 15px; color: #7f1d1d; line-height: 1.6;">
        <li style="margin-bottom: 20px;">
            <strong style="display:block; font-size:16px; margin-bottom:4px;">Tuân thủ kém do suy giảm trí nhớ</strong>
            Theo thống kê, người cao tuổi thường quên uống thuốc, không có thói quen đo huyết áp đều đặn mỗi ngày.
        </li>
        <li style="margin-bottom: 20px;">
            <strong style="display:block; font-size:16px; margin-bottom:4px;">Thiếu kết nối thông tin</strong>
            Người thân và con cái đi làm xa, không thể nắm bắt kịp thời diễn biến sức khỏe hàng ngày của bố mẹ.
        </li>
        <li>
            <strong style="display:block; font-size:16px; margin-bottom:4px;">Nguy cơ biến chứng tàng hình</strong>
            60% ca biến chứng/đột quỵ xảy ra tại nhà do không phát hiện sớm các dấu hiệu cảnh báo lâm sàng.
        </li>
      </ul>
    </div>
    
    <!-- Hospital -->
    <div style="flex: 1; background: #f0fdf4; border: 1px solid #dcfce3; border-left: 4px solid #22c55e; padding: 30px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); border-radius: 4px;">
      <div style="font-size: 20px; font-weight: 800; color: #166534; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #86efac;">
        Phía Bác Sĩ & Cơ Sở Y Tế
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 15px; color: #14532d; line-height: 1.6;">
        <li style="margin-bottom: 20px;">
            <strong style="display:block; font-size:16px; margin-bottom:4px;">Hệ thống chăm sóc đứt gãy</strong>
            Bác sĩ không có công cụ liên kết và giám sát bệnh nhân ngoại trú liên tục sau khi bệnh nhân xuất viện.
        </li>
        <li style="margin-bottom: 20px;">
            <strong style="display:block; font-size:16px; margin-bottom:4px;">Thiếu hụt dữ liệu chẩn đoán</strong>
            Bác sĩ phải chẩn đoán dựa trên trí nhớ mờ nhạt của bệnh nhân, thiếu lịch sử dữ liệu chỉ số liên tục 24/7.
        </li>
        <li>
            <strong style="display:block; font-size:16px; margin-bottom:4px;">Can thiệp quá trễ</strong>
            Chủ yếu chỉ có thể can thiệp xử lý hậu quả khi bệnh nhân đã vào viện cấp cứu, thay vì chủ động phòng ngừa.
        </li>
      </ul>
    </div>
  </div>
</div>
`;
html = replaceBetween(html, "<!-- ╔══════════════ SLIDE 3: VẤN ĐỀ — Two-column unified ══════════════╗ -->", "<!-- ╔══════════════ SLIDE 4: GIẢI PHÁP ══════════════╗ -->", s3_new);

// ----------------------------------------------------
// REDESIGN SLIDE 4 (GIẢI PHÁP)
// ----------------------------------------------------
const s4_new = `
<div class="slide" style="background: #ffffff; padding: 50px 60px; justify-content: flex-start;">
  <div style="border-bottom: 2px solid #0d9488; padding-bottom: 12px; margin-bottom: 32px; display: flex; justify-content: space-between; align-items: flex-end;">
    <div>
      <div style="font-size: 13px; font-weight: 700; color: #0d9488; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;">Giải pháp Toàn diện</div>
      <div style="font-size: 32px; font-weight: 800; color: #0f172a;">Kolia – Đồng hành chăm sóc y tế tại nhà</div>
    </div>
    <div style="font-size: 12px; color: #64748b; font-weight: 600;">04 / 17</div>
  </div>

  <div style="font-size: 16px; color: #334155; margin-bottom: 32px; max-width: 800px; font-weight: 500; line-height: 1.5;">
    Hệ sinh thái ứng dụng giúp bệnh nhân tim mạch và huyết áp tự quản lý sức khỏe mỗi ngày, <strong style="color: #0d9488;">kéo dài sự chăm sóc của bác sĩ về tận nhà.</strong>
  </div>

  <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-bottom: 32px;">
    <!-- Pillar 1 -->
    <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; background: #fff;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
        <div style="background: #0d9488; color: #fff; width: 28px; height: 28px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px;">1</div>
        <div style="font-size: 18px; font-weight: 700; color: #0f172a;">Tuân thủ điều trị</div>
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: #475569; line-height: 1.8;">
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Nhắc thuốc đúng cữ thông minh</li>
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Ghi nhật ký huyết áp mỗi ngày</li>
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Quản lý lịch tái khám tự động</li>
      </ul>
    </div>
    
    <!-- Pillar 2 -->
    <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; background: #fff;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
        <div style="background: #0d9488; color: #fff; width: 28px; height: 28px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px;">2</div>
        <div style="font-size: 18px; font-weight: 700; color: #0f172a;">Kiểm soát kỹ thuật</div>
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: #475569; line-height: 1.8;">
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Trợ lý ảo AI phân tích chuyên sâu</li>
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Kế hoạch dinh dưỡng cá nhân hóa</li>
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Lộ trình vận động khoa học</li>
      </ul>
    </div>

    <!-- Pillar 3 -->
    <div style="border-top: 1px solid #e2e8f0; padding-top: 16px; background: #fff;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
        <div style="background: #0d9488; color: #fff; width: 28px; height: 28px; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px;">3</div>
        <div style="font-size: 18px; font-weight: 700; color: #0f172a;">Kết nối & An toàn</div>
      </div>
      <ul style="list-style: none; padding: 0; margin: 0; font-size: 14px; color: #475569; line-height: 1.8;">
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Đồng bộ realtime với người thân</li>
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Cảnh báo chỉ số bất thường ngay lập tức</li>
        <li style="position: relative; padding-left: 16px;"><span style="position:absolute; left:0; color:#0d9488;">•</span> Nút hỗ trợ khẩn cấp SOS mạng y tế</li>
      </ul>
    </div>
  </div>

  <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #0d9488; padding: 16px 20px; font-size: 14px; color: #1e293b; line-height: 1.5; margin-top: auto; border-radius: 4px;">
      <strong style="color: #0f172a; font-size: 15px;">★ Thiết kế đặc thù cho người cao tuổi:</strong> Giao diện phóng to tĩnh, thao tác 1 chạm tối giản, tích hợp điều khiển giọng nói tự nhiên độc quyền. <br>
      <span style="font-size: 13px; color: #64748b; margin-top: 8px; display: block;">Lưu ý nền tảng: Cốt lõi của Kolia là quản lý phòng ngừa không xâm lấn; Kolia cam kết KHÔNG TỰ Ý cấp đơn thuốc hoặc thay thế chẩn đoán lâm sàng của bác sĩ chuyên khoa.</span>
  </div>
</div>
`;
html = replaceBetween(html, "<!-- ╔══════════════ SLIDE 4: GIẢI PHÁP ══════════════╗ -->", "<!-- S5:", s4_new);

// Fixing generic text issues on other slides:
html = html.replace(
    '150.000</strong> kịch bản kiến thức y khoa được bác sĩ kiểm chứng',
    '500+</strong> quy trình chuẩn y khoa được Cục Quản lý Khám chữa bệnh kiểm chứng'
);

html = html.replace(/Nuôi cây Kolia/g, 'Tích điểm Kolia');
html = html.replace(/Xu → Quà thật/g, 'Đổi thiết bị y tế');
html = html.replace(/Hệ thống nuôi cây/g, 'Hệ thống Loyalty Y tế');
html = html.replace(
    'Làm nhiệm vụ sức khỏe hàng ngày để chăm cây lớn qua 3 giai đoạn và thu hoạch xu tích lũy.',
    'Hoàn thành các mục tiêu sức khỏe hàng ngày (đo huyết áp, uống thuốc) để tích lũy điểm Loyalty, quy đổi thiết bị đo huyết áp.'
);
html = html.replace('<SPAN CLASS="TAG-DOT"></SPAN>TÍNH NĂNG 09', '<span class="tag-dot"></span>HỆ THỐNG LOYALTY (GAMIFICATION)');

fs.writeFileSync(target, html, 'utf8');
console.log("Strategic Redesign Applied.");
