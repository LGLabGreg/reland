import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '8px',
      },
      container: {
        center: true,
        screens: {
          '2xl': '1320px',
        },
      },
      colors: {
        border: colors.neutral[200],
        input: colors.neutral[200],
        ring: colors.neutral[800],
        background: colors.white,
        foreground: colors.neutral[800],
        muted: colors.neutral[600],
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: colors.white,
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: colors.zinc[800],
        },
      },
      height: {
        mainnav: '90px',
      },
      spacing: {
        mainnav: '90px',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
