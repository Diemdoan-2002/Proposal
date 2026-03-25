import re
import os

target = r'c:\Users\admin\Desktop\Working\Proposal\kolia-proposal-v6.html'

with open(target, 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Typography - upscale font sizes from inline styles. 
# Anything between 8px and 13px will be increased by 4px or 5px.
def upscale_font(match):
    val = float(match.group(1))
    return f"font-size:{int(val + 4)}px"
html = re.sub(r'font-size:(\d+(?:\.\d+)?)px', upscale_font, html)

# 2. Fix the dangling </strong> tag
html = html.replace('Lưu ý quan trọng: Kolia KHÔNG cấp đơn thuốc, KHÔNG thay thế bác sĩ.</strong>',
                    '<strong>Lưu ý quan trọng: Kolia KHÔNG cấp đơn thuốc, KHÔNG thay thế bác sĩ.</strong>')

# 3. Fix colors of checkmarks in Slide 15
html = html.replace('color:var(--warm)">✓', 'color:var(--green)">✓')

# 4. Fix 150,000 scenarios BS metric in S15
html = html.replace('150.000</strong> kịch bản kiến thức y khoa được bác sĩ kiểm chứng',
                    '500+</strong> quy trình chuẩn y khoa được hội đồng thẩm định')

# 5. Fix Gamification "Nuôi cây ảo" to realistic reward system in S13
html = html.replace('Nuôi cây Kolia', 'Tích điểm Kolia')
html = html.replace('Xu → Quà thật', 'Đổi thiết bị y tế')
html = html.replace('Hệ thống nuôi cây', 'Điểm thưởng Thực tế')
html = html.replace('Làm nhiệm vụ sức khỏe hàng ngày để chăm cây lớn qua 3 giai đoạn và thu hoạch xu tích lũy.',
                    'Hoàn thành các mục tiêu sức khỏe hàng ngày (đo huyết áp, uống thuốc) để tích lũy điểm thưởng Kolia.')
html = html.replace('<SPAN CLASS="TAG-DOT"></SPAN>TÍNH NĂNG 09', '<span class="tag-dot"></span>Giáo dục & Thưởng')

# 6. Change SVG Donut chart colors in S2 from Orange to Teal
html = html.replace('stop-color="#E65100"', 'stop-color="var(--pri-d)"')
html = html.replace('stop-color="#FF8F00"', 'stop-color="var(--pri-l)"')
html = html.replace('color:#E65100', 'color:var(--pri-d)')

# 7. Modify CSS block to give it a premium feel
new_css = """
/* === CSS REDESIGN === */
:root{
  --pri:#3bada4;--pri-d:#2d8a82;--pri-l:#55CCC2;--pri-bg:#e2f5f1;
  --bg:#FFFFFF;--surface:#F8F9FA;--white:#FFFFFF;
  --text:#1A2B3C;--text2:#4A5568;--text3:#868E96;
  --danger:#E53935;--danger-bg:#FFEBEE;
  --warm:#FF8A65;--green:#2E7D32;
  --font:'Be Vietnam Pro',system-ui,sans-serif;
  --slide-w:960px;--slide-h:540px;
  --shadow-sm:none;
  --shadow-md:0 10px 30px rgba(0,0,0,.03);
  --shadow-lg:0 20px 40px rgba(0,0,0,.05);
  --radius:16px;
}
body{font-family:var(--font);background:#0D1B2A;color:var(--text);-webkit-font-smoothing:antialiased}

.slide{width:var(--slide-w);height:var(--slide-h);background:var(--bg);position:relative;overflow:hidden;display:flex;flex-direction:column}
.dot-bg::after{content:'';position:absolute;inset:0;background-image:radial-gradient(circle,rgba(59,173,164,.03) 1px,transparent 1px);background-size:24px 24px;z-index:0;pointer-events:none}

/* === TOP BAR (Minimalist) === */
.topbar{height:20px;background:transparent;display:flex;align-items:center;padding:16px 60px 0;flex-shrink:0;opacity:0.3}
.topbar svg{display:none} /* Hide heavy SVG */
.topbar .sep{flex:1}
.topbar .nav-label{font-size:10px;color:var(--text);letter-spacing:1px;text-transform:uppercase;font-weight:600}

.sfoot{position:absolute;bottom:0;left:0;right:0;height:40px;background:transparent;display:flex;align-items:center;justify-content:space-between;padding:0 60px;font-size:11px;color:var(--text3);letter-spacing:1px;text-transform:uppercase}
.sfoot .pg{color:var(--pri);font-weight:800;font-size:12px}

.content{flex:1;padding:10px 60px 30px;position:relative;overflow:hidden;z-index:1}

.h1{font-size:48px;font-weight:800;line-height:1.1;color:var(--text);letter-spacing:-1px}
.h2{font-size:36px;font-weight:800;line-height:1.2;color:var(--text);letter-spacing:-0.5px}
.h3{font-size:24px;font-weight:700;color:var(--text)}
.accent{color:var(--pri)}
.sub{font-size:18px;color:var(--text2);line-height:1.6}
.tag{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--pri);font-size:12px;font-weight:800;letter-spacing:2px;text-transform:uppercase;padding:0;border-radius:0}
.tag-dot{width:6px;height:6px;border-radius:50%;background:var(--pri)}
.tag--danger{color:var(--danger)}
.tag--danger .tag-dot{background:var(--danger)}
.accent-line{width:60px;height:4px;background:var(--pri);border-radius:2px;margin:12px 0 20px}

/* MOCKUP (Minimal frame) */
.phone{width:190px;height:380px;background:#fff;border-radius:32px;padding:8px;box-shadow:0 0 0 4px #E2E8F0, var(--shadow-lg);position:relative;flex-shrink:0}
.phone::before{display:none} 
.phone::after{display:none} 
.phone img{width:100%;height:100%;object-fit:cover;object-position:top;border-radius:24px;display:block}

/* Premium Borderless Cards */
.card{background:transparent;border:none;border-radius:0;padding:20px 0;border-bottom:1px solid #EDF2F7;box-shadow:none;transition:transform .25s;}
.card:last-child{border-bottom:none}
.card:hover{transform:translateX(4px)}
.card-icon{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:12px}
.card-icon svg{width:20px;height:20px;stroke-width:2;}

/* Disable noisy glassmorphism */
.glass{background:transparent;backdrop-filter:none;-webkit-backdrop-filter:none;border:none;box-shadow:none}

.fbadge{display:flex;align-items:center;gap:12px;background:#fff;padding:12px 20px;border-radius:12px;box-shadow:var(--shadow-md);border:1px solid #EDF2F7;font-size:14px;font-weight:700;color:var(--text)}
.ico{display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}

/* Stat row */
.stat{display:flex;align-items:center;gap:16px;padding:16px 0;border-radius:0;background:transparent;border:none;box-shadow:none;border-bottom:1px solid #EDF2F7;}
.stat-txt{font-size:16px;color:var(--text2);line-height:1.5}
.stat-ico{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.stat-ico svg{width:20px;height:20px;stroke-width:2;}

.donut-wrap{position:relative;width:220px;height:220px}
.donut-wrap svg{transform:rotate(-90deg)}
.donut-center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.donut-num{font-size:52px;font-weight:800;line-height:1}
.donut-label{font-size:14px;color:var(--text2);margin-top:4px;text-align:center;line-height:1.4}

[data-mode="dynamic"] .slide{position:relative!important;transform:none!important;opacity:1!important;pointer-events:auto!important;margin:40px auto;box-shadow:0 12px 40px rgba(0,0,0,.15);border-radius:16px}
[data-mode="dynamic"] .rv{opacity:1;transform:none}
@media print{body{background:#fff}.slide{margin:0;box-shadow:none;page-break-after:always}}
"""
html = re.sub(r'<style>.*?</style>', f'<style>{new_css}</style>', html, flags=re.DOTALL)

# Refine Slide 4 colored blocks, removing background gradients inline
html = re.sub(r'background:linear-gradient\([^)]+\)', 'background:var(--surface)', html)

with open(target, 'w', encoding='utf-8') as f:
    f.write(html)

print("Redesign complete.")
