/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      
    },
    extend: {
      backgroundImage: {
        // आप यहां कस्टम बैकग्राउंड इमेज जोड़ सकते हैं
      },
      keyframes: {
        // अगर आप कस्टम keyframes ऐड करना चाहें तो यहां कर सकते हैं
      },
      colors: {
        filmoji: {
          light: '#BFBFBF', // ग्रे रंग
          dark: '#FFE5A3',  // गोल्ड रंग
        },
      },
      gradientColorStops: {
        filmoji: ['#BFBFBF', '#FFE5A3'], // ग्रेडिएंट स्टॉप
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'), // Tailwind का प्लगइन
  ],
};
