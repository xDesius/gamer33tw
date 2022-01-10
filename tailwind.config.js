const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'html': ['Montserrat'],
    },
    extend: {
      gridTemplateColumns: {
        'main': '270px 1fr 1fr 1fr 1fr 1fr 240px',
      },
      gridTemplateRows: {
        'main': '1fr 1fr 1fr',
      },
      width: {
        '128': '48rem',
      },
      height: {
        '128': '48rem',
      },
      margin: {
        '100' : '34rem',
        '120' : '40rem',
      },
      fontFamily: {
        sans: [ 
          'Montserrat',
          ...defaultTheme.fontFamily.sans,
        ]
      }
    },
  },
  plugins: [],
}