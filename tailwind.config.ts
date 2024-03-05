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
        new: '#D92E2E',
        main: '#63B4FF',
        warning: '#D92E2E',
        complete: '#FF0000',
        discord: '#5865F2',
        background: '#222222',
        tableBackground: '#161616',
        lightGray: '#444',
        red: '#DE3B5A',
        green: '#04BC00',
        teal: '#00BC78',
        violet: '#9051E1',
        yellow: '#EBFF00',
        warrior: '#DE3B5A',
        wizard: '#3CACC3',
        thief: '#A373E0',
        archer: '#A5CC4D'
      },
      fontSize: {
        header: '10px'
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      animation: {
        'slide-in-left': 'slide-in-left 20s infinite linear',
        'shadow': 'shadow 1s infinite linear'
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(65%)' },
          '100%': { transform: 'translateX(-65%)' }
        },
        'shadow': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.5)' },
          '100%': { boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' }
        }

      }
    }
  },
  plugins: []
};
export default config;
