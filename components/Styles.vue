<template lang="pug">
    .styles_container
        .styles_inner-container
            .styles-top
                h1.title.title-text Направления
                    .line
                .styles_list
                    .styles_list-item(
                        v-for="(item, index) in styles",
                        :class="{active: index === activeStyle}",
                        @click="selectStyle(index)") {{item.StyleName}}
            .styles_video
                div
                    iframe(:src="videoUrl"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen)




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
            // выбор стиля
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
    .styles_inner-container
        background-color whiteInnerBackground
        background-image url('~assets/img/background-styles@2x.png')
        background-position 50%
        background-repeat no-repeat
        background-size cover
        padding $PaddingContainers
        padding-bottom 80px

        .styles-top
            margin-bottom 40px
            .title-text
                max-width 430px
                padding-top 35px
                padding-bottom 50px
                position relative
                margin 0 auto

                .line
                    width 118px
                    height 5px
                    position absolute
                    background orangeMain
                    top 100px
                    right 0
    .styles_list
        display flex
        justify-content center

        &-item
            color whiteMain
            cursor pointer
            font-family $FuturaFont
            font-size 15px
            font-weight bold
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing 0.3px
            opacity 0.5
            margin 0 30px 15px 0
            white-space nowrap
            border-bottom 2px solid
            border-color rgba(0, 0, 0, 0)


            &:hover
                opacity 1

            &:last-child
                margin-right 0

            &:first-child
                margin-left 0
        .active
            border-bottom 2px solid orangeMain
            opacity 1

    .styles_video
        div
            position relative
            margin 0 auto
            width 60%
            padding-bottom 32%
            padding-top 25px
            height 0

            iframe
                position absolute
                top 0
                left 0
                width 100%
                height 100%

    @media only screen and (max-width 1000px)
        .styles_list
            margin 0 auto
            max-width 400px
            flex-wrap wrap

    @media only screen and (max-width 450px)
        .styles_list-item
            margin-right 15px

        .styles_video
            div
                width 100%
                padding-bottom 48%


</style>
