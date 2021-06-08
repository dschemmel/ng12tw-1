module.exports = {
  purge: {
    contents: [
      './src/app/**/*.ts',
      './src/app/**/*.scss',
      './src/app/**/*.html',
    ],
    options: {
      rejected: true,
      printRejected: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
