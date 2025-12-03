/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#072635',
        'active-teal': '#01F0D0',
        'active-bg-light': '#D8FCF7',
        'secondary-gray': '#707070',
        'light-bg': '#F6F6F7',
        'vitals-blue': '#007BC7',
        'vitals-red': '#FF6200',
        'vitals-pink': '#EB0000',
        'vitals-bg-blue': '#E0F3FA',
        'vitals-icon-blue': '#006AAC',
        'vitals-bg-red': '#FFE6E9',
        'vitals-icon-red': '#EB0000',
        'vitals-bg-pink': '#FFD8E4',
        'vitals-icon-pink': '#BB3452'
      },
      fontFamily: {
        'manrope': ['Manrope', 'sans-serif']
      },
      fontSize: {
        '24pt': ['24px', { lineHeight: '33px', fontWeight: '800' }],
        '18pt': ['18px', { lineHeight: '24px', fontWeight: '700' }],
        '14pt-bold': ['14px', { lineHeight: '19px', fontWeight: '700' }],
        '14pt-reg': ['14px', { lineHeight: '19px', fontWeight: '400' }]
      },
      boxShadow: {
        'custom': '0px 0px 5px rgba(0, 0, 0, 0.05)'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ]
}