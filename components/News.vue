<template lang="pug">
    .news_container
        .news_inner-container
            h2.title Последние новости
            a.news-vk_link(:href="vkLink" target="_blank")
                VkLogo
                span Посмотреть все события
            .news_list
                a.news_item(v-for="item in news", :href="item.PostLink", target="_blank")
                    img.photo(:src="getImg(item.ImageLink)", :alt="item.Name")
                    .text
                        h3.title.head {{item.Name}}
                        .date {{item.Date}}
                        .description.text_default {{item.Description}}



</template>

<script>
    import Data from '~/assets/staticData/news.json'
    import DataContacts from '~/assets/staticData/contacts.json'
    import VkLogo from '~/assets/img/social/vk-logo.svg'


    export default {
        data() {
            return {
                news: Data.News,
                vkLink: DataContacts.Contacts.Vk,
            }
        },
        components: {
            VkLogo
        },
        methods: {
            selectStyle(index) {
                this.activeStyle = index
            },
            getImg(url) {
                if (url.indexOf('http') === -1) {
                    const imageUrl = require('~/assets/' + `${url}`)
                    return url ? `${imageUrl}` : ''
                }
                return url
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
        width $ContainersWidth
        background whiteInnerBackground
        padding $PaddingContainers
        padding-bottom 0

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

        svg
            fill #7f7f7f

        &:hover
            span
                opacity 1
                color orangeMain

            svg
                fill orangeMain

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

                .head
                    margin-bottom 7px

                .date
                    font-family $LucidaGrandeFont
                    font-size 13px
                    font-weight bold
                    color #000
                    margin-bottom 20px
                    opacity 0.5

    @media only screen and (max-width 767px)
        .news_inner-container
            width $ContainersWidthMobile
            padding $PaddingContainersMobile
            padding-bottom 0


</style>
