<template lang="pug">
    .prices_container
        h2.title.title-prices Цены на абонементы
        .prices_table
            .header
                .item Возраст
                .item Разовое посещение
                .item Абонемент на&nbsp;месяц
                .item Примечание
            .body
                .section(v-for="category in prices")
                    .row_category {{category.Name}}
                    .row(v-for="item in category.Items")
                        .cell {{item.Age}}
                        .cell {{item.SinglePrice}}
                        .cell {{item.MonthPrice}}








</template>

<script>
    import Prices from '~/assets/staticData/prices.json'


    export default {
        data() {
            return {
                prices: Prices.Categories,
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
            console.log(this.prices)
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

        .prices_table
            /*border 1px solid orangeMain*/
            width 500px
            margin 0 auto

            .header
                display inline-flex
                background orangeMain
                font-family $FuturaFont
                width 100%

                .item
                    max-width 125px
                    min-width 125px
                    color whiteMain
                    padding 5px 8px
                    display flex
                    justify-content center
                    align-items center
            .body
                .section
                    background whiteMain

                    .row_category
                        background #e5e5e5
                        color #000
                        padding 3px 8px
                        border 1px solid orangeMain
                        border-top none
                        font-family $ProximaNovaFont
                        font-size 15px
                        font-weight bold

                    .row
                        display inline-flex
                        width 100%

                        .cell
                            display flex
                            justify-content center
                            align-items center
                            max-width 125px
                            min-width 125px
                            padding 3px 8px
                            border 1px solid orangeMain
                            border-top none
                            border-right none
                            font-family $FuturaFont
                            font-size 13px







    @media only screen and (max-width 767px)
        .prices_container
            padding $PaddingContainersMobile
</style>
