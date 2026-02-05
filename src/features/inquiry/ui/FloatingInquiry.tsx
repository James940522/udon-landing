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
        <motion.div
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center cursor-pointer"
          onClick={scrollToContact}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
            },
          }}
        >
          {/* 우동그릇 본체 (뒤집어진 사다리꼴) */}
          <div
            className="relative bg-gradient-to-b from-stone-800 to-stone-900 shadow-2xl flex items-center justify-center"
            style={{
              width: '90px',
              height: '65px',
              clipPath: 'polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%)',
            }}
          >
            <span className="text-center leading-tight text-amber-400 font-black text-sm drop-shadow-lg">
              창업
              <br />
              문의
            </span>
          </div>
          {/* 그릇 받침 */}
          <div className="w-10 h-2 bg-stone-900 rounded-b-sm shadow-lg"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
