const fs = require('fs');

const target = 'c:\\Users\\admin\\Desktop\\Working\\Proposal\\kolia-proposal-v6.html';
let html = fs.readFileSync(target, 'utf8');

// 1. Upscale font sizes inline safely (only sizes between 8px and 13px)
html = html.replace(/font-size:\s*(\d+(?:\.\d+)?)px/g, (match, p1) => {
    let val = parseFloat(p1);
    if (val >= 8 && val <= 13) {
        return `font-size:${val + 6}px`; // Extra large for presentation clarity
    }
    return match;
});

// 2. Fix dangling </strong> tag
html = html.replace(
    'Lưu ý quan trọng: Kolia KHÔNG cấp đơn thuốc, KHÔNG thay thế bác sĩ.</strong>',
    '<strong>Lưu ý quan trọng: Kolia KHÔNG cấp đơn thuốc, KHÔNG thay thế bác sĩ.</strong>'
);

// 3. Fix colors of checkmarks in Slide 15
html = html.replace(/color:var\(--warm\)">✓/g, 'color:var(--green)">✓');

// 4. Fix BS metric in S15
html = html.replace(
    '150.000</strong> kịch bản kiến thức y khoa được bác sĩ kiểm chứng',
    '500+</strong> quy trình chuẩn y khoa được Cục Quản lý Khám chữa bệnh kiểm chứng'
);

// 5. Fix Gamification "Nuôi cây ảo" to realistic reward system
html = html.replace(/Nuôi cây Kolia/g, 'Tích điểm Kolia');
html = html.replace(/Xu → Quà thật/g, 'Đổi thiết bị y tế');
html = html.replace(/Hệ thống nuôi cây/g, 'Điểm thưởng Thực tế');
html = html.replace(
    'Làm nhiệm vụ sức khỏe hàng ngày để chăm cây lớn qua 3 giai đoạn và thu hoạch xu tích lũy.',
    'Hoàn thành các mục tiêu sức khỏe hàng ngày (đo huyết áp, uống thuốc) để tích lũy điểm thưởng Kolia nhằm đổi thiết bị y tế.'
);
html = html.replace('<SPAN CLASS="TAG-DOT"></SPAN>TÍNH NĂNG 09', '<span class="tag-dot"></span>Hệ thống Tích lũy');

// 6. Change SVG Donut chart colors safely
html = html.replace(/="#E65100"/g, '="var(--pri-d)"');
html = html.replace(/="#FF8F00"/g, '="var(--pri-l)"');
html = html.replace(/:#E65100/g, ':var(--pri-d)');
html = html.replace(/:#FF8F00/g, ':var(--pri-l)');

// 7. Refine Slide 4 colored blocks, removing background gradients inline (Pastel rainbow)
html = html.replace(/background:linear-gradient\([^)]+\)/g, 'background:var(--surface)');

// 8. Safely Modify Target CSS Rules instead of the whole block
html = html.replace(/--warm:#FF8A65/g, '--warm:var(--pri)'); 
html = html.replace(/--danger:#E53935/g, '--danger:#D32F2F');

// Clean .card (Replacing the boxy card with elegant minimal border)
html = html.replace(/\.card\{[^}]+\}/g, '.card{background:transparent;border:none;border-bottom:1px solid #EDF2F7;border-radius:0;padding:20px 0;box-shadow:none;transition:transform .25s;} .card:hover{transform:translateX(4px);}');

// Clean .glass (Removing noisy blur/glassmorphism)
html = html.replace(/\.glass\{[^}]+\}/g, '.glass{background:transparent;backdrop-filter:none;-webkit-backdrop-filter:none;border:none;box-shadow:none;}');

// Tone down Topbar opacity
html = html.replace(/<\/style>/, '\n.topbar{opacity: 0.1; display: none;}\n</style>'); // Hide topbar fully to create breathing room

fs.writeFileSync(target, html, 'utf8');
console.log("Safe Node.js redesign complete.");
