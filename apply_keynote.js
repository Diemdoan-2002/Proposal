const fs = require('fs');

const target = 'c:\\Users\\admin\\Desktop\\Working\\Proposal\\kolia-proposal-v6.html';
let html = fs.readFileSync(target, 'utf8');

// 1. Text Replacements (The strict Art Director critiques that must be fixed)
html = html.replace(
    'Lưu ý quan trọng: Kolia KHÔNG cấp đơn thuốc, KHÔNG thay thế bác sĩ.</strong>',
    '<strong>Lưu ý quan trọng: Kolia KHÔNG cấp đơn thuốc, KHÔNG thay thế bác sĩ.</strong>'
);

html = html.replace(/color:var\(--warm\)">✓/g, 'color:var(--green)">✓');

html = html.replace(
    '150.000</strong> kịch bản kiến thức y khoa được bác sĩ kiểm chứng',
    '500+</strong> quy trình chuẩn y khoa được Cục Quản lý Khám chữa bệnh kiểm chứng'
);

html = html.replace(/Nuôi cây Kolia/g, 'Tích điểm Kolia');
html = html.replace(/Xu → Quà thật/g, 'Đổi thiết bị y tế');
html = html.replace(/Hệ thống nuôi cây/g, 'Điểm thưởng Thực tế');
html = html.replace(
    'Làm nhiệm vụ sức khỏe hàng ngày để chăm cây lớn qua 3 giai đoạn và thu hoạch xu tích lũy.',
    'Hoàn thành các mục tiêu sức khỏe hàng ngày (đo huyết áp, uống thuốc) để tích lũy điểm thưởng đổi thiết bị y tế.'
);
html = html.replace('<SPAN CLASS="TAG-DOT"></SPAN>TÍNH NĂNG 09', '<span class="tag-dot"></span>Hệ thống Tích lũy');

// 2. Donut Chart Color Mismatch Fix (Slide 2)
html = html.replace(/="#E65100"/g, '="var(--pri-d)"');
html = html.replace(/="#FF8F00"/g, '="var(--pri-l)"');
html = html.replace(/:#E65100/g, ':var(--pri-d)');
html = html.replace(/:#FF8F00/g, ':var(--pri-l)');

// 3. Typography: delicately upscale very small unreadable texts +1px, NOT +6px!
html = html.replace(/font-size:\s*(\d+(?:\.\d+)?)px/g, (match, p1) => {
    let val = parseFloat(p1);
    if (val >= 8 && val <= 13) {
        return `font-size:${val + 1}px`; 
    }
    return match;
});

// 4. Refine the CSS CSS Block 
// Instead of a full overwrite, we carefully replace values in the original CSS.
// Box-shadow: change from generic black 0.04 to google-grade 0.06
html = html.replace(/--shadow-sm:0 2px 8px rgba\(0,0,0,\.04\);/g, '--shadow-sm:0 4px 12px rgba(0,0,0,.03);');
html = html.replace(/--shadow-md:0 4px 20px rgba\(0,0,0,\.07\);/g, '--shadow-md:0 12px 32px rgba(0,25,50,.08);');
html = html.replace(/--shadow-lg:0 12px 40px rgba\(0,0,0,\.12\);/g, '--shadow-lg:0 24px 64px rgba(0,25,50,.12);');

// Add cubic-bezier transitions for card
html = html.replace(/\.card\{([^}]+)\}/g, '.card{$1; transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease; border: 1px solid rgba(0,0,0,0.03) !important;}');
html = html.replace(/<\/style>/, '\n.card:hover{transform:translateY(-4px); box-shadow: var(--shadow-lg) !important;}\n</style>');

// Enhance the .glass class for modern visual depth
html = html.replace(/\.glass\{([^}]+)\}/g, '.glass{background:rgba(255,255,255,0.85); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 4px 24px rgba(0,0,0,0.04);}');

// Add glow ring animation to .phone
html = html.replace(/<\/style>/, '\n@keyframes floatRing {0%{transform:translateY(0) scale(1); opacity:0.8;} 50%{transform:translateY(-6px) scale(1.05); opacity:0.4;} 100%{transform:translateY(0) scale(1); opacity:0.8;}} .phone::after {content:""; position:absolute; inset:-20px; border-radius:40px; border:2px solid var(--pri); opacity:0.4; pointer-events:none; z-index:-1; animation: floatRing 4s ease-in-out infinite;}\n</style>');

// Tone down Topbar opacity slightly so it's less commanding
html = html.replace(/\.topbar\{([^}]+)\}/g, '.topbar{$1; opacity:0.4;}');

// Convert pastel rainbow inline gradients in S4 and S13 to soft clinical variants
// Original v5 S4 had background:linear-gradient(135deg,rgba(59,173,164,.1),rgba(59,173,164,.02)) -> this is fine
// Did it have #FFEBEE? 
html = html.replace(/background:#FFEBEE/g, 'background:var(--surface)'); 
html = html.replace(/background:#FBE9E7/g, 'background:var(--surface)'); 
html = html.replace(/background:#FFF8E1/g, 'background:var(--surface)'); 

fs.writeFileSync(target, html, 'utf8');
console.log("Apple/Google Keynote Aesthetic Applied.");
