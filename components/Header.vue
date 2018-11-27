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
                .menu_item НОВГОРОДЦЕВОЙ, 13Б
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
        },
        mounted() {
            // for parallax effect
            window.addEventListener('scroll', () => {
                const scrollPosition = window.pageYOffset
                let bgParallax = document.getElementsByClassName('header_container')[0]
                const limit = bgParallax.offsetTop + bgParallax.offsetHeight

                if (scrollPosition > bgParallax.offsetTop && scrollPosition <= limit){
                    bgParallax.style.backgroundPositionY = (50 - 100 * scrollPosition/limit) + '%'
                } else {
                    bgParallax.style.backgroundPositionY = '50%'
                }
            });
        }
    }

</script>

<style lang="stylus">
    .header_container
        display flex
        justify-content center
        flex-direction column
        background-image url('~assets/img/header-background.png')
        background-color #000
        background-position 50%
        background-repeat no-repeat
        background-size cover
        height 100vh

        .title
            font-size 53px
            color whiteMain
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
            color whiteMain
            text-align center
            position relative
            top 20vh
    .menu
        position absolute
        top 0
        display flex
        width 100%
        justify-content space-between
        margin-top 20px
        padding 0 118px
        font-family Futura
        font-size 13px
        color whiteMain
        font-weight bold
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing 0.3px
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
                color orangeMain
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
                color whiteMain

        .menu_left, .menu_right
            width 40%
            display flex
            align-items center
        .menu_left
            justify-content flex-end
        .menu_right
            justify-content flex-start
</style>
