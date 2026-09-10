import React, { useRef, useEffect, useState } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useReducedMotion,
} from 'motion/react';
import {
  cinematicEase,
  editorialEase,
  TYPOGRAPHY_TIMING,
  h1MaskedVariants,
  h2HorizontalVariants,
  h3Variants,
  h4Variants,
  eyebrowVariants,
  eyebrowLineVariants,
  paragraphVariants,
  quote3DVariants,
  labelVariants,
} from '../../lib/typographyVariants';

export interface BaseTypographyProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  viewportAmount?: number | 'some' | 'all';
  once?: boolean;
  as?: React.ElementType;
}

/**
 * 1. AnimatedH1 — Physical Masked Editorial Reveal
 * Emerges from beneath a printed editorial mask.
 * Supports multi-line cascade, hero direct animation, and optional scroll-linked scale.
 */
export interface AnimatedH1Props extends BaseTypographyProps {
  lines?: string[];
  scrollMotion?: boolean;
  stagger?: number;
  animateOnMount?: boolean;
}

export const AnimatedH1: React.FC<AnimatedH1Props> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  lines,
  scrollMotion = false,
  animateOnMount = false,
  stagger,
  as: Component = 'h1',
}) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);

  const shouldAnimateDirectly = animateOnMount || scrollMotion;

  if (shouldReduceMotion) {
    if (lines && lines.length > 0) {
      return (
        <Component className={className}>
          {lines.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </Component>
      );
    }
    return <Component className={className}>{children}</Component>;
  }

  // Multi-line cascade mode
  if (lines && lines.length > 0) {
    return (
      <Component ref={ref} className={className}>
        {lines.map((line, idx) => (
          <span key={idx} className="block overflow-hidden">
            <motion.span
              variants={h1MaskedVariants}
              initial="hidden"
              animate={shouldAnimateDirectly ? "visible" : undefined}
              whileInView={shouldAnimateDirectly ? undefined : "visible"}
              viewport={{ once, amount: viewportAmount as any }}
              custom={{
                delay: delay + idx * (stagger ?? TYPOGRAPHY_TIMING.lineStagger),
                duration: duration ?? TYPOGRAPHY_TIMING.h1,
              }}
              className="block"
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Component>
    );
  }

  // Single-line reveal
  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        variants={h1MaskedVariants}
        initial="hidden"
        animate={shouldAnimateDirectly ? "visible" : undefined}
        whileInView={shouldAnimateDirectly ? undefined : "visible"}
        viewport={{ once, amount: viewportAmount as any }}
        custom={{ delay, duration }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  );
};

/**
 * 2. AnimatedH2 — Strong Horizontal Editorial Reveal
 * Introduces chapters/sections with an optional vertical or horizontal rule accent.
 */
export interface AnimatedH2Props extends BaseTypographyProps {
  showAccentRule?: boolean;
  rulePosition?: 'left' | 'bottom';
}

export const AnimatedH2: React.FC<AnimatedH2Props> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  showAccentRule = false,
  rulePosition = 'left',
  as: Component = 'h2',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className={showAccentRule && rulePosition === 'left' ? 'flex items-stretch gap-4' : ''}>
      {showAccentRule && rulePosition === 'left' && (
        <motion.div
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once, amount: viewportAmount as any }}
          transition={{ duration: 0.6, delay, ease: editorialEase }}
          className="w-[2px] bg-[#c03f13] flex-shrink-0"
        />
      )}
      <motion.div
        variants={h2HorizontalVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewportAmount as any }}
        custom={{ delay: delay + (showAccentRule ? 0.08 : 0), duration }}
        className="w-full"
      >
        <Component className={className}>{children}</Component>
      </motion.div>
      {showAccentRule && rulePosition === 'bottom' && (
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once, amount: viewportAmount as any }}
          transition={{ duration: 0.7, delay: delay + 0.15, ease: editorialEase }}
          className="h-[1px] bg-[#1d1d1b] mt-3 w-full"
        />
      )}
    </div>
  );
};

/**
 * 3. AnimatedH3 — Restrained Upward Reveal with Settle
 */
export const AnimatedH3: React.FC<BaseTypographyProps> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  as: Component = 'h3',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <motion.div
      variants={h3Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount as any }}
      custom={{ delay, duration }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};

/**
 * 4. AnimatedH4 — Fast Supporting Hierarchy
 */
export const AnimatedH4: React.FC<BaseTypographyProps> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  as: Component = 'h4',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <motion.div
      variants={h4Variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount as any }}
      custom={{ delay, duration }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};

/**
 * 5. AnimatedEyebrow — Technical Overline / Section Tag with Rule
 */
export interface AnimatedEyebrowProps extends BaseTypographyProps {
  showLine?: boolean;
  lineWidth?: string;
}

