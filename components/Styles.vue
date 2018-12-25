<template lang="pug">
    .styles_container
        .styles_inner-container
            h1.title-text Направления
                .line
            .styles_list
                .styles_list-item(
                    v-for="(item, index) in styles",
                    :class="{active: index === activeStyle}",
                    @click="selectStyle(index)") {{item.StyleName}}
            .styles_video
                iframe(width="100%"
                    height="100%"
                    :src="videoUrl"
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
        height 100vh
        background-position 50%
        background-repeat no-repeat
        background-size cover

        h1.title-text
            max-width 430px
            font-size 53px
            color whiteMain
            text-align center
            font-family Futura
            font-weight bold
            font-style normal
            font-stretch normal
            line-height 1.11
            letter-spacing 1px
            padding-top 100px
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
            font-family Futura
            font-size 13px
            font-weight bold
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing 0.3px
            opacity 0.5
            margin 0 15px 0 15px
            white-space nowrap

            &:hover
                opacity 1

            &:last-child
                margin-right 0

            &:first-child
                margin-left 0
        .active
            opacity 1

    .styles_video
        margin 40px auto 0
        width 60%
        height 566px




</style>
