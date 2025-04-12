/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          black: '#0A0A0A',
          charcoal: '#1E1E1E',
          blue: '#0B1A2F',
          silver: '#E5E9F0',
        },
        nev: {
          purple: '#6B2FBF',
          violet: '#9D4EDD',
          neon: '#B026FF',
          electric: '#00F6FF',
          metallic: '#8892B0',
        }
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'card-hover': 'card-hover 0.3s ease-out forwards',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        glow: {
          '0%': { 
            'filter': 'drop-shadow(0 0 10px rgba(0, 246, 255, 0.5))',
            'transform': 'scale(1)'
          },
          '50%': { 
            'filter': 'drop-shadow(0 0 20px rgba(204, 51, 51, 0.8)) drop-shadow(0 0 30px rgba(0, 246, 255, 0.6))',
            'transform': 'scale(1.05)'
          },
          '100%': { 
            'filter': 'drop-shadow(0 0 10px rgba(0, 246, 255, 0.5))',
            'transform': 'scale(1)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            'opacity': '1',
            'transform': 'scale(1)',
          },
          '50%': {
            'opacity': '.5',
            'transform': 'scale(1.05)',
          },
        },
        'grid-flow': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        'card-hover': {
          '0%': { transform: 'rotateX(0) rotateY(0)' },
          '100%': { transform: 'rotateX(var(--rx)) rotateY(var(--ry))' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};