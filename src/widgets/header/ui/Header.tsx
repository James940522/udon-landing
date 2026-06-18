'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu } from 'react-icons/hi';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/shared/ui/sheet';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: '브랜드 소개', href: '#brand' },
    { name: '성공 전략', href: '#succession-planning-v2' },
    { name: '창업 과정', href: '#startup-process' },
    { name: '메뉴', href: '#menu' },
    { name: '고객 리뷰', href: '#reviews' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-[110] border-b border-[#cdbb9f] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#f6efe3]/98 shadow-[0_12px_34px_rgba(38,20,14,0.14)] backdrop-blur-xl'
          : 'bg-[#f6efe3]/92 shadow-[0_8px_24px_rgba(38,20,14,0.1)] backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-x-0 top-0 h-[3px] bg-[#8f3528]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(143,53,40,0.22) 1px, transparent 0)',
          backgroundSize: '18px 18px',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          {/* Logo */}
          <motion.div
            className="flex min-w-0 shrink-0 items-center gap-3"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <a href="#" className="flex items-center" aria-label="오늘은 볶음우동 홈으로 이동">
              <Image
                src="/asset/logo/오늘은_볶음우동_문구.png"
                alt="오늘은 볶음우동"
                width={200}
                height={100}
                className="h-10 w-auto object-contain mix-blend-multiply md:h-12"
                priority
                quality={75}
              />
            </a>
            <div className="hidden border-l border-[#cdbb9f] pl-3 xl:block">
              <p className="font-heading text-[9px] font-black tracking-[0.22em] text-[#8f3528]">
                REPORT NAVIGATION
              </p>
              <p className="mt-1 text-[10px] font-bold text-[#80624c]">TODAY UDON · 2026</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="group flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-black text-[#3b261c] transition-colors hover:bg-[#ead9aa]/55 hover:text-[#8f3528] lg:px-3"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="hidden text-[8px] font-black tracking-[0.08em] text-[#a28670] lg:inline">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item.name}</span>
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="ml-2 rounded-full border border-[#8f3528] bg-[#8f3528] px-5 py-2.5 font-heading text-sm font-black text-[#fff8eb] shadow-[0_8px_18px_rgba(143,53,40,0.22)] transition-colors hover:bg-[#71271f]"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              창업문의
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cdbb9f] bg-[#fffaf1] text-2xl text-[#8f3528] shadow-sm transition-colors hover:border-[#8f3528]"
                  type="button"
                  aria-label="메뉴 열기"
                >
                  <HiMenu />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="z-[120] w-[88vw] max-w-sm gap-0 overflow-hidden border-l border-[#cdbb9f] bg-[#f6efe3] p-0 text-[#26140e] [&_[data-slot=sheet-close]]:rounded-full [&_[data-slot=sheet-close]]:border [&_[data-slot=sheet-close]]:border-[#cdbb9f] [&_[data-slot=sheet-close]]:bg-[#fffaf1] [&_[data-slot=sheet-close]]:p-2 [&_[data-slot=sheet-close]]:text-[#8f3528]"
              >
                <div className="h-2 shrink-0 bg-[#8f3528]" />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.2]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, rgba(143,53,40,0.2) 1px, transparent 0)',
                    backgroundSize: '18px 18px',
                  }}
                />

                <SheetHeader className="relative border-b border-[#ddcfbb] px-6 pb-5 pt-8">
                  <p className="font-heading text-[10px] font-black tracking-[0.24em] text-[#8f3528]">
                    REPORT NAVIGATION
                  </p>
                  <SheetTitle className="mt-2 font-heading text-3xl font-black tracking-[-0.04em] text-[#26140e]">
                    메뉴 인덱스
                  </SheetTitle>
                  <SheetDescription className="sr-only">네비게이션 메뉴</SheetDescription>
                </SheetHeader>

                {/* Navigation Items */}
                <nav className="relative flex-1 overflow-y-auto px-6 py-4">
                  <div className="border-t border-[#8f3528]">
                    {navItems.map((item, index) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-3 border-b border-[#ddcfbb] py-4 text-left transition-colors hover:text-[#8f3528]"
                      >
                        <span className="font-heading text-[10px] font-black tracking-[0.08em] text-[#a28670]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="font-heading text-lg font-black">{item.name}</span>
                        <span className="text-sm font-black text-[#8f3528]">↗</span>
                      </button>
                    ))}
                  </div>
                </nav>

                {/* Sidebar Footer */}
                <div className="relative border-t border-[#ddcfbb] bg-[#f6efe3]/94 p-6">
                  <p className="mb-3 text-[10px] font-black tracking-[0.16em] text-[#80624c]">
                    FRANCHISE INQUIRY
                  </p>
                  <button
                    onClick={() => scrollToSection('#contact')}
                    className="w-full rounded-2xl bg-[#8f3528] px-6 py-4 font-heading text-lg font-black text-[#fff8eb] shadow-[0_10px_22px_rgba(143,53,40,0.22)] transition-colors hover:bg-[#71271f]"
                  >
                    창업문의 하기 →
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
