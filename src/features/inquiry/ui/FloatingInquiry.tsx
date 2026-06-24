'use client';

import { useEffect, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { sanitizePhoneInput, validateInquiryLead } from '@/shared/lib/utils';

const initialFormData = {
  name: '',
  phone: '',
  region: '',
};

export default function FloatingInquiry() {
  const [hasPassedHero, setHasPassedHero] = useState(false);
  const [isContactInView, setIsContactInView] = useState(false);
  const [isFooterInView, setIsFooterInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const [hasUserCollapsed, setHasUserCollapsed] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hp, setHp] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleMediaChange = () => {
      const matches = mediaQuery.matches;
      setIsMobile(matches);
      if (!matches) {
        setIsMobileExpanded(false);
        setHasUserCollapsed(false);
      }
    };

    handleMediaChange();
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const syncPassedHero = () => {
      const heroSection = document.getElementById('hero');

      if (!heroSection) {
        setHasPassedHero(window.scrollY > window.innerHeight * 0.8);
        return;
      }

      const heroRect = heroSection.getBoundingClientRect();
      setHasPassedHero(heroRect.bottom <= window.innerHeight * 0.18);
    };

    syncPassedHero();
    window.addEventListener('scroll', syncPassedHero, { passive: true });
    window.addEventListener('resize', syncPassedHero);

    return () => {
      window.removeEventListener('scroll', syncPassedHero);
      window.removeEventListener('resize', syncPassedHero);
    };
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById('contact');
    const footerSection = document.getElementById('footer');
    const observer =
      contactSection || footerSection
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.target.id === 'contact') {
                  setIsContactInView(entry.isIntersecting);
                }

                if (entry.target.id === 'footer') {
                  setIsFooterInView(entry.isIntersecting);
                }
              });
            },
            { threshold: 0.12 }
          )
        : null;

    if (contactSection && observer) observer.observe(contactSection);
    if (footerSection && observer) observer.observe(footerSection);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    if (!hasPassedHero) {
      setIsMobileExpanded(false);
      setHasUserCollapsed(false);
      return;
    }

    if (!hasUserCollapsed) {
      setIsMobileExpanded(true);
    }
  }, [hasPassedHero, hasUserCollapsed, isMobile]);

  const shouldShow = hasPassedHero && !isContactInView && !isFooterInView;
  const isSubmitDisabled = isSubmitting || !privacyAgree;

  const handleMobileOpen = () => {
    setIsMobileExpanded(true);
    setHasUserCollapsed(false);
  };

  const handleMobileCollapse = () => {
    setIsMobileExpanded(false);
    setHasUserCollapsed(true);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? sanitizePhoneInput(value) : value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    const validation = validateInquiryLead({
      name: formData.name,
      phone: formData.phone,
      region: formData.region,
      privacyAgree,
    });

    if (!validation.valid) {
      alert(validation.message);
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: '',
          storeType: '빠른문의',
          region: formData.region,
          hasStore: '미확인',
          source: '하단 빠른 가맹문의',
          message: '하단 빠른 가맹문의 바에서 접수되었습니다.',
          privacyAgree: true,
          hp,
        }),
      });

      if (!res.ok) {
        if (res.status === 429) {
          alert('너무 많은 요청입니다. 잠시 후 다시 시도해주세요.');
          return;
        }

        throw new Error('SEND_FAIL');
      }

      alert('가맹문의가 접수되었습니다. 순차적으로 연락드리겠습니다.');
      setFormData(initialFormData);
      setPrivacyAgree(false);
      setHp('');
    } catch (error) {
      console.error('Floating inquiry submission error:', error);
      alert('전송 실패. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {shouldShow && isMobile && !isMobileExpanded && (
        <motion.button
          type="button"
          onClick={handleMobileOpen}
          className="fixed inset-x-3 bottom-3 z-50 overflow-hidden rounded-[20px] border border-[#eadfce] bg-[#fffaf2]/98 text-left shadow-[0_16px_38px_rgba(43,27,22,0.14)] backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 70 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="빠른 가맹문의 다시 열기"
        >
          <span className="absolute inset-x-0 top-0 h-1 bg-[#8f3528]" />
          <span
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.13) 1px, transparent 0)',
              backgroundSize: '18px 18px',
            }}
          />
          <span className="relative flex items-center justify-between gap-3 px-4 py-3.5">
            <span className="min-w-0">
              <span className="block text-[9px] font-black tracking-[0.18em] text-[#8f3528]">
                FRANCHISE DESK
              </span>
              <span className="mt-1 block font-heading text-sm font-black leading-none text-[#26140e]">
                빠른 가맹문의
              </span>
              <span className="mt-1.5 block whitespace-nowrap font-heading text-lg font-black leading-none text-[#8f3528]">
                010-9923-9502
              </span>
            </span>
            <span className="shrink-0 rounded-full bg-[#8f3528] px-4 py-2.5 text-sm font-black text-[#fff8eb] shadow-[0_8px_18px_rgba(143,53,40,0.2)]">
              열기
            </span>
          </span>
        </motion.button>
      )}

      {shouldShow && isMobile && isMobileExpanded && (
        <motion.aside
          className="fixed inset-x-0 bottom-0 z-50 overflow-hidden rounded-t-[28px] border-x border-t border-[#eadfce] bg-[#fffaf2]/98 shadow-[0_-20px_52px_rgba(43,27,22,0.16)] backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{
            opacity: { duration: 0.18 },
            y: { type: 'spring', stiffness: 420, damping: 38, mass: 0.8 },
          }}
          aria-label="빠른 가맹문의"
        >
          <div className="h-1.5 bg-[#8f3528]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.13) 1px, transparent 0)',
              backgroundSize: '18px 18px',
            }}
          />
          <form
            onSubmit={handleSubmit}
            className="relative mx-auto flex w-full max-w-[460px] flex-col gap-2.5 px-4 pb-[calc(env(safe-area-inset-bottom)+14px)] pt-3"
          >
            <button
              type="button"
              onClick={handleMobileCollapse}
              className="mx-auto mb-0.5 flex flex-col items-center gap-1.5 px-5 py-1 text-[10px] font-black tracking-[0.12em] text-[#80624c]"
            >
              <span className="h-1.5 w-14 rounded-full bg-[#eadfce]" />
              CLOSE DESK
            </button>

            <div className="flex items-end justify-between gap-3 border-b border-[#eadfce] pb-3">
              <div className="min-w-0">
                <p className="text-[9px] font-black tracking-[0.2em] text-[#8f3528]">
                  FRANCHISE DESK · QUICK FORM
                </p>
                <p className="mt-1 font-heading text-xl font-black tracking-[-0.035em] text-[#26140e]">
                  빠른 가맹문의
                </p>
                <p className="mt-1 text-[11px] font-semibold text-[#80624c]">
                  남겨주시면 순서대로 연락드립니다.
                </p>
              </div>
              <a
                href="tel:010-9923-9502"
                className="shrink-0 whitespace-nowrap font-heading text-[clamp(1rem,4.8vw,1.2rem)] font-black leading-none text-[#8f3528]"
              >
                010-9923-9502
              </a>
            </div>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={30}
              required
              className="h-12 w-full rounded-[12px] border border-[#eadfce] bg-white/95 px-4 text-base font-bold text-[#26140e] outline-none placeholder:text-[#a28670] focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/30"
              placeholder="성함"
              autoComplete="name"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={13}
              pattern="[0-9-]*"
              required
              className="h-12 w-full rounded-[12px] border border-[#eadfce] bg-white/95 px-4 text-base font-bold text-[#26140e] outline-none placeholder:text-[#a28670] focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/30"
              placeholder="연락처"
              autoComplete="tel"
            />
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              maxLength={40}
              required
              className="h-12 w-full rounded-[12px] border border-[#eadfce] bg-white/95 px-4 text-base font-bold text-[#26140e] outline-none placeholder:text-[#a28670] focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/30"
              placeholder="희망지역"
            />

            <input
              type="text"
              name="hp"
              value={hp}
              onChange={(event) => setHp(event.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <label className="flex min-w-0 cursor-pointer items-center gap-2 rounded-[12px] border border-[#eadfce] bg-white/95 px-4 py-3 text-sm font-bold leading-tight text-[#725744]">
              <input
                type="checkbox"
                checked={privacyAgree}
                onChange={(event) => setPrivacyAgree(event.target.checked)}
                className="h-5 w-5 rounded border-[#a98d75] text-[#8f3528] focus:ring-[#c9a24d]"
              />
              개인정보 수집 및 이용 동의
            </label>

            <motion.button
              type="submit"
              disabled={isSubmitDisabled}
              className={`h-13 w-full rounded-[12px] bg-[#8f3528] px-4 font-heading text-base font-black leading-tight text-[#fff8eb] shadow-[0_10px_24px_rgba(143,53,40,0.24)] transition hover:bg-[#71271f] ${
                isSubmitDisabled ? 'cursor-not-allowed opacity-55' : ''
              }`}
              whileTap={{ scale: isSubmitDisabled ? 1 : 0.98 }}
            >
              {isSubmitting ? '접수 중' : '가맹문의 신청'}
            </motion.button>
          </form>
        </motion.aside>
      )}

      {shouldShow && !isMobile && (
        <motion.aside
          className="fixed inset-x-0 bottom-0 z-50 hidden overflow-hidden border-t border-[#eadfce] bg-[#fffaf2]/98 shadow-[0_-16px_42px_rgba(43,27,22,0.14)] backdrop-blur-xl md:block"
          initial={{ opacity: 0, y: 90 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 90 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          aria-label="빠른 가맹문의"
        >
          <div className="h-1 bg-[#8f3528]" />
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.12) 1px, transparent 0)',
              backgroundSize: '18px 18px',
            }}
          />
          <form
            onSubmit={handleSubmit}
            className="relative mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-2 px-4 py-3 lg:flex lg:max-w-[1500px] lg:justify-center lg:gap-3 lg:px-6"
          >
            <div className="col-span-4 flex min-w-0 items-center justify-between gap-3 border-r border-[#eadfce] pr-3 lg:w-[clamp(310px,24vw,360px)] lg:shrink-0">
              <div className="min-w-0">
                <p className="whitespace-nowrap text-[9px] font-black tracking-[0.18em] text-[#8f3528] lg:text-[10px]">
                  FRANCHISE DESK
                </p>
                <p className="mt-1 whitespace-nowrap font-heading text-base font-black leading-none text-[#26140e]">
                  빠른 가맹문의
                </p>
              </div>
              <a
                href="tel:010-9923-9502"
                className="shrink-0 whitespace-nowrap font-heading text-[clamp(1rem,1.45vw,1.4rem)] font-black leading-none tracking-[-0.04em] text-[#8f3528]"
              >
                010-9923-9502
              </a>
            </div>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              maxLength={30}
              required
              className="col-span-4 h-11 min-w-0 rounded-[10px] border border-[#eadfce] bg-white/95 px-3 text-sm font-bold text-[#26140e] outline-none placeholder:text-[#a28670] focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/30 lg:h-12 lg:w-[clamp(118px,9.4vw,158px)] lg:shrink-0 xl:px-4"
              placeholder="성함"
              autoComplete="name"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              inputMode="numeric"
              maxLength={13}
              pattern="[0-9-]*"
              required
              className="col-span-4 h-11 min-w-0 rounded-[10px] border border-[#eadfce] bg-white/95 px-3 text-sm font-bold text-[#26140e] outline-none placeholder:text-[#a28670] focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/30 lg:h-12 lg:w-[clamp(126px,10.2vw,174px)] lg:shrink-0 xl:px-4"
              placeholder="연락처"
              autoComplete="tel"
            />
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleChange}
              maxLength={40}
              required
              className="col-span-4 h-11 min-w-0 rounded-[10px] border border-[#eadfce] bg-white/95 px-3 text-sm font-bold text-[#26140e] outline-none placeholder:text-[#a28670] focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/30 lg:h-12 lg:w-[clamp(118px,9.8vw,166px)] lg:shrink-0 xl:px-4"
              placeholder="희망지역"
            />

            <input
              type="text"
              name="hp"
              value={hp}
              onChange={(event) => setHp(event.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <label className="col-span-4 flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-[10px] border border-[#eadfce] bg-white/95 px-3 py-3 text-xs font-bold leading-tight text-[#725744] lg:min-w-[clamp(112px,9vw,148px)] lg:shrink-0 lg:border-0 lg:bg-transparent lg:px-1">
              <input
                type="checkbox"
                checked={privacyAgree}
                onChange={(event) => setPrivacyAgree(event.target.checked)}
                className="h-4 w-4 shrink-0 rounded border-[#a98d75] text-[#8f3528] focus:ring-[#c9a24d] lg:h-5 lg:w-5"
              />
              개인정보 동의
            </label>

            <motion.button
              type="submit"
              disabled={isSubmitDisabled}
              className={`col-span-4 h-11 min-w-0 break-keep rounded-[10px] bg-[#8f3528] px-4 font-heading text-sm font-black leading-tight text-[#fff8eb] shadow-[0_8px_20px_rgba(143,53,40,0.22)] transition hover:bg-[#71271f] lg:h-12 lg:min-w-[clamp(142px,11vw,184px)] lg:shrink-0 lg:text-base ${
                isSubmitDisabled ? 'cursor-not-allowed opacity-55' : ''
              }`}
              whileHover={{ scale: isSubmitDisabled ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitDisabled ? 1 : 0.97 }}
            >
              {isSubmitting ? '접수 중' : '가맹문의 신청'}
            </motion.button>
          </form>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
