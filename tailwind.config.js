/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      "inter": ["Inter", "Sans-serif"]
    },
    extend: {
      colors: {
        "base-white": "#FFFFFF",
        "yellow": "#FFB400",
        "gray": "#767676",
        "background-gray": "#F0F0F6",
        "word-gray": "#2B2B2B",
        "light-gray": "#EFEFEF"
      },
      boxShadow: {
        'navbar': '4px 0px 10px 0px rgba(47, 122, 249, 0.1)',
        'button': 'inset 0 2px 4px rgba(0, 0, 0, 0.15)',
        "project-card": '5px 5px 20px 5px #0000001A'
      },
      animation: {
        'fade-in': 'fadeIn 3s ease-out forwards', // Changed duration to 3s
        'slide-in': 'slideIn 2.5s ease-out forwards', // Changed duration to 2.5s
        'slide-in-right': 'slideInRight 2.5s ease-out forwards', // Changed duration to 2.5s
        'move': 'moveShapes 10s linear infinite', // Infinite movement
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' }, // Scale down initially
          '100%': { opacity: '1', transform: 'scale(1)' }, // Scale to original size
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' }, // Start lower
          '100%': { transform: 'translateY(0)', opacity: '1' }, // End at original position
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' }, // Start further right
          '100%': { transform: 'translateX(0)', opacity: '1' }, // End at original position
        },
        moveShapes: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-20px, -20px)' },
          '50%': { transform: 'translate(20px, -20px)' },
          '75%': { transform: 'translate(-20px, 20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}
