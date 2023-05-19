// https://nuxt.com/docs/api/configuration/nuxt-config
/** @type {import('tailwindcss').Config} */

export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
})
