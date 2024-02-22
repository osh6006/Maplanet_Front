import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        main: '#63B4FF',
        discord: '#5865F2',
        background: '#222222',
        tableBackground: '#161616',
        warning: '#D92E2E',
        complete: '#FF0000',
        new: '#D92E2E'
      },
      fontSize: {
        header: '10px'
      },
      padding: {
        main: '360px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'slide-in-left': 'slide-in-left 20s infinite linear'
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(65%)' },
          '100%': { transform: 'translateX(-65%)' }
        }
      }
    }
  },
  plugins: []
};
export default config;
