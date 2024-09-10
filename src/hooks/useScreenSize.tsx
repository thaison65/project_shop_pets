import { useEffect, useState, useRef } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof document !== 'undefined' ? document.documentElement.clientWidth : 0,
    height: typeof document !== 'undefined' ? document.documentElement.clientHeight : 0,
  });

  const observerRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    const updateSize = () => {
      setScreenSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };

    observerRef.current = new ResizeObserver(updateSize);
    observerRef.current.observe(document.documentElement);

    // Initial call to set the size
    updateSize();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
