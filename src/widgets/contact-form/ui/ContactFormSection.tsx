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
      className="relative overflow-hidden bg-[#170c08] py-16 text-[#fff2d8] md:py-24"
      aria-label="오늘은 볶음우동 창업 문의"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(255, 229, 172, 0.08) 0 16%, transparent 16% 100%), linear-gradient(45deg, transparent 0 58%, rgba(143, 47, 25, 0.22) 58% 72%, transparent 72% 100%), repeating-linear-gradient(90deg, rgba(255, 222, 151, 0.045) 0 1px, transparent 1px 112px), repeating-linear-gradient(0deg, rgba(255, 222, 151, 0.03) 0 1px, transparent 1px 11px), linear-gradient(135deg, #100806 0%, #26140e 48%, #6a3c22 100%)',
        }}
        aria-hidden="true"
      />
      <div className="absolute -left-24 top-0 h-80 w-80 rotate-45 rounded-lg bg-[#e4cf9f]/10" />
      <div className="absolute right-[-5rem] top-[-4rem] h-60 w-60 rotate-45 rounded-lg bg-[#8f3528]/20 shadow-[0_24px_60px_rgba(0,0,0,0.24)]" />
      <div className="absolute bottom-[-5rem] right-[7vw] h-64 w-64 rotate-45 rounded-lg border border-[#c9a24d]/24" />
      <div
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgba(255, 222, 151, 0.16) 0 2px, transparent 2px 10px)',
          backgroundSize: '140px 140px',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#fff2d8]/6 via-transparent to-black/18" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <motion.div
          className="mx-auto w-full max-w-lg rounded-lg border border-[#c9a24d]/45 bg-linear-to-br from-[#fff2d8]/94 via-[#f4dfb4]/92 to-[#e3bf78]/88 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-sm md:p-8"
          initial={{ opacity: 0, y: 34 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 inline-flex rounded-full bg-[#26140e] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#c9a24d]">
            Today Udon
          </span>
          <h2 className="text-4xl font-black leading-[1.12] text-[#2a1208] md:text-6xl">
            성공 창업,
            <br />
            <span className="text-[#8f3528]">오늘은</span>
            <br />
            <span className="text-[#8f3528]">볶음우동</span>입니다.
          </h2>
          <p className="mt-6 text-base font-black leading-8 text-[#4a2412] md:text-lg">
            작은 공간에서도 안정적으로 시작할 수 있도록 상담부터 오픈까지 함께합니다.
            배달 중심 운영, 소형 매장, 전환 창업까지 편하게 문의해주세요.
          </p>

          <a
            href="sms:010-9923-9502?body=홈페이지를%20통해%20오늘은%20볶음우동%20창업%20문의를%20드립니다."
            className="mt-6 inline-flex items-center gap-3 rounded-md bg-[#26140e] px-5 py-3 text-3xl font-black text-[#c9a24d] shadow-[0_18px_44px_rgba(43,18,8,0.32)] transition-transform hover:scale-[1.02] hover:text-[#e2b957]"
          >
            <Phone className="h-7 w-7" aria-hidden="true" />
            010-9923-9502
          </a>
        </motion.div>

        <motion.div
          className="mx-auto w-full max-w-xl rounded-lg border border-[#c9a24d]/42 bg-[#fff8eb]/96 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)] md:p-6"
          initial={{ opacity: 0, y: 34 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
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
                  className="h-11 w-full rounded-md border border-[#a66732] bg-[#fff8eb] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
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
                  className="h-11 w-full rounded-md border border-[#a66732] bg-[#fff8eb] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
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
                  className="h-11 w-full rounded-md border border-[#a66732] bg-[#fff8eb] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
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
                          : 'border-[#a66732] bg-[#fff8eb] text-[#4a2412] hover:border-[#8f3528]'
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
                  className="h-11 w-full rounded-md border border-[#a66732] bg-[#fff8eb] px-3 text-sm font-bold text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
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
                          : 'border-[#a66732] bg-[#fff8eb] text-[#4a2412] hover:border-[#8f3528]'
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
                className="w-full resize-none rounded-md border border-[#a66732] bg-[#fff8eb] px-3 py-3 text-sm font-bold leading-6 text-[#26140e] outline-none transition focus:border-[#8f3528] focus:ring-2 focus:ring-[#c9a24d]/25"
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

            <div className="rounded-md border border-[#a66732]/70 bg-[#f6e6bc] p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={privacyAgree}
                  onChange={(e) => setPrivacyAgree(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded border-[#a66732] text-[#8f3528] focus:ring-[#8f3528]"
                />
                <span className="text-sm font-bold leading-6 text-[#4a2412]">
                  개인정보 수집 및 이용에 동의합니다. 수집된 정보는 창업 상담 목적으로만
                  사용되며, 관련 법령에 따라 안전하게 관리됩니다.
                </span>
              </label>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || !privacyAgree}
              className={`flex h-14 w-full items-center justify-center gap-2 rounded-md bg-[#8f3528] px-6 text-base font-black text-white shadow-[0_16px_32px_rgba(143,47,25,0.26)] transition-all duration-300 ${
                isSubmitting || !privacyAgree ? 'cursor-not-allowed opacity-60' : 'hover:bg-[#6f2414]'
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
    </section>
  );
}
