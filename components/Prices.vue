<template lang="pug">
    .prices_container
        h2.title.title-prices Цены на абонименты



</template>

<script>
    import Prices from '~/assets/staticData/prices.json'


    export default {
        data() {
            return {
                prices: Prices,
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
    .prices_container
        text-align center

        h2.title-prices
            color #000
            margin-bottom 20px

        h3.title
            color orangeMain


    @media only screen and (max-width 767px)
        .prices_container
            padding $PaddingContainersMobile
</style>
