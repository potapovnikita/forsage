<template lang="pug">
    .prices-wrapper
        .prices_overlay(:class="{'popup-close': !isOpenPopup}")
        .prices_container(:class="{'popup-close': !isOpenPopup}")
            .prices_inner-container
                .prices_border-top
                .close_btn(@click="$emit('close')")
                    CloseLogo
                h2.title.title-prices Цены на абонементы



</template>

<script>
    import Button from '~/components/Button.vue'
    import CloseLogo from '~/assets/img/close.svg'
    import Prices from '~/assets/staticData/prices.json'

    export default {
        data() {
            return {

            }
        },
        props: ['isOpenPopup', 'close'],
        components: {
            Button,
            CloseLogo,
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
    .prices-wrapper
        .popup-close
            transform translateY(-1000%)

    .prices_overlay
        z-index 1000
        position fixed
        top 0
        bottom 0
        left 0
        right 0
        background-color rgba(0,0,0,0.52)

    .prices_container
        text-align center
        z-index 1000
        position fixed
        top calc(50% - 250px)
        left calc(50% - 300px)
        width 600px
        height 500px
        transition all .5s ease-in-out

        .prices_inner-container
            position relative
            max-width 1080px
            background-color whiteMain
            height 100%
            padding $PaddingContainers

            .prices_border-top
                position absolute
                top 0
                left 0
                height 5px
                width 100%
                background orangeMain
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

        h2.title-prices
            color #000


    @media only screen and (max-width 767px)
        .prices_inner-container
            padding $PaddingContainersMobile
</style>
