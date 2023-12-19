/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'flower':"url('https://cdn.pixabay.com/photo/2023/11/15/16/23/hydrangea-8390432_1280.jpg')",
        'um':"url('https://cdn.pixabay.com/photo/2023/11/27/20/41/christmas-trees-8416168_640.jpg')"
        
      }
    },
  },
  plugins: [],
}

