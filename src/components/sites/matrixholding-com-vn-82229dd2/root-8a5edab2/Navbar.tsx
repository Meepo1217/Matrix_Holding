"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.1)]"
          : "bg-transparent",
      ].join(" ")}
      style={{ height: "80px" }}
    >
      <div
        className="mh-container flex h-full items-center justify-between"
        style={{ maxWidth: 1280 }}
      >
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
              "h-9 w-auto transition-all duration-300",
              !scrolled && theme === "dark" ? "brightness-0 invert" : "",
            ].join(" ")}
            priority
          />
          <span
            className={[
              "text-[17px] font-bold tracking-tight transition-colors duration-300",
              scrolled || theme === "light" ? "text-slate-900" : "text-white",
            ].join(" ")}
          >
            Matrix Holding
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "relative px-4 py-2 text-sm font-semibold transition-colors duration-200",
                scrolled || theme === "light"
                  ? "text-slate-600 hover:text-[rgb(9,46,86)]"
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
              "rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-all duration-200",
              "bg-[rgb(0,59,115)] hover:bg-[rgb(0,39,77)] shadow-sm",
            ].join(" ")}
            id="navbar-login-btn"
          >
            Đăng nhập
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          id="navbar-mobile-toggle"
        >
          {menuOpen ? (
            <X
              size={22}
              className={scrolled || theme === "light" ? "text-slate-900" : "text-white"}
            />
          ) : (
            <Menu
              size={22}
              className={scrolled || theme === "light" ? "text-slate-900" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="mh-container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-sm font-semibold text-slate-700 hover:text-[rgb(9,46,86)] hover:bg-slate-50 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <Link
                href="/dang-nhap"
                className="block w-full text-center rounded-lg bg-[rgb(0,59,115)] px-4 py-3 text-sm font-bold text-white hover:bg-[rgb(0,39,77)] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
