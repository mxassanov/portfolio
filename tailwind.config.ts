import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['lofi'],
    base: true,
    utils: true,
    logs: true,
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  theme: {
    fontFamily: {
      sans: [
        'Merriweather',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
  },
}
