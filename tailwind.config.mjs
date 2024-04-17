/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gun-metal': '#253237',
        'gun-metal-light': '#5C6B73',
        'powder-blue': '#A6C5E4',
      },
      backgroundImage: {
        'pattern': "url('./public/images/backgroundPattern.png')"
      },
    },
  },
  plugins: [],
}
