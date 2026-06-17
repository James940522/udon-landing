'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function FloatingInquiry() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 화면 높이의 80% 이상 스크롤하면 버튼 표시 (두 번째 섹션 시작)
      const scrollPosition = window.scrollY;
      const triggerPosition = window.innerHeight * 0.8;
      setIsVisible(scrollPosition > triggerPosition);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 체크

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label="창업 문의 섹션으로 이동"
          className="group fixed bottom-6 right-5 z-50 flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border border-[#d4a34a]/70 bg-[#1a0d06]/96 text-[#fff0c8] shadow-[0_18px_44px_rgba(0,0,0,0.32)] backdrop-blur-md transition-colors hover:border-[#f1c767] hover:bg-[#241006] sm:bottom-8 sm:right-8 sm:h-24 sm:w-24"
          onClick={scrollToContact}
          initial={{ opacity: 0, y: 18, scale: 0.82 }}
          animate={{ opacity: 1, y: [0, -8, 0], scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.82 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{
            opacity: { duration: 0.28 },
            scale: { duration: 0.28 },
            y: {
              duration: 2.4,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <span className="absolute inset-0 rounded-full bg-linear-to-br from-[#d4a34a]/24 via-transparent to-[#8f2f19]/18" />
          <span className="absolute inset-1.5 rounded-full border border-[#f3d487]/24" />
          <span className="absolute inset-0 rounded-full shadow-[inset_0_0_0_1px_rgba(212,163,74,0)] transition-shadow duration-300 group-hover:shadow-[inset_0_0_0_2px_rgba(212,163,74,0.35)]" />

          <span className="relative flex flex-col items-center justify-center gap-1">
            <MessageCircle className="h-5 w-5 text-[#d4a34a] sm:h-6 sm:w-6" aria-hidden="true" />
            <span className="text-center text-[0.72rem] font-black leading-tight text-[#fff0c8] sm:text-sm">
              창업
              <br />
              문의
            </span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
