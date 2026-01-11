import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 상단 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* 로고 및 소개 */}
          <div>
            <div className="mb-4">
              <Image
                src="/asset/logo/Jaeyoung_F&B.png"
                alt="오늘은 볶음우동"
                width={200}
                height={200}
                loading="lazy"
                quality={75}
              />
            </div>
            <div className="space-y-2">
              <p
                className="text-sm text-stone-700 font-medium"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span itemProp="legalName">(주)재영에프앤비</span> (Jaeyoung F&B) | 대표자:{' '}
                <span itemProp="founder">최재영, 이호남</span>
              </p>
              <p className="text-sm text-stone-600" style={{ fontFamily: 'var(--font-body)' }}>
                사업자등록번호: 576-88-03176
              </p>
              <p
                className="text-sm text-stone-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                주소: 서울특별시 동대문구 왕산로 200
                <br />
                롯데캐슬 SKY-L65 섹션오피스 1204호
              </p>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-emerald-800">바로가기</h4>
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
                    className="text-lg text-stone-700 hover:text-emerald-700 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객센터 */}
          <div>
            <h4 className="text-xl md:text-2xl font-bold mb-4 text-emerald-800">고객센터</h4>
            <div className="space-y-3">
              <p className="text-3xl font-bold text-stone-900">010-9923-9502</p>
              <p className="text-lg text-stone-600">오전 08:30 ~ 오후 20:00</p>
              <p className="text-lg text-stone-600">이메일: wochl123@naver.com</p>
            </div>
          </div>
        </div>

        {/* 하단 저작권 영역 (브랜드명 내부 링크 앵커) */}
        <div className="border-t border-stone-300 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-600">
            <p>
              © 2024{' '}
              <Link href="/" className="font-medium text-stone-800 hover:text-emerald-700">
                오늘은 볶음우동
              </Link>
              . All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/#brand" className="hover:text-emerald-700">
                오늘은 볶음우동 프랜차이즈
              </Link>
              <span className="text-stone-400">|</span>
              <Link href="/#contact" className="hover:text-emerald-700">
                창업 상담 문의
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
