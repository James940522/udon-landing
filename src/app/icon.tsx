import { ImageResponse } from 'next/og';

/**
 * SEO: 동적 favicon 생성 (Next.js 16 App Router 방식)
 * 
 * /icon.png, /icon-192.png, /icon-512.png 자동 생성
 * 브랜드 컬러(노란색)를 사용한 심플한 디자인
 */

// 이미지 메타데이터
export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

// favicon 생성 함수
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 320,
          background: 'linear-gradient(135deg, #c9a24d 0%, #a66732 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          textShadow: '0 4px 12px rgba(0,0,0,0.2)',
          borderRadius: '20%',
        }}
      >
        🍳
      </div>
    ),
    {
      ...size,
    }
  );
}
