<template lang="pug">
    .header_container
        .menu
            .menu_left
                .menu_item(@click="scrollToSection('teachers')") ПРЕПОДАВАТЕЛИ
                .menu_item(@click="scrollToSection('styles')") НАПРАВЛЕНИЯ
                .menu_item РАСПИСАНИЕ
            .menu_icon-container
                img.menu_icon(src="~/assets/img/logotip.png")
            .menu_right
                .menu_item(@click="scrollToSection('news')") НОВОСТИ
                .menu_item ЦЕНЫ
                .menu_item(@click="scrollToSection('contacts')") КОНТАКТЫ
                .menu_item.address(@click="scrollToSection('contacts')")
                    Location
                    |НОВГОРОДЦЕВОЙ, 13Б
                    .menu_item-text Посмотреть на карте

        .title
            h1.title-text
                | Начни танцевать
                br
                | прямо сейчас
            Button(name="ОСТАВИТЬ ЗАЯВКУ" type="default")
        .scroll-block
            Arrow

</template>

<script>
    import zenscroll from 'zenscroll'
    import Button from '~/components/Button.vue'
    import Location from '~/assets/img/location.svg'
    import Arrow from '~/assets/img/arrow.svg'

    export default {
        components: {
            Button,
            Location,
            Arrow
        },
        methods: {
            scrollToSection(elem = '') {
                const scrollElem = document.getElementById(elem)
                zenscroll.to(scrollElem)
            }
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
            text-align center

        h1.title-text
            font-size 53px
            color whiteMain
            text-align center
            font-family $FuturaFont
            font-weight bold
            font-style normal
            font-stretch normal
            line-height 1.11
            letter-spacing 1px
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
        font-family $FuturaFont
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
            &.address
                padding-left 25px
                svg
                    position absolute
                    left 0
                    top 8px

            &:hover
                color orangeMain
                cursor pointer

            &-text
                position absolute
                margin-top 4px
                text-align center
                opacity 0.5
                font-family $LucidaGrandeFont
                font-size 11px
                font-weight bold
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
