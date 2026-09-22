import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'tilt';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
