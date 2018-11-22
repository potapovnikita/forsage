<template lang="pug">
    .header_container
        .menu
            .menu_left
                .menu_item ПРЕПОДАВАТЕЛИ
                .menu_item НАПРАВЛЕНИЯ
                .menu_item РАСПИСАНИЕ
            .menu_icon-container
                img.menu_icon(src="~/assets/img/logotip.png")
            .menu_right
                .menu_item НОВОСТИ
                .menu_item ЦЕНЫ
                .menu_item КОНТАКТЫ
                .menu_item ПЕР.ОТДЕЛЬНЫЙ, 5
                    .menu_item-map
                    .menu_item-text Посмотреть на карте

        .title
            .title-text
                | Начни танцевать
                br
                | прямо сейчас
            Button(name="ОСТАВИТЬ ЗАЯВКУ" type="default")
        .scroll-block Arrow

</template>

<script>
    import Button from '~/components/Button.vue'

    export default {
        components: {
            Button
        }
    }

</script>

<style lang="stylus">
    .header_container
        display flex
        justify-content space-between
        flex-direction column
        background-image url('~assets/img/header-background.png')
        background-position center
        background-repeat no-repeat
        background-size cover
        height 100vh

        .title
            /*margin-top 160px*/
            font-size 53px
            color #fff
            text-align center
            font-family Futura
            font-weight bold
            font-style normal
            font-stretch normal
            line-height 1.11
            letter-spacing 1px
            &-text
                padding-bottom 20px

        .scroll-block
            color #fff
            text-align center
            position relative
            bottom 10vh
    .menu
        display flex
        width 100%
        justify-content space-between
        margin-top 20px
        padding 0 118px
        font-family Futura
        font-size 13px
        color #fff
        font-weight bold
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing 0.3px
        /*background-image url('~assets/img/logotip.png')*/
        /*background-position center*/
        /*background-repeat no-repeat*/
        height 164px
        &_icon
            padding 0
            &-container
                text-align center
                width 20%
        &_item
            padding 10px 15px
            white-space nowrap
            position relative

            &:hover
                color #e56b2e
                cursor pointer

            &-text
                position absolute
                margin-top 4px
                text-align center
                opacity 0.5
                font-family LucidaGrande
                font-size 11px
                font-weight bold
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing normal
                color #ffffff

        .menu_left, .menu_right
            width 40%
            display flex
            align-items center
            /*flex-wrap wrap*/
        .menu_left
            justify-content flex-end
        .menu_right
            justify-content flex-start
</style>
