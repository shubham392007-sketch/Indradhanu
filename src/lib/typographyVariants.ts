import { cubicBezier } from 'motion/react';

// Cinematic Editorial Easing Curves
export const cinematicEase = [0.16, 1, 0.3, 1] as const;
export const editorialEase = [0.22, 1, 0.36, 1] as const;
export const gentleEase = [0.25, 0.1, 0.25, 1] as const;

// Timing Hierarchy Standards (in seconds)
export const TYPOGRAPHY_TIMING = {
  h1: 1.15,
  h2: 0.9,
  h3: 0.68,
  h4: 0.52,
  eyebrow: 0.6,
  paragraph: 0.7,
  label: 0.42,
  stat: 1.0,
  quote: 1.05,
  emphasized: 0.6,
  wordStagger: 0.07,
  lineStagger: 0.1,
  cardStagger: 0.06,
  navStagger: 0.05,
};

// H1: Physical Masked Editorial Reveal
export const h1MaskedVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    clipPath: 'inset(100% 0 0 0)',
    filter: 'blur(6px)',
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    filter: 'blur(0px)',
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.h1,
      delay: custom.delay ?? 0,
      ease: cinematicEase,
    },
  }),
};

// H2: Horizontal Editorial Reveal with Rule Expansion
export const h2HorizontalVariants = {
  hidden: {
    opacity: 0,
    x: -60,
    clipPath: 'inset(0 100% 0 0)',
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    x: 0,
    clipPath: 'inset(0 0% 0 0)',
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.h2,
      delay: custom.delay ?? 0,
      ease: cinematicEase,
    },
  }),
};

// H3: Restrained Upward Reveal with Letter-Spacing Settle
export const h3Variants = {
  hidden: {
    opacity: 0,
    y: 25,
    letterSpacing: '0.04em',
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    letterSpacing: '0em',
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.h3,
      delay: custom.delay ?? 0,
      ease: editorialEase,
    },
  }),
};

// H4: Fast Supporting Hierarchy Reveal
export const h4Variants = {
  hidden: {
    opacity: 0,
    x: -18,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.h4,
      delay: custom.delay ?? 0,
      ease: editorialEase,
    },
  }),
};

// Eyebrow / Overline Technical Reveal
export const eyebrowVariants = {
  hidden: {
    opacity: 0,
    x: -16,
    letterSpacing: '0.22em',
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    x: 0,
    letterSpacing: '0.12em',
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.eyebrow,
      delay: custom.delay ?? 0,
      ease: editorialEase,
    },
  }),
};

// Eyebrow Hairline Expansion
export const eyebrowLineVariants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: (custom: { delay?: number } = {}) => ({
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.7,
      delay: (custom.delay ?? 0) + 0.08,
      ease: editorialEase,
    },
  }),
};

// Paragraph Viewport Reveal
export const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.paragraph,
      delay: custom.delay ?? 0,
      ease: editorialEase,
    },
  }),
};

// 3D Magazine Headline / Editorial Quote Reveal
export const quote3DVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 12,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.quote,
      delay: custom.delay ?? 0,
      ease: cinematicEase,
    },
  }),
};

// Micro-Metadata / Label Reveal
export const labelVariants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: (custom: { delay?: number; duration?: number } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? TYPOGRAPHY_TIMING.label,
      delay: custom.delay ?? 0,
      ease: editorialEase,
    },
  }),
};

// Generic Stagger Container
export const createTextStaggerContainer = (stagger = 0.07, delay = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
