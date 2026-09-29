"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  { label: "Trang chủ", href: "/" },
  { label: "Giới thiệu", href: "/gioi-thieu" },
  { label: "Hệ sinh thái", href: "/he-sinh-thai" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Tuyển dụng", href: "/tuyen-dung" },
  { label: "Liên hệ", href: "/lien-he" },
];

export default function Navbar({ theme = "dark" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.1)] py-4"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="mh-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Matrix Holding - Trang chủ"
          className="flex shrink-0 items-center gap-3 group"
        >
          <Image
            src="/sites/matrixholding-com-vn-82229dd2/root-8a5edab2/images/logo.png"
            alt="Matrix Holding Logo"
            width={140}
            height={36}
            className={[
              "h-8 sm:h-9 w-auto transition-all duration-300",
              !scrolled && theme === "dark" ? "brightness-0 invert" : "",
            ].join(" ")}
            priority
          />
          <span
            className={[
              "text-[16px] sm:text-[18px] font-extrabold tracking-tight transition-colors duration-300",
              scrolled || theme === "light" ? "text-slate-900" : "text-white",
            ].join(" ")}
          >
            Matrix Holding
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "relative px-4 py-2 text-[14px] font-bold tracking-wide transition-colors duration-200",
                scrolled || theme === "light"
                  ? "text-slate-600 hover:text-[var(--mh-navy)]"
                  : "text-white/85 hover:text-white",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dang-nhap"
            className={[
              "rounded-lg px-5 py-2.5 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-[2px] active:translate-y-[1px]",
              scrolled || theme === "light"
                ? "bg-[var(--mh-navy)] hover:bg-[var(--mh-navy-dark)] hover:shadow-lg"
                : "bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20",
            ].join(" ")}
          >
            Đăng nhập
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
        >
          {menuOpen ? (
            <X
              size={24}
              className={scrolled || theme === "light" ? "text-slate-900" : "text-white"}
            />
          ) : (
            <Menu
              size={24}
              className={scrolled || theme === "light" ? "text-slate-900" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden mt-4"
          >
            <nav className="mh-container py-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[15px] font-bold text-slate-700 hover:text-[var(--mh-navy)] hover:bg-slate-50 rounded-xl transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 px-4">
                <Link
                  href="/dang-nhap"
                  className="flex w-full items-center justify-center rounded-xl bg-[var(--mh-navy)] px-4 py-3.5 text-[15px] font-bold text-white hover:bg-[var(--mh-navy-dark)] transition-colors active:translate-y-[1px]"
                  onClick={() => setMenuOpen(false)}
                >
                  Đăng nhập
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
