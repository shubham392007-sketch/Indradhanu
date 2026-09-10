import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { editorialEase } from '../../lib/motionVariants';

interface SectionHeadingProps {
  label: string;
  className?: string;
  lineWidth?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  className = '',
  lineWidth = 'w-16',
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#c03f13] font-bold ${className}`}>
      <motion.span
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: editorialEase }}
      >
        {label}
      </motion.span>
      <motion.div
        initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.15, ease: editorialEase }}
        className={`h-[1px] bg-[#c03f13] ${lineWidth}`}
      />
    </div>
  );
};
