const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    /* files from blog */
    './content/**/*{html,md}',
    './layouts/**/*.html',
    './layouts/*.html',

    /* css files */
    './assets/css/*.css',
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            fontSize: theme('fontSize.lg'),
            p: {
              color: theme('colors.black'),
              fontSize: theme('fontSize.lg'),
            },
            li: {
              fontSize: theme('fontSize.lg'),
            },
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            h1: { marginBottom: theme('spacing.2') },
            h2: { marginBottom: theme('spacing.2') },
            h3: { marginBottom: theme('spacing.2') },
            h4: { marginBottom: theme('spacing.2') },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: theme('spacing.1'),
              borderRadius: theme('borderRadius.md'),
              boxShadow: theme('boxShadow.lg'),
            },
            pre: {
              backgroundColor: theme('colors.gray.100'),
              color: theme('colors.black'),
              padding: theme('spacing.4'),
              borderRadius: theme('borderRadius.md'),
              borderWidth: theme('borderWidth.DEFAULT'),
              borderColor: theme('colors.gray.400'),
              overflowX: 'auto',
              boxShadow: theme('boxShadow.lg'),
            },
            'pre code': {
              padding: 0,
              borderRadius: 0,
              boxShadow: 'none',
            },
          },
        },
      }),
      fontFamily: {
        sans: ['"Computer Modern"', ...defaultTheme.fontFamily.sans],
        serif: ['"Computer Modern"', ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        prose: '90ch',
      },
      width: {
        'custom-exp-left-small': '15%',
        'custom-exp-right-small': '85%',
        'custom-exp-left': '10%',
        'custom-exp-right': '90%',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
