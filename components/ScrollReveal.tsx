'use client';
import { useEffect, useRef, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  const dirClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : 'reveal';

  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  );
}
