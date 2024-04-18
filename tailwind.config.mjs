/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        'gun-metal': '#253237',
        'gun-metal-light': '#5C6B73',
        'powder-blue': '#A6C5E4',
      },
      backgroundImage: {
        'pattern': "url('/images/backgroundPattern.png')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
