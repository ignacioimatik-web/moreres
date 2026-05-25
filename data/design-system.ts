// ============================================================
// SISTEMA DE DISEÑO - ASOCIACIÓN MORERES
// ============================================================
// Inspiración: morera (árbol), calidez mediterránea, Castellón
// ============================================================

export const colors = {
  // — PRIMARIA: Verde morera / Naturaleza / Frescura juvenil —
  primary: {
    50: "#f0f7f0",
    100: "#d9ecda",
    200: "#b3d9b5",
    300: "#7cbf81",
    400: "#4ca854",
    500: "#2d8a35",     // → Primary brand
    600: "#236f2a",
    700: "#1d5923",
    800: "#1a4820",
    900: "#163c1b",
    950: "#0a210e",
  },

  // — SECUNDARIA: Terracota / Cálido / Acogedor —
  secondary: {
    50: "#fdf4ef",
    100: "#f9e4d7",
    200: "#f2c5ae",
    300: "#e89f7c",
    400: "#de7a51",
    500: "#d45d32",     // → Secondary brand
    600: "#c14a27",
    700: "#a03822",
    800: "#832e21",
    900: "#6b281e",
    950: "#3a120e",
  },

  // — NEUTRALES: Profesional / Limpio —
  neutral: {
    50: "#f8f9f8",
    100: "#f0f1ef",
    200: "#dddfdb",
    300: "#bfc2bc",
    400: "#9ca09a",
    500: "#7e837c",
    600: "#656a63",
    700: "#535650",
    800: "#454846",
    900: "#3b3d3a",
    950: "#1f211f",
  },

  // — ACENTO: Dorado / Premium / Destacados —
  accent: {
    50: "#fef8ee",
    100: "#fef0d7",
    200: "#fcddae",
    300: "#f9c37b",
    400: "#f5a146",
    500: "#f28521",     // → Accent brand
    600: "#e36f13",
    700: "#bc5612",
    800: "#954416",
    900: "#783915",
    950: "#411b09",
  },

  // — INFORMACIÓN / ALERTAS —
  info: "#2563eb",
  success: "#16a34a",
  warning: "#d97706",
  error: "#dc2626",

  // — SUPERFICIES —
  surface: {
    white: "#ffffff",
    light: "#f8f9f8",
    card: "#ffffff",
    overlay: "rgba(31, 33, 31, 0.7)",
    hero: "#1f211f",
  },

  // — TEXTO —
  text: {
    primary: "#1f211f",
    secondary: "#535650",
    muted: "#7e837c",
    inverse: "#ffffff",
    link: "#2d8a35",
    linkHover: "#236f2a",
  }
} as const

export const typography = {
  // Familias tipográficas
  fontFamily: {
    sans: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
    display: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  // Escala modular (1.25 - Major Third)
  fontSize: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    base: "1rem",      // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
    "7xl": "4.5rem",   // 72px
  },

  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  lineHeight: {
    tight: "1.1",
    snug: "1.25",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },

  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const

export const spacing = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
} as const

export const borderRadius = {
  none: "0",
  sm: "0.25rem",
  md: "0.5rem",
  lg: "0.75rem",
  xl: "1rem",
  "2xl": "1.5rem",
  "3xl": "2rem",
  full: "9999px",
} as const

export const shadows = {
  sm: "0 1px 2px 0 rgba(31, 33, 31, 0.05)",
  md: "0 4px 6px -1px rgba(31, 33, 31, 0.08), 0 2px 4px -2px rgba(31, 33, 31, 0.05)",
  lg: "0 10px 15px -3px rgba(31, 33, 31, 0.08), 0 4px 6px -4px rgba(31, 33, 31, 0.04)",
  xl: "0 20px 25px -5px rgba(31, 33, 31, 0.08), 0 8px 10px -6px rgba(31, 33, 31, 0.04)",
  "2xl": "0 25px 50px -12px rgba(31, 33, 31, 0.15)",
  inner: "inset 0 2px 4px 0 rgba(31, 33, 31, 0.05)",
  none: "none",
} as const

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const

export const animation = {
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "700ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
} as const

export type ColorKey = keyof typeof colors
export type SpacingKey = keyof typeof spacing
export type ShadowKey = keyof typeof shadows
export type BorderRadiusKey = keyof typeof borderRadius

// — Text styles predefinidos —
export const textStyles = {
  h1: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize["5xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
    // Responsive: 3xl → 5xl
  },
  h2: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize["4xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.tight,
  },
  h3: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  h4: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  body: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
  },
  bodySmall: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.normal,
  },
  caption: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    lineHeight: typography.lineHeight.normal,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: "uppercase" as const,
  },
  lead: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.normal,
    lineHeight: typography.lineHeight.relaxed,
  },
} as const

// — Section backgrounds map —
export const sectionStyles = {
  white: {
    bg: colors.surface.white,
    text: colors.text.primary,
  },
  light: {
    bg: colors.surface.light,
    text: colors.text.primary,
  },
  primary: {
    bg: colors.primary[700],
    text: colors.text.inverse,
  },
  dark: {
    bg: colors.neutral[950],
    text: colors.text.inverse,
  },
  accent: {
    bg: colors.secondary[500],
    text: colors.text.inverse,
  },
} as const
