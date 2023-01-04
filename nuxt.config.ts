// https://nuxt.com/docs/api/configuration/nuxt-config



export default defineNuxtConfig({
    modules: ['nuxt-icon'],
    css: ['~/assets/styles/main.scss'],
    app: {
        head: {
          title: 'CRUD | Nuxt',
          meta: [
            {name: 'description', content: 'Everything about Nuxt 3'}
          ],

        }
      },
    //   runtimeConfig: {
    //     currencyKey: process.env.CURRENCY_API_KEY
    //   }

})
