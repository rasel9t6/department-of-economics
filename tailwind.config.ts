import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },

    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        anekBangla: ['var(--font-anek-bangla)'],
        notoSansBengali: ['var(--font-noto-sans-bengali)'],
      },
      colors: {
        primary: {
          500: '#84cc16',
          100: '#ecfccb',
        },
        dark: {
          100: '#000000',
          200: '#020617',
          300: '#0f172a',
          400: '#1e293b',
          500: '#334155',
        },
        light: {
          900: '#FFFFFF',
          800: '#f8fafc',
          850: '#f1f5f9',
          700: '#e2e8f0',
          500: '#475569',
          400: '#94a3b8',
        },
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;

export default config;
