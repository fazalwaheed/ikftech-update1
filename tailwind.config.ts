import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1450FF',
          blueDark: '#0B2E9F',
          blueDeep: '#081B3A',
          black: '#0A0A0C',
          ink: '#111318',
          white: '#FFFFFF',
          mist: '#F4F6FB',
          line: '#E4E8F1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-20px, 25px) scale(0.95)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '30%': { transform: 'translate(3%, 2%)' },
          '50%': { transform: 'translate(-1%, 3%)' },
          '70%': { transform: 'translate(2%, -1%)' },
          '90%': { transform: 'translate(-3%, 1%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        blob: 'blob 12s infinite ease-in-out',
        grain: 'grain 1s steps(4) infinite',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(circle at 20% 20%, rgba(20,80,255,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(20,80,255,0.12), transparent 40%)',
      },
      boxShadow: {
        card: '0 10px 40px -12px rgba(10,10,12,0.18)',
      },
    },
  },
  plugins: [],
};

export default config;
