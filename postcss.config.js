const purgecss = require('@fullhuman/postcss-purgecss')({
    // Specify the paths to all of the template files in your project
    content: ['./src/**/*.js', './public/index.html'],

    // make sure css reset isnt removed on html and body
    whitelist: ['html', 'body'],

    // Include any special characters you're using in this regular expression
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

module.exports = {
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    },
};