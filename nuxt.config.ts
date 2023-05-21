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
        head: {
            htmlAttrs: {
                lang: 'de'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'StrilonNET',
            meta: [
                { name: 'description', content: "Die Social-Media-Kanäle von StrilonNET" }
            ],
        }
    },
})
