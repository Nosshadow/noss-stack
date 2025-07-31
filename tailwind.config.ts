import type { Config } from "tailwindcss";

// Your global colors, converted to hex for direct use.
const base = {
  light: '#FAFAFAFF',
  dark: '#121212',
  focus: '#94a3b8',
};

const colorsLight = {
  primary: '#14b8a6',
  secondary: '#818cf8',
  success: '#22c55e',
  warning: '#f97316',
  danger: '#EF4444D0',
};

const colorsDark = {
  primary: '#0d9488',
  secondary: '#4f46e5',
  success: '#16a34a',
  warning: '#ea580c',
  danger: '#dc2626',
};


// --- Light Theme Definition ---
const lightThemeColors = {
  background: base.light,
  foreground: base.dark,
  focus: base.focus,
  primary: {
    DEFAULT: colorsLight.primary,
    foreground: base.dark,
  },
  secondary: {
    DEFAULT: colorsLight.secondary,
    foreground: base.dark,
  },
  success: {
    DEFAULT: colorsLight.success,
    foreground: base.dark,
  },
  warning: {
    DEFAULT: colorsLight.warning,
    foreground: base.dark,
  },
  danger: {
    DEFAULT: colorsLight.danger,
    foreground: base.dark,
  },
};

// --- Dark Theme Definition ---
const darkThemeColors = {
  background: base.dark,
  foreground: base.light,
  focus: base.focus,
  primary: {
    DEFAULT: colorsDark.primary,
    foreground: base.light,
  },
  secondary: {
    DEFAULT: colorsDark.secondary,
    foreground: base.light,
  },
  success: {
    DEFAULT: colorsDark.success,
    foreground: base.light,
  },
  warning: {
    DEFAULT: colorsDark.warning,
    foreground: base.light,
  },
  danger: {
    DEFAULT: colorsDark.danger,
    foreground: base.light,
  },
};

// The final configuration for the heroui plugin
export const herouiConfig = {
  layout: {
    disabledOpacity: "0.3",
    radius: { small: "4px", medium: "8px", large: "12px" },
    borderWidth: { small: "1px", medium: "2px", large: "3px" },
  },
  themes: {
    light: {
      colors: lightThemeColors,
    },
    dark: {
      colors: darkThemeColors,
    },
  },
};

// The main Tailwind CSS configuration
const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/react/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [], // Kept empty as the plugin is loaded via hero.ts
};

export default config;
