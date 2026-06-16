'use client';

import { useEffect } from 'react';

export default function CustomCursorState() {
  useEffect(() => {
    const root = document.documentElement;
    const className = 'is-clicking';

    const startClick = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      root.classList.add(className);
    };

    const endClick = () => {
      root.classList.remove(className);
    };

    window.addEventListener('pointerdown', startClick, true);
    window.addEventListener('pointerup', endClick, true);
    window.addEventListener('pointercancel', endClick, true);
    window.addEventListener('blur', endClick);

    return () => {
      endClick();
      window.removeEventListener('pointerdown', startClick, true);
      window.removeEventListener('pointerup', endClick, true);
      window.removeEventListener('pointercancel', endClick, true);
      window.removeEventListener('blur', endClick);
    };
  }, []);

  return null;
}
