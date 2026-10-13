export const INTRO_VIDEO_MOBILE_QUERY = '(max-width: 767px)';
export const INTRO_VIDEO_LOADING_TIMEOUT_MS = 15_000;

export const getIntroVideoSource = (isMobile: boolean) =>
  isMobile ? '/asset/intro/3-2.mp4' : '/asset/intro/1-1.mp4';

interface IntroVideoState {
  source: string | null;
  phase: 'loading' | 'playing' | 'exiting';
  hasStarted: boolean;
}

type IntroVideoEvent =
  | { type: 'initialize'; isMobile: boolean }
  | { type: 'playing' }
  | { type: 'finish' };

export const INITIAL_INTRO_VIDEO_STATE: IntroVideoState = {
  source: null,
  phase: 'loading',
  hasStarted: false,
};

export const reduceIntroVideoState = (
  state: IntroVideoState,
  event: IntroVideoEvent
): IntroVideoState => {
  if (state.phase === 'exiting') return state;

  if (event.type === 'initialize') {
    return state.source ? state : { ...state, source: getIntroVideoSource(event.isMobile) };
  }

  if (event.type === 'playing') {
    return { ...state, phase: 'playing', hasStarted: true };
  }

  return { ...state, phase: 'exiting' };
};
