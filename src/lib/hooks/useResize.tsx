'use client';

import { useEffect, useState } from 'react';

const useResize = () => {
  const [is480, setIs480] = useState(false);
  const [is768, setIs768] = useState(false);
  const [is1024, set1024] = useState(false);
  const [is1280, setIs1280] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setIs480(true);
      } else {
        setIs480(false);
      }
      if (width <= 768) {
        setIs768(true);
      } else {
        setIs768(false);
      }
      if (width <= 1024) {
        set1024(true);
      } else {
        set1024(false);
      }
      if (width <= 1280) {
        setIs1280(true);
      } else {
        setIs1280(false);
      }
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { is480, is768, is1024, is1280 };
};

export default useResize;
