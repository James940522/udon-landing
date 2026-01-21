import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 로고 및 소개 */}
          <div>
            <div className="mb-4">
              <Image
                src="/asset/logo/오늘은_F&B_로고.png"
                alt="오늘은 에프앤비"
                width={200}
                height={80}
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="space-y-2">
              <p
                className="text-sm text-stone-300 font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span itemProp="legalName">오늘은 에프앤비</span> | 대표자:{' '}
                <span itemProp="founder">이다은</span>
              </p>
              <p className="text-sm text-stone-400" style={{ fontFamily: 'var(--font-body)' }}>
                사업자등록번호: 751-58-00695
              </p>
              <p
                className="text-sm text-stone-400 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                주소: 경기도 파주시 금빛로 44-1 604호 s17
              </p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-amber-400">바로가기</h4>
            <ul className="space-y-3">
              {[
                { name: '브랜드 소개', href: '#brand' },
                { name: '수익 구조', href: '#revenue' },
                { name: '창업 과정', href: '#startup-process' },
                { name: '메뉴', href: '#menu' },
                { name: '고객 리뷰', href: '#reviews' },
                { name: '매장 안내', href: '#store' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-lg text-stone-300 hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객센터 */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-amber-400">고객센터</h4>
            <div className="space-y-3">
              <p className="text-3xl font-bold text-white">010-9923-9502</p>
              <p className="text-lg text-stone-300">오전 08:30 ~ 오후 20:00</p>
              <p className="text-lg text-stone-300">이메일: wochl123@naver.com</p>
            </div>
          </div>
        </div>

        {/* 하단 저작권 영역 (브랜드명 내부 링크 앵커) */}
        <div className="border-t border-stone-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-400">
            <p>
              © 2024{' '}
              <Link href="/" className="font-medium text-stone-200 hover:text-amber-400">
                오늘은 볶음우동
              </Link>
              . All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/#brand" className="hover:text-amber-400">
                오늘은 볶음우동 프랜차이즈
              </Link>
              <span className="text-stone-600">|</span>
              <Link href="/#contact" className="hover:text-amber-400">
                창업 상담 문의
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
