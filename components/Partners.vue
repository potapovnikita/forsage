<template lang="pug">
    .partners_container
        h2.title.title-partners Партнеры
        .partners_list
            .partners_item
                img(src="~assets/img/partners/HHU.png")
                .text Генеральный спонсор
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

    export default {
        data() {
            return {
            }
        },
        components: {
            InstaLogo
        },
        methods: {

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
        padding $PaddingContainers
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
