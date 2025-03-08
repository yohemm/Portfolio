'use client';

import React, { useEffect, useMemo, useState } from 'react';

export function useIsInViewport(ref: React.RefObject<HTMLDivElement | null>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer = useMemo(
    () => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)),
    []
  );

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export function useRevealAnim(ref: React.RefObject<HTMLDivElement | null>) {
  const isInVP = useIsInViewport(ref);
  if (isInVP) {
    ref?.current?.classList.remove('reveal');
  } else {
    ref?.current?.classList.add('reveal');
  }
  return isInVP;
}