export const AnimatedEyebrow: React.FC<AnimatedEyebrowProps> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  showLine = true,
  lineWidth = 'w-12 sm:w-16',
  as: Component = 'span',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#c03f13] font-bold ${className}`}>
        <Component>{children}</Component>
        {showLine && <div className={`h-[1px] bg-[#c03f13] ${lineWidth}`} />}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase text-[#c03f13] font-bold ${className}`}>
      <motion.div
        variants={eyebrowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewportAmount as any }}
        custom={{ delay, duration }}
      >
        <Component>{children}</Component>
      </motion.div>
      {showLine && (
        <motion.div
          variants={eyebrowLineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once, amount: viewportAmount as any }}
          custom={{ delay }}
          className={`h-[1px] bg-[#c03f13] ${lineWidth}`}
        />
      )}
    </div>
  );
};

/**
 * 6. AnimatedParagraph — Quiet Readable Body Text Reveal
 */
export const AnimatedParagraph: React.FC<BaseTypographyProps> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  as: Component = 'p',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <motion.div
      variants={paragraphVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount as any }}
      custom={{ delay, duration }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};

/**
 * 7. AnimatedQuote — 3D Editorial Magazine Statement
 * Features subtle perspective tilt and line-by-line emergence.
 */
export interface AnimatedQuoteProps extends BaseTypographyProps {
  lines?: string[];
}

export const AnimatedQuote: React.FC<AnimatedQuoteProps> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  lines,
  as: Component = 'blockquote',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  if (lines && lines.length > 0) {
    return (
      <Component style={{ perspective: '1000px' }} className={className}>
        {lines.map((line, idx) => (
          <motion.span
            key={idx}
            variants={quote3DVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: viewportAmount as any }}
            custom={{
              delay: delay + idx * 0.12,
              duration: duration ?? TYPOGRAPHY_TIMING.quote,
            }}
            className="block"
          >
            {line}
          </motion.span>
        ))}
      </Component>
    );
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <motion.div
        variants={quote3DVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount: viewportAmount as any }}
        custom={{ delay, duration }}
      >
        <Component className={className}>{children}</Component>
      </motion.div>
    </div>
  );
};

/**
 * 8. AnimatedStat — Canvas-Grade Spring Count-Up with Settling Reveal
 */
export interface AnimatedStatProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
  decimals?: number;
}

export const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  prefix = '',
  suffix = '',
  className = '',
  decimals = 0,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0 });
  const [displayValue, setDisplayValue] = useState<number>(shouldReduceMotion ? value : 0);

  const springValue = useSpring(0, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, shouldReduceMotion, springValue]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [springValue, shouldReduceMotion]);

  const formattedNumber = decimals > 0
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString('en-IN');

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-IN')}{suffix}
      </span>
    );
  }

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 15, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.94 }}
      transition={{ duration: 0.85, ease: cinematicEase }}
      className={`inline-block tabular-nums ${className}`}
    >
      {prefix}{formattedNumber}{suffix}
    </motion.span>
  );
};

/**
 * 9. AnimatedLabel / Caption — Micro-Metadata & Ledger Cells
 */
export const AnimatedLabel: React.FC<BaseTypographyProps> = ({
  children,
  className = '',
  delay = 0,
  duration,
  viewportAmount = 0,
  once = true,
  as: Component = 'span',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <motion.div
      variants={labelVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportAmount as any }}
      custom={{ delay, duration }}
      className="inline-block"
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
};

export const AnimatedCaption = AnimatedLabel;

/**
 * 10. EmphasizedText — Printed Highlighter Stroke Reveal
 */
export interface EmphasizedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  highlightColor?: string;
}

export const EmphasizedText: React.FC<EmphasizedTextProps> = ({
  children,
  className = '',
  delay = 0.1,
  highlightColor = 'rgba(192, 63, 19, 0.18)',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <span className={`font-semibold ${className}`}>{children}</span>;
  }

  return (
    <motion.span
      initial={{ backgroundSize: '0% 100%' }}
      whileInView={{ backgroundSize: '100% 100%' }}
      viewport={{ once: true, amount: 0 }}
      transition={{ duration: 0.65, delay, ease: cinematicEase }}
      style={{
        backgroundImage: `linear-gradient(to right, ${highlightColor}, ${highlightColor})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom',
      }}
      className={`px-1 py-0.5 rounded-xs font-semibold ${className}`}
    >
      {children}
    </motion.span>
  );
};

/**
 * 11. MaskedText — Generic Overflow-Hidden Upward Reveal
 */
export const MaskedText: React.FC<BaseTypographyProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  as: Component = 'div',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <div className="overflow-hidden leading-tight">
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration, delay, ease: editorialEase }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

/**
 * 12. AnimatedWordReveal — Staggered Word Emergence for Hero Statements
 */
export interface AnimatedWordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const AnimatedWordReveal: React.FC<AnimatedWordRevealProps> = ({
  text,
  className = '',
  delay = 0.05,
  stagger = 0.065,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(' ');

  if (shouldReduceMotion) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, idx) => (
        <span key={idx} className="inline-block overflow-hidden mr-[0.28em] last:mr-0">
          <motion.span
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{
              duration: 0.65,
              delay: delay + idx * stagger,
              ease: cinematicEase,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/**
 * 13. TextStaggerContainer & TextStaggerItem
 */
export const TextStaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}> = ({ children, className = '', stagger = 0.07, delay = 0.06 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const TextStaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: editorialEase },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
