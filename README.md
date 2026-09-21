# Trần Huỳnh Hoa Giáp — Personal Portfolio (Nous Research Hermes Spec)

Trang web Portfolio cá nhân dành cho **AI & Full-Stack Software Engineer** với ngôn ngữ thiết kế tối giản, công nghệ cao lấy cảm hứng từ [Hermes Agent (Nous Research)](https://hermes-agent.nousresearch.com/), kết hợp đồ họa không gian 3D tương tác với **Three.js**, chuyển động mượt mà và bộ chuyển đổi màu nền Colorway tức thì.

---

## 🌟 Điểm Nhấn Kiến Trúc & Thiết Kế

- **Ngôn ngữ thiết kế Hermes Spec**:
  - Tông màu chủ đạo: `#0000F2` (Electric Cobalt Blue), `#101010` (Obsidian Dark) và `#FFFFFF` (Pure White).
  - Khung viền **Double-Bezel** sắc nét, bo góc chuẩn 0px (`rounded: 0px`), dấu căn chỉnh kỹ thuật `+` (Technical Registration Marks).
  - Typography: Phong cách **Rules Gothic** (Barlow Condensed đậm nén) kết hợp font kỹ thuật monospace (Courier Prime & JetBrains Mono).
- **Bộ chuyển đổi màu nền (Colorway Switcher)**:
  - Cho phép chuyển đổi tức thì giữa 3 chế độ nền: `#101010` (Dark Obsidian), `#0000F2` (Electric Cobalt), và `#FFFFFF` (Pure White).
  - Hỗ trợ chọn nhanh trên Navbar, floating HUD ở góc dưới màn hình, hoặc nhấn phím tắt `T`.
- **Đồ họa 3D Three.js Tương tác**:
  - **Hero3DCanvas**: Khối đa diện không gian (Hyper-Polyhedron) 3D xoay tự do 360 độ theo chuột/cảm ứng, tích hợp vòng quỹ đạo Torus và vệ tinh dữ liệu; vật liệu khung dây tự động đổi màu tương phản theo từng theme.
  - **ThreeBackground**: Mạng lưới hạt nơ-ron không gian (Neural Constellation Mesh) di chuyển parallax theo trỏ chuột.
  - Bộ chuyển đổi trực quan kép giữa **3D_HYPER_MESH** và **CONFIG_SRC** (màn hình terminal kỹ thuật).
- **Công nghệ cốt lõi**:
  - React 19 + TypeScript + Vite.
  - Tailwind CSS + Framer Motion.
  - Lucide React icons.
  - Canvas Confetti khi gửi form liên hệ.

---

## 📁 Cấu Trúc Thư Mục

```text
Portfolio_HoaGiap/
├── public/                 # Static assets (favicons, cv.pdf)
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar (Technical Bar), Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│   │   ├── three/          # ThreeBackground, Hero3DCanvas (3D Polyhedron)
│   │   └── ui/             # DoubleBezelCard, Button, Badge, ThemeSwitcher, Modal
│   ├── context/
│   │   └── ThemeContext.tsx # Quản lý Colorway (#101010, #0000F2, #FFFFFF) & localStorage
│   ├── data/
│   │   └── portfolioData.ts # Dữ liệu hồ sơ thực tế của Trần Huỳnh Hoa Giáp
│   ├── types/
│   │   └── portfolio.ts    # TypeScript definitions
│   ├── App.tsx             # Root layout & ambient grid
│   ├── main.tsx            # React DOM mounting
│   └── index.css           # Design tokens, CSS variables & typography
├── index.html              # SEO meta tags & font imports
├── DESIGN.md               # Thiết kế đặc tả chuẩn Nous Research Hermes
├── package.json            # Dependencies & build scripts
├── tailwind.config.js      # Custom theme configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build config & code-splitting
```

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Dự Án

### 1. Cài đặt thư viện phụ thuộc (Dependencies)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Local Development)
```bash
npm run dev
```
Truy cập: `http://localhost:3000`

### 3. Đóng gói cho Production (Build)
```bash
npm run build
```
Thư mục xuất ra: `dist/`

### 4. Xem trước bản build Production (Preview)
```bash
npm run preview
```

---

## 👤 Thông Tin Kỹ Sư

- **Họ và tên**: Trần Huỳnh Hoa Giáp
- **Chuyên môn**: AI & Full-Stack Software Engineer
- **Email**: `hoagiap691@gmail.com`
- **Điện thoại**: `0795957824`
- **GitHub**: [https://github.com/HoaGiap](https://github.com/HoaGiap)
- **LinkedIn**: [https://www.linkedin.com/in/hoa-giáp-039b0b41a](https://www.linkedin.com/in/hoa-gi%C3%A1p-039b0b41a)

---

## 📄 Bản Quyền
Thiết kế và phát triển bởi **Trần Huỳnh Hoa Giáp** © 2026.
Tôn trọng và lấy cảm hứng từ ngôn ngữ thiết kế của Nous Research Hermes Agent.
