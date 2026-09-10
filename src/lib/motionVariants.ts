// Shared Motion Variants and Easing Curves for Rashkar Cinematic Motion System

export const editorialEase = [0.22, 1, 0.36, 1]; // Premium editorial cubic-bezier
export const cinematicEase = [0.16, 1, 0.3, 1];
export const springTransition = { type: 'spring', stiffness: 380, damping: 30 };
export const gentleSpring = { type: 'spring', stiffness: 220, damping: 25 };

// Container variants with staggered children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const slowStaggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Standard directional reveals
export const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: editorialEase,
    },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: editorialEase,
    },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: editorialEase,
    },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: editorialEase,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: editorialEase,
    },
  },
};

// Masked overflow title reveal (Printed paper emergence)
export const maskedTitleReveal = {
  hidden: { y: '105%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: editorialEase,
    },
  },
};

// Line expansion for editorial dividing rules
export const lineReveal = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    originX: 0,
    transition: {
      duration: 0.85,
      ease: editorialEase,
    },
  },
};

// Clip path reveal for imagery and evidence cards
export const clipReveal = {
  hidden: { clipPath: 'inset(0% 100% 0% 0%)', opacity: 0 },
  visible: {
    clipPath: 'inset(0% 0% 0% 0%)',
    opacity: 1,
    transition: {
      duration: 0.95,
      ease: cinematicEase,
    },
  },
};

// Tactile card hover states
export const cardHoverVariants = {
  rest: { y: 0, scale: 1, transition: { duration: 0.25, ease: editorialEase } },
  hover: { y: -5, scale: 1.01, transition: { duration: 0.25, ease: editorialEase } },
  tap: { scale: 0.985, transition: { duration: 0.1 } },
};

// Button hover states
export const buttonHoverVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -1.5, transition: gentleSpring },
  tap: { scale: 0.97, transition: { duration: 0.1 } },
};

// Page/Engine transition variants
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
    scale: 0.995,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: editorialEase,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    transition: {
      duration: 0.4,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};
