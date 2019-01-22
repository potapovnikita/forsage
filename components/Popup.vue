<template lang="pug">
    .popup-wrapper
        .popup_overlay(:class="{'popup-close': !isOpenPopup}")
        .popup_container(:class="{'popup-close': !isOpenPopup}")
            .popup_inner-container
                <!--div(v-if="isPrice")-->
                    <!--Prices-->
                <!--div(v-if="isForm")-->
                    <!--Feedback-->

                .popup_border-top
                .close_btn(@click="$emit('close')")
                    CloseLogo
                h2.title.title-popup Цены на абонементы



</template>

<script>
    import Button from '~/components/Button.vue'
    import CloseLogo from '~/assets/img/close.svg'

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
    .popup-wrapper
        .popup-close
            transform translateY(30%) scale(.9)
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

    .popup_container
        text-align center
        z-index 1000
        position fixed
        top calc(50% - 250px)
        left calc(50% - 300px)
        width 600px
        height 500px
        opacity 1
        transition all .5s ease-in-out
        &.popup-close
            opacity 0
        .popup_inner-container
            position relative
            max-width 1080px
            background-color whiteMain
            height 100%
            padding $PaddingContainers

            .popup_border-top
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

        h2.title-popup
            color #000


    @media only screen and (max-width 767px)
        .popup_inner-container
            padding $PaddingContainersMobile
</style>
