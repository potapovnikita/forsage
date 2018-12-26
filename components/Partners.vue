<template lang="pug">
    .partners_container
        h2.title-partners Партнеры
        .partners_list
            .partners_item
                img(src="http://www.hiphopunite.com/wp-content/uploads/2015/12/logo.png")
            .partners_item
                img(src="http://www.hiphopunite.com/wp-content/uploads/2015/12/logo.png")
        .company FORSAGE DANCE SCHOOL, все права защищены
        .company
            span Разработка сайта
            a(href="https://www.instagram.com/nikitapotapov93/")
                span potapovnikita93
                img(src="~/assets/img/social/instagram-logo.svg")





</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
            }
        },
        components: {

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
        padding 50px 60px
        text-align center
        background-image linear-gradient(237deg, #0c1135, #080634)

        .partners
            &_list
                display flex
                justify-content center
                flex-wrap wrap
                margin 50px


    .company
            opacity 0.5
            font-family $LucidaGrandeFont
            font-size 11px
            font-weight bold
            color whiteMain
            margin-bottom 5px

            img
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


        h2.title-partners
            @extend h2.title
            color whiteMain



</style>
