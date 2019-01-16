<template lang="pug">
    .header_container
        label
            input(type="checkbox")

            span.hamburger_menu
                span.hamburger
            .hamburger_menu-items_container
                .menu_item(@click="scrollToSection('teachers')") ПРЕПОДАВАТЕЛИ
                .menu_item(@click="scrollToSection('styles')") НАПРАВЛЕНИЯ
                .menu_item(@click="scrollToSection('schedule')") РАСПИСАНИЕ
                .menu_item(@click="scrollToSection('news')") НОВОСТИ
                .menu_item ЦЕНЫ
                .menu_item(@click="scrollToSection('contacts')") КОНТАКТЫ
                .menu_item(@click="scrollToSection('contacts')")
                    Location
                    | {{contacts.Address.toUpperCase()}}
                    .menu_item-text Посмотреть на карте
        .menu
            .menu_left
                .menu_item(@click="scrollToSection('teachers')") ПРЕПОДАВАТЕЛИ
                .menu_item(@click="scrollToSection('styles')") НАПРАВЛЕНИЯ
                .menu_item(@click="scrollToSection('schedule')") РАСПИСАНИЕ
            .menu_icon-container
                img.menu_icon(src="~/assets/img/logotip.png")
            .menu_right
                .menu_item(@click="scrollToSection('news')") НОВОСТИ
                .menu_item ЦЕНЫ
                .menu_item(@click="scrollToSection('contacts')") КОНТАКТЫ
                .menu_item.address(@click="scrollToSection('contacts')")
                    Location
                    | {{contacts.Address.toUpperCase()}}
                    .menu_item-text Посмотреть на карте

        .title-container
            h1.title.title-text
                | Начни&thinsp;танцевать
                br
                | прямо&thinsp;сейчас
            Button(name="ОСТАВИТЬ ЗАЯВКУ" type="default")
        .scroll-block
            span(@click="scrollToSection('description')")
                Arrow

</template>

<script>
    import zenscroll from 'zenscroll'
    import Button from '~/components/Button.vue'
    import Location from '~/assets/img/location.svg'
    import Arrow from '~/assets/img/arrow.svg'

    import Data from '~/assets/staticData/contacts.json'

    export default {
        data() {
            return {
                contacts: Data.Contacts,
            }
        },
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

        .title-container
            text-align center

        h1.title-text
            padding 0 30px 50px

        .scroll-block
            color whiteMain
            text-align center
            position relative
            top 20vh

            span
                height 100%
            svg
                fill whiteMain
                opacity 0.5
                cursor pointer

                &:hover
                    opacity 1
    .menu
        position absolute
        top 0
        display flex
        width 100%
        justify-content space-between
        margin-top 20px
        padding 0 118px
        font-family $FuturaFont
        font-size $FontSizeMenu
        color whiteMain
        font-weight bold
        letter-spacing 0.3px
        height 164px
        &_icon
            padding 0
            &-container
                text-align center
                z-index 101
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


    // hamburger menu
    label
        display none

    label .hamburger_menu
        position absolute
        left -100px
        top -100px
        z-index 100
        width 200px
        height 200px
        border-radius 50% 50% 50% 50%
        transition .5s ease-in-out
        box-shadow 0 0 0 0 #000, 0 0 0 0 #000
        cursor pointer

    label .hamburger
        position absolute
        top 135px
        right 50px
        width 35px
        height 2px
        background whiteMain
        display block
        transform-origin center
        transition .5s ease-in-out

    label .hamburger:after, label .hamburger:before
        transition .5s ease-in-out
        content ""
        position absolute
        display block
        width 100%
        height 100%
        background whiteMain

    label .hamburger:before
        top -10px

    label .hamburger:after
        bottom -10px

    label input
        display none

    label input:checked + .hamburger_menu
        box-shadow 0 0 0 100vw #000, 0 0 0 100vh #000
        border-radius 0
        background #000

    label input:checked + .hamburger_menu .hamburger
        transform rotate(45deg)
        background orangeMain

    label input:checked + .hamburger_menu .hamburger:after
        transform rotate(90deg)
        bottom: 0
        background orangeMain

    label input:checked + .hamburger_menu .hamburger:before
        transform rotate(90deg)
        top: 0
        background orangeMain


    label input:checked + .hamburger_menu + .hamburger_menu-items_container
        opacity 1
        visibility visible
        transition visibility .1s ease-in, opacity .2s
        transition-delay .2s

    .hamburger_menu-items_container
        position absolute
        opacity 0
        width 100%
        top 200px
        font-family $FuturaFont
        font-size $FontSizeMenuMobile
        color whiteMain
        font-weight bold
        letter-spacing 0.3px
        visibility hidden

        .menu_item
            text-align center
            color whiteMain
            z-index 101

            &-text
                position relative
                right 8px

            &:hover
                color orangeMain
                cursor pointer

            svg
                position relative
                top 5px
                margin-right 12px



    @media only screen and (max-width 1200px)
        .menu
            .menu_left, .menu_right
                justify-content center
                flex-direction column

    @media only screen and (max-width 767px)
        label
            display block

        .header_container
            h1.title-text
                padding-top 80px

        .menu
            justify-content space-around

            .menu_left, .menu_right
                display none

        .title-container
            button
                position relative
                top 100px

    @media only screen and (max-height 500px)
        .header_container
            h1.title-text
                padding-top 210px

            .scroll-block
                display none

        .title-container
            button
                position relative
                top -30px


</style>
