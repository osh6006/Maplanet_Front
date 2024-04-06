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
        main: '#F28500',
        warning: '#D92E2E',
        complete: '#FF0000',
        discord: '#5865F2',
        kakao: '#FEE500',
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
        'button-hover': 'buttonHover 2s infinite running',
        loading: 'loading 1.1s infinite',
        jump: 'loading 1.2s infinite',
        actSlideRight: 'slideRight 0.2s forwards'
      },
      keyframes: {
        'slide-in-left': {
          '0%': { transform: 'translateX(65%)' },
          '100%': { transform: 'translateX(-65%)' }
        },
        slideRight: {
          from: { left: '0px' },
          to: { left: '40px' }
        },
        'button-hover': {
          '0%': { transform: 'translateX(0) rotate(35deg)' },
          '100%': { transform: 'translateX(500px) rotate(35deg)' }
        },
        loading: {
          '0%,100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)'
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)'
          }
        },
        jump: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)'
          },
          ' 40%': {
            transform: 'translateY(-10px)'
          },
          '60%': {
            transform: 'translateY(-5px)'
          }
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' })]
};
export default config;
