import { PersonalProfile, Project, SkillGroup, ExperienceItem } from '../types/portfolio';

export const personalProfile: PersonalProfile = {
  name: 'Trần Huỳnh Hoa Giáp',
  brandName: 'HoaGiap.dev',
  title: 'AI & Full-Stack Software Engineer',
  roleSubtitle: 'Full-Stack Developer & Deep Learning Engineer | Kỹ sư Phần mềm & Trí tuệ Nhân tạo',
  shortBio: 'Kỹ sư Công nghệ Thông tin tốt nghiệp từ Trường Công Nghệ Số và Trí Tuệ Nhân Tạo – Đại học Nam Cần Thơ (GPA: 3.14/4.0), sở hữu nền tảng vững vàng về Deep Learning / Thị giác máy tính kết hợp năng lực phát triển Full-Stack Web & Software độc lập, thực chiến.',
  fullBio: 'Kỹ sư Công nghệ Thông tin tốt nghiệp từ Trường Công Nghệ Số và Trí Tuệ Nhân Tạo – Đại học Nam Cần Thơ (GPA: 3.14/4.0), sở hữu nền tảng vững vàng về Deep Learning / Thị giác máy tính kết hợp năng lực phát triển Full-Stack Web & Software độc lập, thực chiến. Thế mạnh nổi trội là tư duy sản phẩm "nói được – làm được", nhanh chóng làm chủ công nghệ mới (PyTorch, Swin Transformer, React 19, Node.js, .NET Core) để đóng gói thành các giải pháp ứng dụng hoàn thiện, ổn định và tối ưu trải nghiệm người dùng. Luôn sẵn sàng cống hiến năng lực, tinh thần kỷ luật và sự thích nghi nhanh để giải quyết các thách thức kỹ thuật của doanh nghiệp.',
  yearsOfExperience: 'Fresher / 1 năm thực chiến',
  availableForWork: true,
  statusBadge: 'Đang sẵn sàng nhận việc ngay (Open to Work)',
  contact: {
    email: 'hoagiap691@gmail.com',
    phone: '0795957824',
    location: 'Tân Long, Tân Bình, Cần Thơ (Sẵn sàng On-site/Hybrid tại Cần Thơ, Hậu Giang, TP.HCM hoặc Remote toàn cầu)',
    github: 'https://github.com/HoaGiap',
    linkedin: 'https://www.linkedin.com/in/hoa-gi%C3%A1p-039b0b41a',
  },
  cvFiles: [
    {
      name: 'Bản chuyên sâu AI / Deep Learning',
      description: 'Hồ sơ chuyên sâu về Computer Vision, PyTorch, Swin Transformer & Medical AI',
      fileName: 'cv.pdf',
    },
    {
      name: 'Bản Kỹ thuật viên & Phần mềm Full-Stack',
      description: 'Hồ sơ chuyên môn Full-Stack Web (React 19, Node.js), .NET & Quản trị CSDL',
      fileName: 'cv.pdf',
    },
  ],
  stats: [
    {
      label: 'Độ chính xác AI (MRI)',
      value: '99.42%',
      description: 'Phân loại 4 nhóm u não (Đồ án bảo vệ Xuất sắc)',
    },
    {
      label: 'Điểm tốt nghiệp GPA',
      value: '3.14/4.0',
      description: 'ĐH Nam Cần Thơ (Trường CNS & TTNT)',
    },
    {
      label: 'Toàn vẹn Dữ liệu ACID',
      value: '100%',
      description: 'Xử lý triệt tiêu tranh chấp qua SqlTransaction',
    },
    {
      label: 'Giải pháp Độc lập',
      value: '3+',
      description: 'Đóng gói hoàn thiện (Medical AI, Web, Desktop)',
    },
  ],
  philosophies: [
    {
      title: 'Tư Duy Sản Phẩm "Nói Được – Làm Được"',
      description: 'Không dừng lại ở lý thuyết mô hình, luôn chủ động đóng gói code thành ứng dụng hoàn thiện, ổn định và sẵn sàng bàn giao cho người dùng.',
      icon: 'Zap',
    },
    {
      title: 'Kiến Trúc Bền Vững & Toàn Vẹn Dữ Liệu',
      description: 'Tuân thủ chuẩn hóa CSDL (3NF), kiểm soát tranh chấp đồng thời chặt chẽ (ACID), viết code module hóa và dễ mở rộng.',
      icon: 'Code2',
    },
    {
      title: 'Ứng Dụng AI Thế Hệ Mới Vào Thực Tế',
      description: 'Tận dụng sức mạnh của Deep Learning, Explainable AI (Grad-CAM++) và các công cụ AI (Claude Code, Antigravity) để bứt phá tốc độ phát triển.',
      icon: 'HeartHandshake',
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai-deeplearning',
    title: 'Học Sâu & Trí Tuệ Nhân Tạo (Medical AI)',
    description: 'Thị giác máy tính, phân loại ảnh y tế và trực quan hóa Explainable AI',
    icon: 'Cpu',
    skills: [
      { name: 'PyTorch', level: 92, proficiency: 'Chuyên gia', icon: 'Cpu', experienceYears: '2+ năm', isCore: true },
      { name: 'EfficientNet-V2 & Swin Transformer', level: 90, proficiency: 'Chuyên gia', icon: 'Atom', experienceYears: '2 năm', isCore: true },
      { name: 'Explainable AI (Grad-CAM++)', level: 88, proficiency: 'Nâng cao', icon: 'Sparkles', experienceYears: '2 năm', isCore: true },
      { name: 'Python & FastAPI / Flask', level: 92, proficiency: 'Chuyên gia', icon: 'Terminal', experienceYears: '3+ năm', isCore: true },
      { name: 'Image Preprocessing & Augmentation', level: 88, proficiency: 'Nâng cao', icon: 'Boxes', experienceYears: '2 năm' },
      { name: 'TensorBoard Evaluation', level: 85, proficiency: 'Nâng cao', icon: 'Share2', experienceYears: '2 năm' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & 3D Interactive Web',
    description: 'Xây dựng giao diện tương tác cao cấp, Three.js 3D WebGL & Micro-interactions',
    icon: 'Layout',
    skills: [
      { name: 'ReactJS (React 18 & 19)', level: 92, proficiency: 'Chuyên gia', icon: 'Atom', experienceYears: '3+ năm', isCore: true },
      { name: 'Three.js / WebGL 3D', level: 85, proficiency: 'Nâng cao', icon: 'Sparkles', experienceYears: '2 năm', isCore: true },
      { name: 'TypeScript & JavaScript (ES6+)', level: 90, proficiency: 'Chuyên gia', icon: 'FileCode2', experienceYears: '3+ năm', isCore: true },
      { name: 'Vite & Tailwind CSS', level: 95, proficiency: 'Chuyên gia', icon: 'Palette', experienceYears: '3+ năm', isCore: true },
      { name: 'Recharts (Biểu đồ phân tích)', level: 88, proficiency: 'Nâng cao', icon: 'Boxes', experienceYears: '2 năm' },
      { name: '@hello-pangea/dnd (Kéo thả)', level: 86, proficiency: 'Nâng cao', icon: 'Share2', experienceYears: '2 năm' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & API Services',
    description: 'Hệ thống RESTful API, ASP.NET Core, Node.js & Real-time WebSockets',
    icon: 'Server',
    skills: [
      { name: 'Node.js & Express (v5)', level: 90, proficiency: 'Chuyên gia', icon: 'Terminal', experienceYears: '3+ năm', isCore: true },
      { name: 'Python FastAPI & Flask', level: 92, proficiency: 'Chuyên gia', icon: 'Cpu', experienceYears: '2+ năm', isCore: true },
      { name: 'C# & ASP.NET Core 8 / WinForms', level: 88, proficiency: 'Nâng cao', icon: 'FileCode2', experienceYears: '3 năm', isCore: true },
      { name: 'RESTful API & WebSocket Sync', level: 88, proficiency: 'Nâng cao', icon: 'Wifi', experienceYears: '3 năm' },
      { name: 'Firebase JWT Authentication', level: 88, proficiency: 'Nâng cao', icon: 'ShieldCheck', experienceYears: '2+ năm' },
    ],
  },
  {
    id: 'database-devops',
    title: 'Cơ Sở Dữ Liệu & Quy Trình DevOps',
    description: 'Microsoft SQL Server ACID, MongoDB, Docker & AI Workflow hiện đại',
    icon: 'Database',
    skills: [
      { name: 'Microsoft SQL Server (3NF, SqlTransaction)', level: 92, proficiency: 'Chuyên gia', icon: 'Database', experienceYears: '3+ năm', isCore: true },
      { name: 'MongoDB & Mongoose Pipeline', level: 85, proficiency: 'Nâng cao', icon: 'FolderGit2', experienceYears: '2+ năm' },
      { name: 'Docker & Docker Compose', level: 85, proficiency: 'Nâng cao', icon: 'Container', experienceYears: '2 năm', isCore: true },
      { name: 'Git & GitHub Workflow', level: 90, proficiency: 'Chuyên gia', icon: 'GitBranch', experienceYears: '3+ năm' },
      { name: 'Cloudinary CDN Media Sync', level: 85, proficiency: 'Nâng cao', icon: 'Cloud', experienceYears: '2 năm' },
      { name: 'AI Workflow (Claude Code, Antigravity)', level: 95, proficiency: 'Chuyên gia', icon: 'Sparkles', experienceYears: '2 năm', isCore: true },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'neuroscan-ai',
    title: 'NeuroScan AI — Hệ Thống Phân Loại 4 Loại U Não & XAI Qua Ảnh MRI',
    category: 'ai',
    description: 'Nghiên cứu, huấn luyện và đóng gói trọn gói giải pháp AI hỗ trợ y bác sĩ chẩn đoán và phân loại 4 nhóm u não (Glioma, Meningioma, Pituitary, No Tumor) từ ảnh chụp cộng hưởng từ MRI với cơ chế giải thích quyết định lâm sàng.',
    longDescription: 'Dự án Đồ án Tốt nghiệp đạt điểm Xuất sắc của Trần Huỳnh Hoa Giáp tại Trường Công Nghệ Số và Trí Tuệ Nhân Tạo – Đại học Nam Cần Thơ. Hệ thống kết hợp mạng nơ-ron tích chập EfficientNet-V2-S và Vision Transformer (Swin Transformer) trên tập dữ liệu ảnh MRI não bộ. Tích hợp giải thuật Explainable AI (Grad-CAM++) trực quan hóa Heatmap vị trí khối u, đóng gói Full-stack với Flask API và Docker, hỗ trợ xuất báo cáo chẩn đoán định dạng PDF chuẩn y khoa bằng ReportLab.',
    tags: ['Python', 'PyTorch', 'EfficientNet-V2', 'Swin Transformer', 'Grad-CAM++', 'Flask API', 'Docker', 'ReportLab'],
    metrics: {
      label: 'Độ chính xác kiểm thử',
      value: '99.42% Test Accuracy',
    },
    liveUrl: 'https://github.com/HoaGiap',
    githubUrl: 'https://github.com/HoaGiap',
    featured: true,
    mockupType: 'browser',
    architectureHighlights: [
      'Đạt độ chính xác ấn tượng 99.42% trên tập kiểm thử độc lập; đồ án được hội đồng chuyên môn đánh giá Xuất sắc',
      'Tích hợp Explainable AI (Grad-CAM++) tạo Heatmap trực quan hóa chính xác vị trí mô bệnh học tổn thương',
      'Đóng gói Full-stack cho phép tải ảnh, suy luận thời gian thực và xuất báo cáo lâm sàng chuẩn PDF tự động',
      'Container hóa toàn diện với Docker sẵn sàng triển khai trên hạ tầng máy chủ y tế',
    ],
  },
  {
    id: 'soundwave-hub',
    title: 'SoundWave Hub — Nền Tảng Nghe Nhạc Trực Tuyến & Real-Time Dashboard',
    category: 'web',
    description: 'Nền tảng web phát trực tuyến âm thanh trọn gói (Client & Admin) với giao diện người dùng hiện đại, quản lý hàng đợi nghe nhạc linh hoạt và bảng điều khiển phân tích số liệu tương tác theo thời gian thực.',
    longDescription: 'Xây dựng với React 19, Vite và Tailwind CSS theo phong cách Glassmorphism (Dark/Light mode). Tích hợp Audio Player nâng cao với hàng đợi kéo thả trực quan bằng @hello-pangea/dnd và đồng bộ lời bài hát chạy thời gian thực (.lrc). Backend Node.js với Express v5, MongoDB, phân quyền User/Admin bảo mật bằng Firebase JWT, lưu vết kiểm toán (Audit Log) và tối ưu hóa phân phối media qua Cloudinary CDN. Bảng điều khiển Admin trực quan hóa lưu lượng tương tác và doanh thu qua biểu đồ Recharts.',
    tags: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express v5', 'MongoDB', 'Firebase JWT', 'Cloudinary CDN', 'Recharts'],
    metrics: {
      label: 'Tính năng nổi bật',
      value: 'Real-time Sync & LRC',
    },
    liveUrl: 'https://github.com/HoaGiap',
    githubUrl: 'https://github.com/HoaGiap',
    featured: true,
    mockupType: 'browser',
    architectureHighlights: [
      'Giao diện Glassmorphism hỗ trợ Dark/Light mode và thiết kế chuẩn Responsive',
      'Audio Player nâng cao với hàng đợi kéo thả trực quan và đồng bộ lời bài hát chạy thời gian thực (.lrc)',
      'Admin Dashboard trực quan hóa lưu lượng tương tác, tần suất nghe và doanh thu theo thời gian thực bằng Recharts',
      'Bảo mật phân quyền (User/Admin), lưu vết kiểm toán (Audit Log) và tối ưu hóa phân phối media qua Cloudinary CDN',
    ],
  },
  {
    id: 'libmanager-pro',
    title: 'LibManager Pro — Quản Lý Thư Viện & Xử Lý Giao Dịch Đồng Thời',
    category: 'desktop',
    description: 'Phần mềm máy tính (Desktop App) phục vụ quản lý toàn diện quy trình mượn/trả sách, độc giả và tự động hóa tính phạt quá hạn cho thư viện trường học và doanh nghiệp.',
    longDescription: 'Phát triển bằng C# WinForms (.NET Framework) kết nối Microsoft SQL Server qua ADO.NET. Khảo sát bài toán thực tế, thiết kế cơ sở dữ liệu đạt chuẩn chuẩn hóa 3NF, thiết lập Indexing và Stored Procedures tối ưu hóa tốc độ truy vấn. Ứng dụng kỹ thuật xử lý giao dịch SqlTransaction để kiểm soát tranh chấp đồng thời phức tạp, đảm bảo tính toàn vẹn dữ liệu (ACID) và triệt tiêu 100% lỗi lệch số lượng tồn kho khi nhiều thủ thư thao tác cùng lúc.',
    tags: ['C#', 'WinForms (.NET)', 'SQL Server', 'ADO.NET', 'SqlTransaction', 'Excel Export', '3NF Design'],
    metrics: {
      label: 'Kiểm soát giao dịch',
      value: '100% ACID Integrity',
    },
    liveUrl: 'https://github.com/HoaGiap',
    githubUrl: 'https://github.com/HoaGiap',
    featured: true,
    mockupType: 'terminal',
    architectureHighlights: [
      'Thiết kế CSDL đạt chuẩn 3NF, Indexing và Stored Procedures tối ưu hóa tốc độ truy vấn dữ liệu lớn',
      'Ứng dụng SqlTransaction kiểm soát tranh chấp đồng thời phức tạp, triệt tiêu 100% lỗi lệch tồn kho sách',
      'Tự động hóa tính ngày trễ hạn, phạt vi phạm và xuất báo cáo thống kê định dạng Excel',
      'Giao diện Windows Forms thân thiện, tốc độ xử lý tức thời và hoạt động bền bỉ',
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: 'exp-1',
    period: '2022 — 2026',
    role: 'Kỹ sư Phần mềm & Nghiên cứu Phát triển AI (Dự án & Thực hành)',
    company: 'Trường Công Nghệ Số và Trí Tuệ Nhân Tạo – Đại học Nam Cần Thơ & Dự án Độc lập',
    location: 'Cần Thơ, Việt Nam',
    type: 'Dự án / Học tập',
    achievements: [
      'Chủ trì nghiên cứu và xây dựng thành công giải pháp chẩn đoán u não qua ảnh MRI đạt độ chính xác 99.42% sử dụng kiến trúc EfficientNet-V2 kết hợp Swin Transformer và Explainable AI (Grad-CAM++).',
      'Thiết kế và triển khai trọn gói nhiều ứng dụng web Full-stack hiện đại (React 19, Node.js, Express v5, Flask, FastAPI) và ứng dụng desktop (.NET/C#), đảm bảo an toàn bảo mật và trải nghiệm tương tác mượt mà.',
      'Xây dựng và chuẩn hóa cơ sở dữ liệu quan hệ (SQL Server 3NF) và phi quan hệ (MongoDB), ứng dụng kỹ thuật SqlTransaction để xử lý tranh chấp đồng thời và đảm bảo tính toàn vẹn dữ liệu.',
      'Ứng dụng quy trình phát triển hiện đại với Docker, Git, và làm chủ các công cụ AI trợ lực (Claude Code, Google Antigravity, ChatGPT, Gemini, Codex) tăng tốc độ phát triển phần mềm.',
    ],
    technologies: ['PyTorch', 'Swin Transformer', 'React 19', 'Node.js', 'FastAPI', 'C# .NET', 'SQL Server', 'MongoDB', 'Docker'],
  },
  {
    id: 'exp-2',
    period: '2022 — 2026',
    role: 'Kỹ sư / Cử nhân Công nghệ Thông tin',
    company: 'Đại học Nam Cần Thơ (Nam Can Tho University - DNC)',
    location: 'Cần Thơ, Việt Nam',
    type: 'Full-time',
    achievements: [
      'Tốt nghiệp Kỹ sư Công nghệ Thông tin tại Trường Công Nghệ Số và Trí Tuệ Nhân Tạo với GPA 3.14/4.0 (Xếp loại Khá/Giỏi).',
      'Đồ án Tốt nghiệp chuyên sâu về Medical AI / Deep Learning được Hội đồng Chuyên môn chấm điểm và đánh giá Xuất sắc.',
      'Ngoại ngữ: Tiếng Việt (Bản ngữ), Tiếng Anh (Đọc hiểu tốt tài liệu kỹ thuật, nghiên cứu khoa học chuyên ngành).',
      'Kỹ năng & Giấy phép: Bằng lái xe máy hạng A1, có phương tiện di chuyển cá nhân, sẵn sàng di chuyển hoặc làm việc On-site/Hybrid linh hoạt.',
    ],
    technologies: ['Khoa học Máy tính', 'Deep Learning', 'Cơ sở Dữ liệu', 'Kiến trúc Phần mềm', 'OOP', 'Toán Rời rạc'],
  },
];
