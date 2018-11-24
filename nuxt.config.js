module.exports = {
    /*
    ** Headers of the page
    */
    head: {
    title: 'Forsage Dance School',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Forsage Dance School' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend (config, { isDev }) {
            if (isDev && process.client) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                },
                {
                    test: /\.pug$/,
                    resourceQuery: /^\?vue/,
                    loader: 'pug-plain-loader',
                    exclude: /(node_modules)/
                },
                {
                    test: /\.styl/,
                    resourceQuery: /^\?vue/,
                    loader: 'pug-plain-loader',
                    exclude: /(node_modules)/
                })
            }

            [].concat(...config.module.rules
                .find(e => e.test.toString().match(/\.styl/)).oneOf
                .map(e => e.use.filter(e => e.loader === 'stylus-loader'))).forEach(stylus => {
                    Object.assign(stylus.options, {
                        import: [
                            '~assets/styles/colors.styl',
                        ]
                    })
                });
        }
    },
    css: [
        '~assets/styles/global.styl'
    ]
}

