import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Loader2,
  Clock,
  Sparkles,
  Radio,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalProfile } from '../../data/portfolioData';
import { DoubleBezelCard } from '../ui/DoubleBezelCard';
import { Button } from '../ui/Button';
import { Toast } from '../ui/Toast';
import { useTheme } from '../../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const isCobalt = theme === 'cobalt';
  const isLight = theme === 'light';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' }>({
    show: false,
    message: '',
    type: 'success',
  });

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Vui lòng nhập họ và tên của bạn.';
    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập địa chỉ email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Địa chỉ email không hợp lệ.';
    }
    if (!formData.subject.trim()) errs.subject = 'Vui lòng nhập tiêu đề tin nhắn.';
    if (!formData.message.trim()) {
      errs.message = 'Vui lòng nhập nội dung trao đổi.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Nội dung tin nhắn tối thiểu 10 ký tự.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: isCobalt ? ['#FFFFFF', '#A0C4FF', '#000091'] : ['#0000F2', '#000091', '#FFFFFF', '#60a5fa'],
      });

      setToast({
        show: true,
        message: 'ĐÃ TIẾP NHẬN THÔNG ĐIỆP. TÔI SẼ PHẢN HỒI QUA EMAIL TRONG 24H.',
        type: 'success',
      });

      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 5000);
    }, 1000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.contact.email);
    setCopiedEmail(true);
    setToast({
      show: true,
      message: 'ĐÃ SAO CHÉP EMAIL: ' + personalProfile.contact.email,
      type: 'success',
    });

    setTimeout(() => setCopiedEmail(false), 3000);
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-xs uppercase tracking-widest mb-3 border ${
              isCobalt
                ? 'bg-[#000091] border-white/50 text-white'
                : isLight
                ? 'bg-[#F0F4FF] border-[#0000F2]/40 text-[#0000F2]'
                : 'bg-[#0000F2]/10 border-[#0000F2]/30 text-[#0000F2]'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>[ 05 // KHỞI TẠO KẾT NỐI ]</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-4xl sm:text-5xl md:text-6xl font-display font-black uppercase tracking-tight ${
              isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
            }`}
          >
            Liên Hệ Trực Tiếp
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`mt-3 max-w-xl text-sm sm:text-base font-sans ${
              isCobalt ? 'text-white/85' : isLight ? 'text-slate-600' : 'text-[#A0A0A0]'
            }`}
          >
            Bạn có cơ hội việc làm, bài toán AI thực tế hay muốn trao đổi chuyên sâu về hệ thống? Tôi luôn sẵn sàng kết nối.
          </motion.p>
          <div
            className={`h-[2px] w-16 mt-4 ${
              isCobalt ? 'bg-white shadow-[0_0_12px_#ffffff]' : 'bg-[#0000F2] shadow-[0_0_12px_#0000F2]'
            }`}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <DoubleBezelCard innerClassName="p-6 sm:p-8 space-y-6">
              <div>
                <h3
                  className={`text-xl font-display uppercase tracking-wide font-bold mb-2 flex items-center gap-2 ${
                    isCobalt ? 'text-white' : isLight ? 'text-[#0000F2]' : 'text-white'
                  }`}
                >
                  <Sparkles className={`w-5 h-5 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`} />
                  <span>Kênh Kết Nối Nhanh</span>
                </h3>
                <p className={`text-sm font-sans ${isCobalt ? 'text-white/80' : isLight ? 'text-slate-600' : 'text-[#A0A0A0]'}`}>
                  Tôi luôn ưu tiên kiểm tra hòm thư và phản hồi nhanh chóng trong vòng 24 giờ làm việc.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                {/* Email with 1-Click Copy */}
                <div
                  className={`p-3.5 rounded-none border flex items-center justify-between gap-3 ${
                    isCobalt
                      ? 'bg-[#0000bd] border-white/30'
                      : isLight
                      ? 'bg-[#F8FAFC] border-[#0000F2]/20'
                      : 'bg-[#141414] border-[#0000F2]/25'
                  }`}
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div
                      className={`w-10 h-10 rounded-none border flex items-center justify-center shrink-0 ${
                        isCobalt
                          ? 'bg-[#000091] border-white text-white'
                          : isLight
                          ? 'bg-[#F0F4FF] border-[#0000F2] text-[#0000F2]'
                          : 'bg-[#0000F2]/10 border-[#0000F2] text-[#0000F2]'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <div className={`text-[10px] font-mono uppercase tracking-wider ${isCobalt ? 'text-white/75' : 'text-[#A0A0A0]'}`}>
                        HÒM THƯ ĐIỆN TỬ
                      </div>
                      <div className={`text-sm font-mono font-semibold truncate ${isCobalt ? 'text-white' : isLight ? 'text-[#111827]' : 'text-white'}`}>
                        {personalProfile.contact.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className={`p-2 rounded-none border transition-colors shrink-0 ${
                      isCobalt
                        ? 'bg-[#000091] border-white/40 text-white hover:bg-white hover:text-[#0000F2]'
                        : isLight
                        ? 'bg-white border-[#0000F2]/40 text-[#0000F2] hover:bg-[#0000F2] hover:text-white'
                        : 'bg-[#101010] border-[#0000F2]/40 text-slate-300 hover:bg-[#0000F2] hover:text-white'
                    }`}
                    title="Sao chép email"
                    aria-label="Sao chép email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div
                  className={`p-3.5 rounded-none border flex items-center gap-3 ${
                    isCobalt
                      ? 'bg-[#0000bd] border-white/30'
                      : isLight
                      ? 'bg-[#F8FAFC] border-[#0000F2]/20'
                      : 'bg-[#141414] border-[#0000F2]/25'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-none border flex items-center justify-center shrink-0 ${
                      isCobalt
                        ? 'bg-[#000091] border-white text-white'
                        : isLight
                        ? 'bg-[#F0F4FF] border-[#0000F2] text-[#0000F2]'
                        : 'bg-[#0000F2]/10 border-[#0000F2] text-[#0000F2]'
                    }`}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider ${isCobalt ? 'text-white/75' : 'text-[#A0A0A0]'}`}>
                      ĐIỆN THOẠI / ZALO
                    </div>
                    <div className={`text-sm font-mono font-semibold ${isCobalt ? 'text-white' : isLight ? 'text-[#111827]' : 'text-white'}`}>
                      {personalProfile.contact.phone}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div
                  className={`p-3.5 rounded-none border flex items-center gap-3 ${
                    isCobalt
                      ? 'bg-[#0000bd] border-white/30'
                      : isLight
                      ? 'bg-[#F8FAFC] border-[#0000F2]/20'
                      : 'bg-[#141414] border-[#0000F2]/25'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-none border flex items-center justify-center shrink-0 ${
                      isCobalt
                        ? 'bg-[#000091] border-white text-white'
                        : isLight
                        ? 'bg-[#F0F4FF] border-[#0000F2] text-[#0000F2]'
                        : 'bg-[#0000F2]/10 border-[#0000F2] text-[#0000F2]'
                    }`}
                  >
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider ${isCobalt ? 'text-white/75' : 'text-[#A0A0A0]'}`}>
                      KHU VỰC LÀM VIỆC
                    </div>
                    <div className={`text-sm font-mono font-semibold ${isCobalt ? 'text-white' : isLight ? 'text-[#111827]' : 'text-white'}`}>
                      {personalProfile.contact.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Badge */}
              <div
                className={`p-4 rounded-none border flex items-center gap-3 text-xs font-mono ${
                  isCobalt
                    ? 'bg-[#0000bd] border-white/40 text-white'
                    : isLight
                    ? 'bg-[#F0F4FF] border-[#0000F2]/30 text-[#111827]'
                    : 'bg-[#141414] border-[#0000F2]/40 text-[#D0D0D0]'
                }`}
              >
                <Clock className={`w-4 h-4 shrink-0 ${isCobalt ? 'text-white' : 'text-[#0000F2]'}`} />
                <span>SẴN SÀNG ON-SITE/HYBRID TẠI CẦN THƠ, HẬU GIANG, TP. HCM HOẶC REMOTE TOÀN CẦU (GMT+7).</span>
              </div>
            </DoubleBezelCard>
          </motion.div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <DoubleBezelCard innerClassName="p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div>
                    <label className={`block text-xs font-mono font-bold mb-1.5 uppercase tracking-wider ${isCobalt ? 'text-white/85' : 'text-[#8e8e8e]'}`}>
                      Họ và Tên <span className={isCobalt ? 'text-white' : 'text-[#0000F2]'}>*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="Nguyễn Văn A"
                      className={`w-full px-4 py-3 rounded-none border text-sm font-mono transition-all focus:outline-none ${
                        isCobalt
                          ? 'bg-[#0000bd] text-white placeholder-white/50 border-white/40 focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                          : isLight
                          ? 'bg-[#F8FAFC] text-[#111827] placeholder-slate-400 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.25)]'
                          : 'bg-[#141414] text-white placeholder-slate-500 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.3)]'
                      } ${errors.name ? 'border-rose-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className={`block text-xs font-mono font-bold mb-1.5 uppercase tracking-wider ${isCobalt ? 'text-white/85' : 'text-[#8e8e8e]'}`}>
                      Địa chỉ Email <span className={isCobalt ? 'text-white' : 'text-[#0000F2]'}>*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-none border text-sm font-mono transition-all focus:outline-none ${
                        isCobalt
                          ? 'bg-[#0000bd] text-white placeholder-white/50 border-white/40 focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                          : isLight
                          ? 'bg-[#F8FAFC] text-[#111827] placeholder-slate-400 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.25)]'
                          : 'bg-[#141414] text-white placeholder-slate-500 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.3)]'
                      } ${errors.email ? 'border-rose-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className={`block text-xs font-mono font-bold mb-1.5 uppercase tracking-wider ${isCobalt ? 'text-white/85' : 'text-[#8e8e8e]'}`}>
                    Tiêu đề Tin nhắn <span className={isCobalt ? 'text-white' : 'text-[#0000F2]'}>*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="Trao đổi về cơ hội hợp tác kỹ thuật / AI Engineer"
                    className={`w-full px-4 py-3 rounded-none border text-sm font-mono transition-all focus:outline-none ${
                      isCobalt
                        ? 'bg-[#0000bd] text-white placeholder-white/50 border-white/40 focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : isLight
                        ? 'bg-[#F8FAFC] text-[#111827] placeholder-slate-400 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.25)]'
                        : 'bg-[#141414] text-white placeholder-slate-500 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.3)]'
                    } ${errors.subject ? 'border-rose-500' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message TextArea */}
                <div>
                  <label className={`block text-xs font-mono font-bold mb-1.5 uppercase tracking-wider ${isCobalt ? 'text-white/85' : 'text-[#8e8e8e]'}`}>
                    Nội dung Trao đổi <span className={isCobalt ? 'text-white' : 'text-[#0000F2]'}>*</span>
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Mô tả tóm tắt về dự án, yêu cầu kỹ thuật hoặc thông tin vị trí công việc..."
                    className={`w-full px-4 py-3 rounded-none border text-sm font-mono transition-all focus:outline-none resize-none ${
                      isCobalt
                        ? 'bg-[#0000bd] text-white placeholder-white/50 border-white/40 focus:border-white focus:shadow-[0_0_15px_rgba(255,255,255,0.4)]'
                        : isLight
                        ? 'bg-[#F8FAFC] text-[#111827] placeholder-slate-400 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.25)]'
                        : 'bg-[#141414] text-white placeholder-slate-500 border-[#0000F2]/30 focus:border-[#0000F2] focus:shadow-[0_0_15px_rgba(0,0,242,0.3)]'
                    } ${errors.message ? 'border-rose-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1.5 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    icon={isSubmitting ? Loader2 : Send}
                    disabled={isSubmitting}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? 'ĐANG TRUYỀN DỮ LIỆU...' : 'GỬI TIN NHẮN NGAY'}
                  </Button>
                </div>
              </form>
            </DoubleBezelCard>
          </motion.div>
        </div>
      </div>

      {/* Floating Feedback Toast */}
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, show: false }))}
      />
    </section>
  );
};
