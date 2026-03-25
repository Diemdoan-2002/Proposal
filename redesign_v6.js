const fs = require('fs');
const target = 'c:\\Users\\admin\\Desktop\\Working\\Proposal\\kolia-proposal-v6.html';
let html = fs.readFileSync(target, 'utf8');

// 1. Upscale font sizes inline
html = html.replace(/font-size:\s*(\d+(?:\.\d+)?)px/g, (match, p1) => {
    let val = parseFloat(p1);
    if (val >= 8 && val <= 13) {
        return `font-size:${Math.round(val + 4)}px`;
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

// 4. Fix 150,000 scenarios BS metric in S15
html = html.replace(
    '150.000</strong> kịch bản kiến thức y khoa được bác sĩ kiểm chứng',
    '500+</strong> quy trình chuẩn y khoa được hội đồng thẩm định'
);

// 5. Fix Gamification "Nuôi cây ảo" to realistic reward system in S13
html = html.replace(/Nuôi cây Kolia/g, 'Tích điểm Kolia');
html = html.replace(/Xu → Quà thật/g, 'Đổi thiết bị y tế');
html = html.replace(/Hệ thống nuôi cây/g, 'Điểm thưởng Thực tế');
html = html.replace(
    'Làm nhiệm vụ sức khỏe hàng ngày để chăm cây lớn qua 3 giai đoạn và thu hoạch xu tích lũy.',
    'Hoàn thành các mục tiêu sức khỏe hàng ngày (đo huyết áp, uống thuốc) để tích lũy điểm thưởng Kolia.'
);
html = html.replace('<SPAN CLASS="TAG-DOT"></SPAN>TÍNH NĂNG 09', '<span class="tag-dot"></span>Giáo dục & Thưởng');

// 6. Change SVG Donut chart colors in S2 from Orange to Teal
html = html.replace(/stop-color="#E65100"/g, 'stop-color="var(--pri-d)"');
html = html.replace(/stop-color="#FF8F00"/g, 'stop-color="var(--pri-l)"');
html = html.replace(/color:#E65100/g, 'color:var(--pri-d)"');

// 7. Refine Slide 4 colored blocks, removing background gradients inline
html = html.replace(/background:linear-gradient\([^)]+\)/g, 'background:var(--surface)');

// 8. Modify CSS block to give it a premium feel
const newCss = `
/* === CSS REDESIGN V6 === */
:root {
  --pri:#3bada4;--pri-d:#2d8a82;--pri-l:#55CCC2;--pri-bg:#e2f5f1;
  --bg:#FFFFFF;--surface:#F8F9FA;--white:#FFFFFF;
  --text:#1A2B3C;--text2:#4A5568;--text3:#868E96;
  --danger:#D32F2F;--danger-bg:#FFEBEE;
  --warm:#F57C00;--green:#2E7D32;
  --font:'Be Vietnam Pro',system-ui,sans-serif;
  --slide-w:960px;--slide-h:540px;
  --shadow-sm:none;
  --shadow-md:0 10px 30px rgba(0,0,0,.03);
  --shadow-lg:0 20px 40px rgba(0,0,0,.05);
  --radius:16px;
}
* { box-sizing: border-box; }
body { margin:0; font-family:var(--font); background:#0D1B2A; color:var(--text); -webkit-font-smoothing:antialiased; display:flex; flex-direction:column; align-items:center; }
.slide { width:var(--slide-w); height:var(--slide-h); background:var(--bg); position:relative; overflow:hidden; display:flex; flex-direction:column; margin: 40px 0; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
.dot-bg::after { content:''; position:absolute; inset:0; background-image:radial-gradient(circle,rgba(59,173,164,.04) 1px,transparent 1px); background-size:24px 24px; z-index:0; pointer-events:none; }

/* === MINIMAL TOP BAR === */
.topbar { height:16px; background:transparent; display:flex; align-items:center; padding:24px 60px 0; flex-shrink:0; opacity:0.5; z-index:10; position:relative; }
.topbar svg { display:none; } 
.topbar .sep { flex:1; }
.topbar .nav-label { font-size:12px; color:var(--text); letter-spacing:1px; text-transform:uppercase; font-weight:600; }

.sfoot { position:absolute; bottom:0; left:0; right:0; height:60px; background:linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0)); display:flex; align-items:center; justify-content:space-between; padding:0 60px; font-size:12px; color:var(--text3); letter-spacing:1px; text-transform:uppercase; z-index:10; }
.sfoot .pg { color:var(--pri); font-weight:800; font-size:14px; }

.content { flex:1; padding:20px 60px 40px; position:relative; overflow:hidden; z-index:1; }

.h1 { font-size:48px; font-weight:800; line-height:1.1; color:var(--text); letter-spacing:-1px; margin:0 0 16px; }
.h2 { font-size:36px; font-weight:800; line-height:1.2; color:var(--text); letter-spacing:-0.5px; margin:0 0 16px; }
.h3 { font-size:24px; font-weight:700; color:var(--text); margin:0 0 12px; }
.accent { color:var(--pri); }
.sub { font-size:18px; color:var(--text2); line-height:1.6; margin:0 0 24px; }
.tag { display:inline-flex; align-items:center; gap:8px; background:transparent; color:var(--pri); font-size:13px; font-weight:800; letter-spacing:2px; text-transform:uppercase; padding:0; border-radius:0; margin-bottom:12px; }
.tag-dot { width:6px; height:6px; border-radius:50%; background:var(--pri); }
.accent-line { width:60px; height:4px; background:var(--pri); border-radius:2px; margin:16px 0 24px; }

/* MOCKUP (Clean, no toy-like CSS) */
.phone { width:200px; height:400px; background:#fff; border-radius:32px; padding:6px; box-shadow:0 0 0 1px #E2E8F0, var(--shadow-lg); position:relative; flex-shrink:0; transform: perspective(1000px) rotateY(-5deg); transition: transform 0.5s ease; }
.phone:hover { transform: perspective(1000px) rotateY(0deg); }
.phone::before { display:none; } 
.phone::after { display:none; } 
.phone img { width:100%; height:100%; object-fit:cover; object-position:top; border-radius:26px; display:block; }

/* BORDERLESS CARDS */
.card { background:transparent; border:none; border-radius:0; padding:20px 0; border-bottom:1px solid #EDF2F7; box-shadow:none; transition:transform .25s; margin-bottom: 0; }
.card:last-child { border-bottom:none; }
.card:hover { transform:translateX(6px); }
.card-icon { width:48px; height:48px; border-radius:12px; background:var(--surface); display:flex; align-items:center; justify-content:center; margin-bottom:16px; }
.card-icon svg { width:24px; height:24px; stroke-width:2; stroke:var(--pri); fill:none; }

/* Remove glassy noise */
.glass { background:transparent; backdrop-filter:none; -webkit-backdrop-filter:none; border:none; box-shadow:none; }

.fbadge { display:flex; align-items:center; gap:12px; background:#fff; padding:16px 24px; border-radius:12px; box-shadow:var(--shadow-md); border:1px solid #EDF2F7; font-size:15px; font-weight:700; color:var(--text); }
.ico { display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }

ul.blist { list-style:none; padding:0; margin:0; }
ul.blist li { position:relative; padding-left:24px; margin-bottom:12px; font-size:16px; color:var(--text2); line-height:1.5; }
ul.blist li::before { content:'•'; position:absolute; left:0; color:var(--pri); font-weight:bold; font-size:20px; line-height:1.2; }
`;

let headSplit = html.split('</style>');
if (headSplit.length > 1) {
    let firstPart = headSplit[0];
    let styleStart = firstPart.indexOf('<style>');
    if(styleStart > -1) {
        html = html.substring(0, styleStart) + '<style>\\n' + newCss + '\\n</style>' + html.substring(firstPart.length + 8);
    }
}
fs.writeFileSync(target, html, 'utf8');
console.log("Node.js redesign complete.");
