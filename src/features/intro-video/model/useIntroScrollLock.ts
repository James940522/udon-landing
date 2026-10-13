'use client';

import { useLayoutEffect } from 'react';

const SCROLL_KEYS = new Set([
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
]);

export const useIntroScrollLock = () => {
  useLayoutEffect(() => {
    const body = document.body;
    const root = document.documentElement;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      width: body.style.width,
      height: body.style.height,
      overflow: body.style.overflow,
      touchAction: body.style.touchAction,
    };
    const previousRootStyles = {
      overflow: root.style.overflow,
      scrollBehavior: root.style.scrollBehavior,
      overscrollBehavior: root.style.overscrollBehavior,
    };
    const previousScrollRestoration = window.history.scrollRestoration;

    const resetScroll = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    const preventScroll = (event: Event) => event.preventDefault();
    const preventScrollKeys = (event: KeyboardEvent) => {
      if (SCROLL_KEYS.has(event.key)) event.preventDefault();
    };

    window.history.scrollRestoration = 'manual';
    root.style.scrollBehavior = 'auto';
    resetScroll();

    Object.assign(body.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100dvh',
      overflow: 'hidden',
      touchAction: 'none',
    });
    root.style.overflow = 'hidden';
    root.style.overscrollBehavior = 'none';

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScrollKeys);
    window.addEventListener('scroll', resetScroll);

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKeys);
      window.removeEventListener('scroll', resetScroll);

      Object.assign(body.style, previousBodyStyles);
      root.style.overflow = previousRootStyles.overflow;
      root.style.overscrollBehavior = previousRootStyles.overscrollBehavior;
      resetScroll();
      root.style.scrollBehavior = previousRootStyles.scrollBehavior;
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);
};
