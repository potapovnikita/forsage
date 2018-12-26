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
    css: [
        '~assets/styles/global.styl'
    ],
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
            config.module.rules.filter(r => r.test.toString().includes('svg')).forEach(r => { r.test = /\.(png|jpe?g|gif)$/ });

            config.module.rules.push({
                test: /\.svg$/,
                    loader: 'vue-svg-loader',
            })

            console.log(config.module.rules);

            [].concat(...config.module.rules
                .find(e => e.test.toString().match(/\.styl/)).oneOf
                .map(e => e.use.filter(e => e.loader === 'stylus-loader'))).forEach(stylus => {
                    Object.assign(stylus.options, {
                        import: [
                            '~assets/styles/colors.styl',
                            '~assets/styles/variables.styl',
                        ]
                    })
                });
        }
    }
}

