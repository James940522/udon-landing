'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useReducer, useRef } from 'react';

import {
  INITIAL_INTRO_VIDEO_STATE,
  INTRO_VIDEO_LOADING_TIMEOUT_MS,
  INTRO_VIDEO_MOBILE_QUERY,
  reduceIntroVideoState,
} from '../model/introVideoModel';
import { useIntroScrollLock } from '../model/useIntroScrollLock';

interface IntroVideoProps {
  onComplete: () => void;
}

export default function IntroVideo({ onComplete }: IntroVideoProps) {
  const [state, dispatch] = useReducer(reduceIntroVideoState, INITIAL_INTRO_VIDEO_STATE);
  const videoRef = useRef<HTMLVideoElement>(null);
  const completionCalledRef = useRef(false);

  useIntroScrollLock();

  useEffect(() => {
    dispatch({
      type: 'initialize',
      isMobile: window.matchMedia(INTRO_VIDEO_MOBILE_QUERY).matches,
    });
  }, []);

  // 로딩뿐 아니라 재생 도중 멈춘 경우에도 홈페이지 진입을 막지 않는다.
  useEffect(() => {
    if (!state.source || state.phase === 'exiting') return;

    let lastPlaybackTime = videoRef.current?.currentTime ?? 0;
    let lastProgressAt = Date.now();
    const interval = window.setInterval(() => {
      if (document.hidden) {
        lastProgressAt = Date.now();
        return;
      }

      const playbackTime = videoRef.current?.currentTime ?? 0;
      if (playbackTime > lastPlaybackTime) {
        lastPlaybackTime = playbackTime;
        lastProgressAt = Date.now();
      } else if (Date.now() - lastProgressAt >= INTRO_VIDEO_LOADING_TIMEOUT_MS) {
        dispatch({ type: 'finish' });
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, [state.source, state.phase]);

  const handleCanPlay = (video: HTMLVideoElement) => {
    if (state.phase === 'exiting' || video.ended) return;

    video.muted = true;
    void video.play().catch(() => dispatch({ type: 'finish' }));
  };

  const handleAnimationComplete = () => {
    if (state.phase !== 'exiting' || completionCalledRef.current) return;

    completionCalledRef.current = true;
    onComplete();
  };

  return (
    <motion.div
      data-intro-video
      className="fixed inset-0 z-[2147483647] overflow-hidden bg-[#170c08]"
      style={{ height: '100dvh' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: state.phase === 'exiting' ? 0 : 1 }}
      transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
      aria-busy={state.phase === 'loading'}
      onAnimationComplete={handleAnimationComplete}
    >
      {state.source && (
        <motion.video
          ref={videoRef}
          src={state.source}
          className="absolute inset-0 h-full w-full object-fill"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: state.hasStarted ? 1 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onCanPlay={(event) => handleCanPlay(event.currentTarget)}
          onPlaying={() => dispatch({ type: 'playing' })}
          onEnded={() => dispatch({ type: 'finish' })}
          onError={() => dispatch({ type: 'finish' })}
        />
      )}

      <AnimatePresence>
        {!state.hasStarted && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-[#170c08]"
            role="status"
            aria-live="polite"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <span
              className="h-11 w-11 animate-spin rounded-full border-[3px] border-[#c9a24d]/25 border-t-[#c9a24d]"
              aria-hidden="true"
            />
            <p className="text-sm font-semibold text-[#f6efe3] sm:text-base">
              오늘은 볶음우동을 준비하고 있어요
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
