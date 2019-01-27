<template lang="pug">
    .partners_container
        h2.title.title-partners Партнеры
        .partners_list
            a.partners_item(v-for="partner in partners" :href="partner.Link ? partner.Link : null" target="_blank")
                img(:src="getBgImg(partner.ImagePath)" v-if="partner.ImagePath")
                .text(v-if="partner.Name" v-html="partner.Name")
        .company
            | FORSAGE DANCE SCHOOL
            br
            | все права защищены
        <!--.company-->
            <!--span Разработка сайта-->
            <!--a(href="https://www.instagram.com/nikitapotapov93/" target="_blank")-->
                <!--span potapovnikita93-->
                <!--InstaLogo-->

</template>

<script>
    import InstaLogo from '~/assets/img/social/instagram-logo.svg'
    import Data from '~/assets/staticData/partners.json'


    export default {
        data() {
            return {
                partners: Data.Partners
            }
        },
        components: {
            InstaLogo
        },
        methods: {
            getBgImg(url) {
                // ~/assets/img/teachers/image-vanya@2x.png
                const imageUrl = require('~/assets/' + `${url}`)
                return url ? `${imageUrl}` : ''
            },
        },
        computed: {

        },
        async created() {

        },
        mounted() {

        },
    }

</script>

<style lang="stylus">
    .partners_container
        padding $PaddingContainersMobile
        text-align center
        background-image linear-gradient(237deg, #0c1135, #080634)

        h2.title-partners
            color whiteMain

        .partners
            &_list
                display flex
                justify-content center
                flex-wrap wrap
                margin 10px
            &_item
                margin 20px
                .text
                    color whiteMain


    .company
            opacity 0.5
            font-family $LucidaGrandeFont
            font-size 11px
            font-weight bold
            color whiteMain
            margin-bottom 5px

            svg
                bottom -3px
                position relative

            span
                margin-right 5px
            a
                display inline-flex
                align-items flex-end
                text-decoration underline
                color whiteMain
                &:hover
                    text-decoration none

    @media only screen and (max-width 767px)
        .partners_container
            padding $PaddingContainersMobile

</style>
