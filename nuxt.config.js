module.exports = {
    /*
    ** Headers of the page
    */
    head: {
    title: 'Школа танцев Forsage Dance School в Екатеринбурге, танцы Екатеринбург, школа танцев, научиться танцевать, студия танца, занятия танцами в Екатеринбурге',
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Современная школа танцев для детей и взрослых по уличным направлениям.'},
        { name: 'keywords', content: 'танцы Екатеринбург, школа танцев, школа танцев в Екатеринбурге, танцы для детей, танцы, Екатеринбург, студия танцев, танцы ЖБИ, хип-хоп, хип-хоп Екатеринбург, хип хоп танцы Екатеринбург, брейк данс Екатеринбург'}
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    },
    modules: [
        [
            '@nuxtjs/yandex-metrika',
            {
                id: '52066491',
                webvisor: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
            }
        ],
    ],
    css: [
        '~assets/styles/fonts.styl',
        '~assets/styles/global.styl',
        // 'swiper/dist/css/swiper.css',
    ],
    plugins: [
        // { src: '~/plugins/swiper.js', ssr: false },
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
            });

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

