import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { editorialEase } from '../../lib/motionVariants';

interface RevealTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span';
}

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className="overflow-hidden leading-tight">
      <motion.div
        initial={{ y: '105%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.85,
          delay,
          ease: editorialEase,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
