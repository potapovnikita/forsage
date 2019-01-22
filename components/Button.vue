<template lang="pug">
    button.button(:class="classList",  @click="clickAction === 'feedback' ? feedback('feedback') : clickAction") {{name}}
</template>

<script>
    import zenscroll from 'zenscroll'
    import Button from '~/components/Button.vue'

    export default {
        props: ['name', 'type', 'clickAction'],
        data() {
          return {

          }
        },
        computed: {
            classList() {
                console.log(this)
                return [this.type]
            }
        },
        components: {
            Button
        },
        methods: {
            feedback: (elem = '') => {
                const scrollElem = document.getElementById(elem)
                zenscroll.to(scrollElem)
            },
            onClick: () => {
                console.log(11)
            }
        }
    }
</script>

<style lang="stylus">
    button
        border none
    .button.default
        color whiteMain
        padding 14px 50px 14px
        border-radius 30px
        background-color orangeMain
        font-family $FuturaFont
        font-size $FontSize3
        font-weight bold
        font-style normal
        font-stretch normal
        line-height 1.2
        letter-spacing 0.4px
        transition background-color .3s ease, color .3s ease
        outline none

        &:hover
            cursor pointer
            color orangeMain
            background whiteMain

    .button.small
        color whiteMain
        border 1px solid whiteMain
        padding 10px 46px 11px
        border-radius 30px
        background-color orangeMain
        font-family $ProximaNovaFont
        font-size 16px
        font-weight bold
        letter-spacing 0.6px
        transition background-color .3s ease, color .3s ease
        outline none
        cursor pointer

        &:hover
            color orangeMain
            background whiteMain
            border 1px solid orangeMain
        &.borderNone
            border none
        &.reverse
            background-color whiteMain
            border 1px solid orangeMain
            color orangeMain

            &:hover
                color whiteMain
                background orangeMain
                border 1px solid orangeMain

    @media only screen and (max-width 450px)
        .button.default
            font-size 17px
</style>
