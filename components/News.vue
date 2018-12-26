<template lang="pug">
    .news_container
        .news_inner-container
            h2.title Последние новости
            a.news-vk_link(href="https://vk.com/forsage_dance_school" target="_blank")
                VkLogo
                span Посмотреть все события
            .news_list
                a.news_item(v-for="item in news", :href="item.PostLink", target="_blank")
                    img.photo(:src="item.ImageLink", :alt="item.Name")
                    .text
                        h3.head {{item.Name}}
                        .date {{item.Date}}
                        .description.text_default {{item.Description}}



</template>

<script>
    import Data from '~/assets/staticData/news.json'
    import VkLogo from '~/assets/img/social/vk-logo.svg'


    export default {
        data() {
            return {
                news: Data.News,
            }
        },
        components: {
            VkLogo
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
            svg
                fill orangered

        span
            margin-left 5px
            opacity 0.5
            font-family $LucidaGrandeFont
            font-size 11px
            font-weight bold
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal
    .news_list
        display flex
        justify-content center
        flex-wrap wrap

        .news_item
            background grayBackground
            margin 15px
            height 390px
            width 280px
            cursor pointer

            &:hover
                box-shadow 0 1px 4px 0 rgba(0, 0, 0, 0.4);

            .photo
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
                    opacity 0.5


</style>
