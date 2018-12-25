<template lang="pug">
    .news_container
        .news_inner-container
            h2.title Последние новости
            a.news-vk_link(href="https://vk.com/forsage_dance_school" target="_blank")
                img.icon-vk(src="~/assets/img/social/vk-logo.svg")
                span Посмотреть все события
            .news_list
                .news_item
                    img.photo(src="http://nsn.fm/upload/iblock/5c9/5c9c3ae3084d83e77d3f36885175f004.jpg", alt="Кубок России")
                    .text
                        h3.head КУБОК РОССИИ
                        .date 28 декабря 2018
                        .description Начинается подготовка к чемпионату России по танцам. Подробности о записи команды на турнир читайте в группе в VK
                .news_item
                    img.photo(src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEM2DysW5aFOjrz7YlyMBpsLDg8smrAtwv7604sgXQBWlIQ9DH", alt="Выиграли первое место")
                    .text
                        h3.head ВЫИГРАЛИ ПЕРВОЕ МЕСТО
                        .date 28 декабря 2018
                        .description Начинается подготовка к чемпионату России по танцам. Подробности о записи команды на турнир читайте в группе в VK

                .news_item
                    img.photo(src="http://fc-arsenal.by/uploads/posts/2014-09/1410440859_zp_512121025_sm_9641_89_1e9efd_3643.jpg", alt="Сборы")
                    .text
                        h3.head СБОРЫ
                        .date 28 декабря 2018
                        .description Начинается подготовка к чемпионату России по танцам. Подробности о записи команды на турнир читайте в группе в VK







</template>

<script>
    import Data from '~/assets/staticData/styles.json'


    export default {
        data() {
            return {
                styles: Data.Styles,
                activeStyle: 0,
            }
        },
        components: {

        },
        methods: {
            selectStyle(index) {
                this.activeStyle = index
            },
        },
        computed: {
            videoUrl() {
                return this.styles[this.activeStyle].YouTubeLink
            }
        },
        created() {

        },
        mounted() {

        },
    }

</script>

<style lang="stylus">
    .news_container
        display flex
        justify-content center

    .news_inner-container
        width ContainersWidth
        background whiteInnerBackground
        padding 60px

    h2.title
        text-align center
        font-family $FuturaFont
        font-size 28px
        font-weight bold
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing 0.7px
        color #000

    a
        text-decoration none

    .news-vk_link
        display flex
        align-items center
        justify-content center
        text-align center
        margin 15px auto
        color #000
        cursor pointer
        width 170px



        &:hover
            span
                opacity 1
                color orangeMain

        span
            margin-left 5px
            opacity 0.5
            font-family LucidaGrande
            font-size 11px
            font-weight bold
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal
    .news_list
        display flex
        justify-content center
        flex-wrap nowrap
        .news_item
            background grayBackground
            margin 15px
            height 390px
            width 280px
            cursor pointer

            &:hover
                box-shadow 0 1px 4px 0 rgba(0, 0, 0, 0.4);

            .photo
                background-color #47494e
                min-height 150px
                max-height 150px
                min-width 100%

            .text
                padding 24px

                h3.head
                    font-family $FuturaFont
                    font-size 18px
                    font-weight bold
                    letter-spacing 0.4px
                    color #000
                    margin-bottom 7px
                .date
                    font-family $LucidaGrandeFont
                    font-size 13px
                    font-weight bold
                    color #000
                    margin-bottom 20px


                .description
                    font-family $ProximaNovaFont
                    font-size 16px
                    letter-spacing 0.4px
                    color #000


</style>
