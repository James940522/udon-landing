'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
          onClick={scrollToContact}
          className="fixed bottom-8 right-8 z-50 w-16 h-16 md:w-20 md:h-20 bg-linear-to-br from-amber-500 via-amber-600 to-yellow-600 rounded-full shadow-2xl flex items-center justify-center font-black text-sm md:text-base border-2 border-amber-400/50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1, boxShadow: '0 25px 50px -12px rgba(251, 191, 36, 0.5)' }}
          whileTap={{ scale: 0.9 }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        >
          <span className="text-center leading-tight text-stone-900 drop-shadow-sm">
            창업
            <br />
            문의
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
