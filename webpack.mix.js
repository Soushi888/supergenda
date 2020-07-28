const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts(
    [
        "resources/js/date.prototype.js",
        "resources/js/datepicker.js",
        "resources/js/modal.js",
        "resources/js/events.js",
        "resources/js/semainier.js",
        "resources/js/app.js"
    ],
    "public/js/app.js"
).sass("resources/sass/app.scss", "public/css");
