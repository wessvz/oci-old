import { useEffect, useState } from "react";

export default function useWindowSize({
  mobileBreakpoint = 768,
  tabletBreakpoint = 1024,
} = {}) {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    windowSize,
    isMobile:
      typeof windowSize?.width === "number" &&
      windowSize?.width < mobileBreakpoint,
    isTablet:
      typeof windowSize?.width === "number" &&
      windowSize?.width >= mobileBreakpoint &&
      windowSize?.width < tabletBreakpoint,
    isDesktop:
      typeof windowSize?.width === "number" &&
      windowSize?.width >= tabletBreakpoint,
  };
}
