/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      "xs": "430px",
      "sm": '534px',
      "2sm":"630px",
      "3sm":"714px",
      "md": '819px',
      "mmd":"843px",
      "2md": "871px",
      "lg": '900px',
      "2lg":"940px",
      "xl": '1023px',
      "mxl":"1093px",
      '2xl': '1203px',
      "3xl":"1312px"
    },
  },
  plugins: [],
}