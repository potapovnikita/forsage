<template lang="pug">
    .popup-wrapper
        .popup_overlay(:class="{'popup-close': !isOpenPopup}")
        .popup_container(:class="{'popup-close': !isOpenPopup}" v-click-outside="onClickOutside")
            .popup_inner-container
                div(v-if="component === 'prices'")
                    Prices
                div(v-if="component === 'feedback'")
                    Feedback

                .popup_border-top
                .close_btn(@click="$emit('close')")
                    CloseLogo



</template>

<script>
    import vClickOutside from 'v-click-outside'

    import Button from '~/components/Button.vue'
    import CloseLogo from '~/assets/img/close.svg'
    import Feedback from '~/components/Feedback.vue'
    import Prices from '~/components/Prices.vue'


    export default {
        data() {
            return {

            }
        },
        props: ['isOpenPopup', 'close', 'component'],
        directives: {
            clickOutside: vClickOutside.directive
        },
        components: {
            Button,
            CloseLogo,
            Feedback,
            Prices
        },
        methods: {
            onClickOutside (event) {
                if(this.isOpenPopup) this.$emit('close')
            }
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
    .popup-wrapper
        .popup-close
            visibility hidden

            .popup_overlay
                opacity 0

    .popup_overlay
        z-index 1000
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background-color rgba(0,0,0,0.6)
        opacity 1
        transition opacity .3s linear

    .popup_container
        text-align center
        z-index 1000
        position fixed
        top calc(50% - 300px)
        left calc(50% - 300px)
        width 600px
        /*height 520px*/
        opacity 1
        transition all .5s ease-in-out
        &.popup-close
            opacity 0
            transform translateY(55%) scale(.9)
            visibility hidden
        .popup_inner-container
            position relative
            background-color whiteMain
            height 100%
            padding $PaddingContainersMobile

            .popup_border-top
                position absolute
                top 0
                left 0
                height 5px
                width 100%
                background orangeMain
        .close_btn
            svg
                position absolute
                right 30px
                top 30px
                cursor pointer
                fill #000
                opacity 0.5

                &:hover
                    opacity 1
                    fill orangeMain

        h2.title-popup
            color #000


    @media only screen and (max-width 767px)
        .popup_container
            top 0
            left 0
            width 100%
            height 100%
            overflow scroll

            .close_btn svg
                transform scale(0.9)

    @media only screen and (max-width 400px)
        .popup_container
            .popup_inner-container
                padding 20px 10px

    @media only screen and (max-height 500px)
        .popup_container
            .popup_inner-container
                height 500px
</style>
