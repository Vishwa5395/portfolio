/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF5',
        'cream-dark': '#F5F0E8',
        brutal: {
          black: '#1A1A1A',
          lime: '#CCFF00',
          pink: '#FF3366',
          blue: '#3366FF',
          yellow: '#FFD700',
          orange: '#FF6B35',
          purple: '#9B5DE5',
          mint: '#00F5D4',
        },
        dark: {
          bg: '#0D0D0D',
          card: '#1A1A1A',
          surface: '#222222',
          text: '#F5F0E8',
          muted: '#888888',
          border: '#444444',
        },
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0px #1A1A1A',
        'brutal-sm': '2px 2px 0px #1A1A1A',
        'brutal-lg': '6px 6px 0px #1A1A1A',
        'brutal-xl': '8px 8px 0px #1A1A1A',
        'brutal-hover': '6px 6px 0px #1A1A1A',
        'brutal-active': '1px 1px 0px #1A1A1A',
        'brutal-lime': '4px 4px 0px #CCFF00',
        'brutal-pink': '4px 4px 0px #FF3366',
        'brutal-blue': '4px 4px 0px #3366FF',
        'brutal-dark': '4px 4px 0px #444444',
        'brutal-dark-sm': '2px 2px 0px #444444',
        'brutal-dark-lg': '6px 6px 0px #444444',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'wave': 'wave 2.5s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'wobble': 'wobble 0.5s ease-in-out',
        'pop': 'pop 0.3s ease-out',
        'bounce-in': 'bounceIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  plugins: [],
}
