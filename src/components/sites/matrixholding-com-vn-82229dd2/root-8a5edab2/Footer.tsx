"use client";

import Link from "next/link";
import Image from "next/image";


const NAV_ABOUT = [
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Hệ sinh thái", href: "/he-sinh-thai" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
];

const NAV_SERVICES = [
  { label: "Tư vấn pháp lý", href: "/dich-vu/phap-ly" },
  { label: "Kế toán & Tài chính", href: "/dich-vu/tai-chinh" },
  { label: "Tuyển dụng nhân sự", href: "/dich-vu/nhan-su" },
  { label: "Giải pháp công nghệ", href: "/dich-vu/cong-nghe" },
  { label: "Truyền thông", href: "/dich-vu/truyen-thong" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* Main Footer Body */}
      <div className="mh-container pt-16 md:pt-24 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 lg:gap-10 pb-12 border-b border-slate-800">
          {/* Column 1 — Company */}
          <div className="max-w-[320px]">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-3 mb-6 transition-opacity hover:opacity-90">
              <Image
                src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png"
                alt="Matrix Holding"
                width={120}
                height={32}
                className="h-8 w-auto brightness-0 invert"
              />
              <span className="font-extrabold text-white text-base tracking-tight">
                Matrix Holding
              </span>
            </Link>

            {/* Description */}
            <p className="mb-8 leading-relaxed text-[15px] text-slate-400">
              Matrix Holding là tập đoàn cung cấp hệ sinh thái dịch vụ kinh
              doanh toàn diện, đồng hành cùng doanh nghiệp Việt Nam phát triển
              bền vững.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  label: "Facebook",
                  href: "https://facebook.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  label: "LinkedIn",
                  href: "https://linkedin.com",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                    </svg>
                  ),
                  label: "YouTube",
                  href: "https://youtube.com",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.957 7.571l-1.846 8.697c-.138.618-.503.77-.897.521l-2.476-1.824-1.196 1.15c-.132.132-.243.243-.499.243l.178-2.524 4.599-4.156c.2-.178-.043-.276-.31-.098L6.938 15.29l-2.444-.764c-.531-.166-.54-.531.11-.787l9.557-3.686c.443-.16.831.108.796.518z" />
                    </svg>
                  ),
                  label: "Zalo",
                  href: "https://zalo.me",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-all duration-300 hover:bg-[var(--mh-navy)] hover:text-white hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — About */}
          <div>
            <h3 className="font-bold uppercase text-white mb-6 text-[13px] tracking-widest">
              Về chúng tôi
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_ABOUT.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] transition-colors duration-200 hover:text-[var(--mh-navy-highlight)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="font-bold uppercase text-white mb-6 text-[13px] tracking-widest">
              Dịch vụ
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_SERVICES.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] transition-colors duration-200 hover:text-[var(--mh-navy-highlight)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="font-bold uppercase text-white mb-6 text-[13px] tracking-widest">
              Liên hệ
            </h3>
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  text: "123 Nguyễn Đình Chiểu, Quận 3, TP. Hồ Chí Minh",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.72 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.63 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.81-.81a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  text: "(028) 3825 xxxx",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  text: "info@matrixholding.com.vn",
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  text: "Thứ 2 – Thứ 6: 8:00 – 17:30",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[15px]">
                  <span className="mt-0.5 shrink-0 text-[var(--mh-navy-highlight)]">
                    {item.icon}
                  </span>
                  <span className="leading-relaxed text-slate-400">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-8 text-[14px] text-slate-500 font-medium">
          <p>© 2024 Matrix Holding. Bảo lưu mọi quyền.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/chinh-sach-bao-mat"
              className="hover:text-white transition-colors duration-200"
            >
              Chính sách bảo mật
            </Link>
            <Link
              href="/dieu-khoan-su-dung"
              className="hover:text-white transition-colors duration-200"
            >
              Điều khoản sử dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
