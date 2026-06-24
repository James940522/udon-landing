'use client';

import { motion, useInView } from 'framer-motion';
import { Phone, Send, ShieldCheck } from 'lucide-react';
import { useRef, useState } from 'react';

const storeTypes = ['샵인샵', '단독매장', '홀매장', '기타매장'];
const storeOwnership = ['있음', '없음'];

const initialFormData = {
  name: '',
  phone: '',
  email: '',
  storeType: '',
  region: '',
  hasStore: '',
  message: '',
};

export default function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [hp, setHp] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOptionChange = (name: 'storeType' | 'hasStore', value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.storeType || !formData.hasStore) {
      alert('매장형태와 점포 보유 유무를 선택해주세요.');
      return;
    }

    if (!privacyAgree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          privacyAgree: true,
          hp,
        }),
      });

      if (!res.ok) {
        if (res.status === 429) {
          alert('너무 많은 요청입니다. 잠시 후 다시 시도해주세요.');
        } else {
          throw new Error('SEND_FAIL');
        }
        return;
      }

      alert('접수 완료! 영업일 기준 24시간 이내 담당자가 연락드립니다.');
      setFormData(initialFormData);
      setPrivacyAgree(false);
      setHp('');
    } catch (error) {
      console.error('Form submission error:', error);
      alert('전송 실패. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden bg-[#f0e9df] py-16 text-[#2b1b16] md:py-24"
      aria-label="오늘은 볶음우동 창업 문의"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#fffaf2]/94 via-[#f0e9df]/96 to-[#d8c8b5]/92"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(155,91,70,0.16) 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#170c08]/38"
        aria-hidden="true"
      />
      <div
        data-contact-editorial-frame
        className="pointer-events-none absolute inset-0 hidden md:block"
        aria-hidden="true"
      >
        <div className="absolute left-8 top-10 h-24 w-24 border-l border-t border-[#9b5b46]/38 lg:left-12 lg:top-14" />
        <div className="absolute bottom-10 right-8 h-24 w-24 border-b border-r border-[#9b5b46]/38 lg:bottom-14 lg:right-12" />
      </div>
      <div
        data-contact-vertical-label
        className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 rotate-90 text-[10px] font-black tracking-[0.5em] text-[#9b5b46]/18 lg:block"
        aria-hidden="true"
      >
        START YOUR STORE
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-contact-section-index
          className="pointer-events-none mb-8 flex items-center justify-center gap-3 text-[0.65rem] font-black uppercase tracking-[0.32em] text-[#9b5b46] sm:text-xs"
          aria-hidden="true"
        >
          <span className="h-px w-10 bg-[#9b5b46]/45 sm:w-16" />
          <span>FRANCHISE INQUIRY · 01</span>
          <span className="h-px w-10 bg-[#9b5b46]/45 sm:w-16" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div
            data-contact-panel-connector
            className="pointer-events-none absolute left-[43%] top-1/2 z-0 hidden w-[7%] -translate-y-1/2 items-center lg:flex"
            aria-hidden="true"
          >
            <span className="h-px flex-1 border-t border-dashed border-[#9b5b46]/50" />
            <span className="ml-1 text-sm font-black text-[#9b5b46]/65">→</span>
          </div>
          <motion.div
            data-contact-brand-panel
            className="relative z-10 mx-auto w-full max-w-lg overflow-hidden rounded-[1.5rem] border border-[#9b5b46]/45 bg-[#2b1b16]/96 p-6 shadow-[0_30px_80px_rgba(43,27,22,0.28)] backdrop-blur-sm md:p-8"
            initial={{ opacity: 0, y: 34 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]" aria-hidden="true" />
            <span className="mb-4 inline-flex rounded-full bg-[#9b5b46] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#fffaf2]">
              Today Udon
            </span>
            <h2 className="text-4xl font-black leading-[1.12] text-[#fffaf2] md:text-6xl">
              성공 창업,
              <br />
              <span className="text-[#d9ad55]">오늘은</span>
              <br />
              <span className="text-[#d9ad55]">볶음우동</span>입니다.
            </h2>
            <p className="mt-6 text-base font-black leading-8 text-[#d8c8b5] md:text-lg">
              작은 공간에서도 안정적으로 시작할 수 있도록 상담부터 오픈까지 함께합니다. 배달 중심
              운영, 소형 매장, 전환 창업까지 편하게 문의해주세요.
            </p>

            <a
              href="sms:010-9923-9502?body=홈페이지를%20통해%20오늘은%20볶음우동%20창업%20문의를%20드립니다."
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-md bg-[#fffaf2] px-4 py-3 text-[1.55rem] font-black text-[#8f3528] shadow-[0_18px_44px_rgba(0,0,0,0.28)] transition-transform hover:scale-[1.02] hover:bg-[#f0e9df] sm:w-fit sm:gap-3 sm:px-5 sm:text-3xl"
            >
              <Phone className="h-6 w-6 shrink-0 sm:h-7 sm:w-7" aria-hidden="true" />
              010-9923-9502
            </a>
          </motion.div>

          <motion.div
            data-contact-form-card
            className="relative z-10 mx-auto w-full max-w-xl overflow-hidden rounded-[1.5rem] border border-[#d8c8b5]/90 bg-[#fffaf2]/96 p-5 shadow-[0_30px_80px_rgba(73,50,41,0.18)] backdrop-blur-[2px] md:p-6"
            initial={{ opacity: 0, y: 34 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-[#9b5b46]" aria-hidden="true" />
            <div
              data-contact-form-label
              className="pointer-events-none mb-5 flex items-center gap-3 pt-1 text-[0.65rem] font-black uppercase tracking-[0.28em] text-[#9b5b46]"
              aria-hidden="true"
            >
              <span className="h-px w-8 bg-[#9b5b46]/55" />
              <span>APPLICATION FORM</span>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-black text-[#26140e]">
                    이름 <span className="text-[#8f3528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-11 w-full rounded-md border border-[#d8c8b5] bg-[#fffaf2] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-black text-[#26140e]">
                    연락처 <span className="text-[#8f3528]">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-11 w-full rounded-md border border-[#d8c8b5] bg-[#fffaf2] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-black text-[#26140e]">
                    이메일 <span className="text-[#7a5438]">(선택)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-11 w-full rounded-md border border-[#d8c8b5] bg-[#fffaf2] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
                    placeholder="example@email.com"
                  />
                </div>

                <fieldset>
                  <legend className="mb-2 block text-sm font-black text-[#26140e]">
                    매장형태 <span className="text-[#8f3528]">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {storeTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleOptionChange('storeType', type)}
                        className={`h-11 rounded-md border px-3 text-sm font-black transition ${
                          formData.storeType === type
                            ? 'border-[#8f3528] bg-[#8f3528] text-white shadow-[0_10px_22px_rgba(143,47,25,0.22)]'
                            : 'border-[#d8c8b5] bg-[#fffaf2] text-[#4a2412] hover:border-[#8f3528]'
                        }`}
                        aria-pressed={formData.storeType === type}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div className="grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <label htmlFor="region" className="mb-2 block text-sm font-black text-[#26140e]">
                    창업지역 <span className="text-[#8f3528]">*</span>
                  </label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    required
                    value={formData.region}
                    onChange={handleChange}
                    className="h-11 w-full rounded-md border border-[#d8c8b5] bg-[#fffaf2] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
                    placeholder="서울 강남구"
                  />
                </div>

                <fieldset>
                  <legend className="mb-2 block text-sm font-black text-[#26140e]">
                    점포 보유 유무 <span className="text-[#8f3528]">*</span>
                  </legend>
                  <div className="grid grid-cols-2 gap-2">
                    {storeOwnership.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleOptionChange('hasStore', item)}
                        className={`h-11 rounded-md border px-3 text-sm font-black transition ${
                          formData.hasStore === item
                            ? 'border-[#8f3528] bg-[#8f3528] text-white shadow-[0_10px_22px_rgba(143,47,25,0.22)]'
                            : 'border-[#d8c8b5] bg-[#fffaf2] text-[#4a2412] hover:border-[#8f3528]'
                        }`}
                        aria-pressed={formData.hasStore === item}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </fieldset>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-black text-[#26140e]">
                  문의내역 <span className="text-[#7a5438]">(선택)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-md border border-[#d8c8b5] bg-[#fffaf2] px-3 py-3 text-sm font-bold leading-6 text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
                  placeholder="창업에 대해 궁금하신 점을 자유롭게 작성해주세요."
                />
              </div>

              <input
                type="text"
                name="hp"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="rounded-md border border-[#d8c8b5]/90 bg-[#eadfce]/82 p-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={privacyAgree}
                    onChange={(e) => setPrivacyAgree(e.target.checked)}
                    required
                    className="mt-1 h-4 w-4 rounded border-[#a66732] text-[#8f3528] focus:ring-[#8f3528]"
                  />
                  <span className="text-sm font-bold leading-6 text-[#4a2412]">
                    개인정보 수집 및 이용에 동의합니다. 수집된 정보는 창업 상담 목적으로만 사용되며,
                    관련 법령에 따라 안전하게 관리됩니다.
                  </span>
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || !privacyAgree}
                className={`flex h-14 w-full items-center justify-center gap-2 rounded-md bg-[#8f3528] px-6 text-base font-black text-white shadow-[0_16px_32px_rgba(143,47,25,0.26)] transition-all duration-300 ${
                  isSubmitting || !privacyAgree
                    ? 'cursor-not-allowed opacity-60'
                    : 'hover:bg-[#6f2414]'
                }`}
                whileHover={{ scale: isSubmitting || !privacyAgree ? 1 : 1.01 }}
                whileTap={{ scale: isSubmitting || !privacyAgree ? 1 : 0.99 }}
              >
                <Send className="h-5 w-5" aria-hidden="true" />
                {isSubmitting ? '전송 중...' : '창업 문의 신청하기'}
              </motion.button>

              <p className="flex items-center justify-center gap-2 text-center text-xs font-black text-[#6b4325]">
                <ShieldCheck className="h-4 w-4 text-[#8f3528]" aria-hidden="true" />
                영업일 기준 24시간 이내에 담당자가 연락드립니다.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
