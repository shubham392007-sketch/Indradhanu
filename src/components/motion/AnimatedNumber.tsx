import React, { useEffect, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { editorialEase } from '../../lib/motionVariants';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  formatAsLocale?: boolean;
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = '',
  prefix = '',
  duration = 1.2,
  className = '',
  formatAsLocale = false,
}) => {
  const ref = React.useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(shouldReduceMotion ? value : 0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (shouldReduceMotion) setDisplayValue(value);
      return;
    }

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(start + (end - start) * easedProgress);

      setDisplayValue(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(end);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, value, duration, shouldReduceMotion]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: editorialEase }}
      className={`inline-block ${className}`}
    >
      {prefix}
      {formatAsLocale ? displayValue.toLocaleString() : displayValue}
      {suffix}
    </motion.span>
  );
};
