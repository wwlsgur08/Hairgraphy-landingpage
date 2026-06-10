"use client";

import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mail } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileOpen(false);
    if (pathname !== "/") return;
    event.preventDefault();
    scrollToSection(href);
  };

  const APP_STORE_URL = "https://apps.apple.com/kr/app/hairgraphy/id6758673452";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileOpen
          ? "bg-background shadow-sm"
          : isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 md:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsMobileOpen(false)}
          className="cursor-pointer"
          aria-label="헤어그래피 홈"
        >
          <Image
            src="/images/newlogo.png"
            alt="Hairgraphy"
            width={151}
            height={36}
            className="h-7 md:h-9 w-auto"
            priority
            sizes="(max-width: 768px) 130px, 151px"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="mailto:wwlsgur08@naver.com"
            className="flex items-center gap-1.5 text-text-primary hover:text-coral transition-colors cursor-pointer text-sm font-bold"
            aria-label="이메일 문의"
          >
            <Mail className="w-4 h-4" />
            <span>문의: wwlsgur08@naver.com</span>
          </a>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={sectionHref(link.href)}
              onClick={(event) => handleSectionClick(event, link.href)}
              className="text-text-secondary hover:text-primary transition-colors cursor-pointer text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/android">
            <Button variant="primary" size="sm">
              Android
            </Button>
          </Link>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="coral" size="sm">
              App Store
            </Button>
          </a>
        </div>

        {/* Mobile: Email + Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="mailto:wwlsgur08@naver.com"
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label="이메일 문의: wwlsgur08@naver.com"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label={isMobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {isMobileOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - fullscreen overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-16 bg-background z-40"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {NAV_LINKS.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={sectionHref(link.href)}
                    onClick={(event) => handleSectionClick(event, link.href)}
                    className="block text-text-primary text-lg font-medium py-3 text-left cursor-pointer min-h-[44px]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link
                  href="/android"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Button variant="primary" size="lg" className="w-full mt-4">
                    Android 다운로드
                  </Button>
                </Link>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Button variant="coral" size="lg" className="w-full mt-2">
                    App Store에서 다운로드
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
