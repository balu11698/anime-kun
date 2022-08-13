import { config, useSpring, useTrail, useTransition } from "react-spring";

export const useStarAnimation = () => {
  return useSpring({
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { ...config.default, duration: 6000 },
    loop: true
  });
};

export const useTrailAnimation = (data: any) => {
  return useTrail(data?.length || 0, {
    config: { ...config.stiff, duration: 100 },
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: false
  });
};

export const useTransistionAnimation = (data: any) => {
  return useTransition(data, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    config: config.molasses
  });
};
