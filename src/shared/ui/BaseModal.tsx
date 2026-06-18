'use client';

import { ReactNode, useState } from 'react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  position: {
    mobile?: { left?: string; top?: string; transform?: string };
    desktop?: { left?: string; top?: string; transform?: string };
  };
  width?: string;
  maxHeight?: string;
  className?: string;
  header?: ReactNode;
  children: ReactNode;
  modalId?: string;
  customFooter?: ReactNode;
}

export default function BaseModal({
  isOpen,
  onClose,
  position,
  width = 'w-[90vw] sm:w-[400px]',
  maxHeight,
  className = '',
  header,
  children,
  modalId,
  customFooter,
}: BaseModalProps) {
  const [dontShowToday, setDontShowToday] = useState(false);

  if (!isOpen) return null;

  const handleClose = () => {
    if (dontShowToday && modalId) {
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      localStorage.setItem(`hideModal_${modalId}`, tomorrow.getTime().toString());
    }
    onClose();
  };

  // 모바일 위치
  const mobileLeft = position.mobile?.left || 'left-[50%]';
  const mobileTop = position.mobile?.top || 'top-[50%]';
  const mobileTransform = position.mobile?.transform || 'translate-x-[-50%] translate-y-[-50%]';

  // 데스크톱 위치
  const desktopLeft = position.desktop?.left || 'sm:left-4';
  const desktopTop = position.desktop?.top || 'sm:top-4';
  const desktopTransform = position.desktop?.transform || 'sm:translate-x-0 sm:translate-y-0';

  return (
    <div
      className={`absolute ${mobileLeft} ${mobileTop} ${mobileTransform} ${desktopLeft} ${desktopTop} ${desktopTransform} z-50 ${width} ${maxHeight || ''} flex flex-col shadow-2xl ${className}`}
    >
      {/* Header */}
      {header && <div className="flex-shrink-0">{header}</div>}

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">{children}</div>

      {/* Footer */}
      <div className="flex-shrink-0">
        {customFooter ? (
          customFooter
        ) : (
          <div className="mt-4 space-y-3 rounded-2xl border border-[#c9a24d]/30 bg-[#f7eddb]/92 p-4 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2">
              <input
                type="checkbox"
                id={`dontShowToday_${modalId}`}
                checked={dontShowToday}
                onChange={(e) => setDontShowToday(e.target.checked)}
                className="h-4 w-4 rounded border-2 border-[#9a826b] text-[#a66732] focus:ring-2 focus:ring-[#c9a24d] sm:h-5 sm:w-5"
              />
              <label
                htmlFor={`dontShowToday_${modalId}`}
                className="cursor-pointer text-xs font-bold text-[#533a2d] sm:text-sm"
              >
                오늘 하루 창 열지 않기
              </label>
            </div>

            <button
              onClick={handleClose}
              className="w-full rounded-lg border-2 border-[#c9a24d]/55 bg-[#fff8eb] px-4 py-2 text-sm font-black text-[#26140e] shadow-md transition-all duration-200 hover:border-[#c9a24d] hover:bg-[#fff2d8] hover:shadow-lg sm:px-6 sm:py-3 sm:text-base"
            >
              닫기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
