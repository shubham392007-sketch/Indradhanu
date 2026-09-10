import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { editorialEase } from '../../lib/motionVariants';

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
}

export const MotionCard: React.FC<MotionCardProps> = ({
  children,
  className = '',
  delay = 0,
  hoverEffect = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: editorialEase,
      }}
      whileHover={
        hoverEffect
          ? {
              y: -5,
              transition: { duration: 0.25, ease: editorialEase },
            }
          : undefined
      }
      whileTap={hoverEffect ? { scale: 0.985 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};
