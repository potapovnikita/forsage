<template lang="pug">
    .prices_container
        h2.title.title-prices Цены на абонементы

        .row_category_mobile
            .row_category(v-for="(category, index) in prices"
                v-if="(index+1) === mobileSection"
                :class="['section-'+(index+1)]" @click="changeSectionRight()" v-html="category.Name")
            div(@click="changeSectionLeft()")
                Arrow.left
            div(@click="changeSectionRight()")
                Arrow.right

        .prices_table
            .header
                .item Возраст
                .item Разовое посещение
                .item Абонемент на&nbsp;месяц
                .item.desktop Примечание
            .body
                .section.desktop(v-for="(category, index) in prices")
                    .row_category(v-html="category.Name")
                    .row(v-for="item in category.Items")
                        .cell(v-html="item.Age")
                        .cell(v-html="item.SinglePrice")
                        .cell(v-html="item.MonthPrice")
                        .cell.note_cell(v-if="item.Note" v-html="item.Note")
                    .note(v-if="category.Note" :style="{height: category.Items.length * 24 + 'px'}" v-html="category.Note")

                .section.mobile(v-for="(category, index) in prices" v-if="(index+1) === mobileSection")
                    .row(v-for="item in category.Items")
                        .cell(v-html="item.Age")
                            span(v-if="item.Note")
                        .cell(v-html="item.SinglePrice")
                        .cell(v-html="item.MonthPrice")

        h3.title.title-prices
            | Не можешь выбрать?
            br
            |Приди на пробное занятие бесплатно!


</template>

<script>
    import Prices from '~/assets/staticData/prices.json'
    import Arrow from '~/assets/img/arrow.svg'


    export default {
        data() {
            return {
                prices: Prices.Categories,
                mobileSection: 1,
            }
        },
        components: {
            Arrow,
        },
        methods: {
            changeSectionRight() {
                if (this.mobileSection === this.prices.length) this.mobileSection = 1
                else this.mobileSection++
            },
            changeSectionLeft() {
                if (this.mobileSection === 1) this.mobileSection = this.prices.length
                else this.mobileSection--
            },
        },
    }

</script>

<style lang="stylus">
    $WidthCell = 100px

    .prices_container
        text-align center

        h2.title-prices
            color #000
            margin-bottom 10px

        h3.title
            color orangeMain

            &.title-prices
                margin-top 5px
                animation Blick 2s infinite linear


        .row_category_mobile
            display none

        .prices_table
            width 500px
            margin 0 auto

            .header
                display inline-flex
                background orangeMain
                font-family $FuturaFont
                font-size 13px
                width 100%

                .item
                    max-width $WidthCell
                    min-width $WidthCell
                    color whiteMain
                    padding 5px 8px
                    display flex
                    justify-content center
                    align-items center
                    &:last-child
                        max-width $WidthCell + $WidthCell
                        min-width $WidthCell + $WidthCell
            .body
                .section.mobile
                    display none
                .section
                    background whiteMain
                    position relative

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
                        position relative

                        .cell
                            display flex
                            justify-content center
                            align-items center
                            flex-direction column
                            max-width $WidthCell
                            min-width $WidthCell
                            padding 3px 8px
                            border 1px solid orangeMain
                            border-top none
                            border-right none
                            font-family $FuturaFont
                            font-size 13px
                            &.note_cell
                                border-right 1px solid orangeMain
                                max-width $WidthCell + $WidthCell
                                min-width $WidthCell + $WidthCell
                                font-family $ProximaNovaFont
                                font-size 14px
                            span
                                display none
                    .note
                        display flex
                        justify-content center
                        align-items center
                        border 1px solid orangeMain
                        border-top none
                        font-family $ProximaNovaFont
                        font-size 14px
                        text-align left
                        padding 3px 8px
                        position absolute
                        background whiteMain
                        bottom 0
                        right 0
                        max-width $WidthCell + $WidthCell
                        min-width $WidthCell + $WidthCell
                        overflow hidden

    @keyframes Blick
        from
            transform scale(1)
        50%
            transform scale(0.8)
        to
            transform scale(1)

    @media only screen and (max-width 767px)
        .prices_container
            padding $PaddingContainersMobile 0

            .row_category_mobile
                display block
                width 100%
                margin-bottom 20px
                position relative

                .row_category
                    display flex
                    justify-content center
                    align-items center
                    min-width 70%
                    max-width 70%
                    font-family $ProximaNovaFont
                    color orangeMain
                    font-weight bold
                    font-size 16px
                    border-bottom 1px solid orangeMain
                    padding-bottom 10px
                    margin 0 auto
                    cursor pointer
                .left
                .right
                    position absolute
                    top 0
                    cursor pointer
                    fill #000
                    opacity 0.5
                    &:hover
                        fill orangeMain
                        opacity 1
                .left
                    transform rotate(90deg)
                    left 0
                .right
                    transform rotate(-90deg)
                    right 0



            .prices_table
                width 300px
                .header
                    .desktop
                        display none
                .body
                    .section.desktop
                        display none

                    .section.mobile
                        display block
                        .row
                            .cell
                                span
                                    display flex
                                    color orangeMain
                                    opacity 0.8
                                &:last-child
                                    border-right 1px solid orangeMain


</style>
