/* eslint-disable */
module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js'],
    darkMode: 'class', // or 'media' or false
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms')],
}
