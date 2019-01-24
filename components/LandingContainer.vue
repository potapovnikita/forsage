<template lang="pug">
    .container
        section#header
            Header(@open="openPopup")
        section#description
            Description(@open="openPopup")
        section#teachers
            Teachers
        section#styles
            Styles
        section#news
            News
        section#schedule
            Schedule(@open="openPopup")
        section#instagram
            Instagram
        section#contacts
            Contacts(@open="openPopup")
        section#partners
            Partners
        section#popup
            Popup(:isOpenPopup="isOpenPopup", @close="closePopup", :component="component")
        .button_top(@click="scrollToHead()")
            Top
            <!--span Наверх-->


</template>

<script>
    import zenscroll from 'zenscroll'
    import Header from '~/components/Header.vue'
    import Description from '~/components/Description.vue'
    import Teachers from '~/components/Teachers.vue'
    import Styles from '~/components/Styles.vue'
    import News from '~/components/News.vue'
    import Instagram from '~/components/Instagram.vue'
    import Partners from '~/components/Partners.vue'
    import Contacts from '~/components/Contacts.vue'
    import Schedule from '~/components/Schedule.vue'
    import Popup from '~/components/Popup.vue'
    import Top from '~/assets/img/arrow.svg'

    export default {
        data() {
          return {
              isOpenPopup: false,
              component: '',
          }
        },
        methods: {
            closePopup() {
                this.isOpenPopup = false
                const elem = document.getElementsByTagName('body')[0].style
                elem.overflow = 'inherit'
                elem.position = 'inherit'
            },
            openPopup(component = '') {
                this.component = component
                this.isOpenPopup = true
                const elem = document.getElementsByTagName('body')[0].style
                elem.overflow = 'hidden'
                elem.position = 'fixed'

            },
            scrollToHead() {
                zenscroll.to(document.getElementById('header'))
            },
        },
        components: {
            Header,
            Description,
            Teachers,
            Styles,
            News,
            Instagram,
            Partners,
            Contacts,
            Schedule,
            Popup,
            Top,
        },
        mounted() {
            const headerHeight = document.getElementsByClassName('header_container')[0].offsetHeight
            const topButton = document.getElementsByClassName('button_top')[0]
            window.addEventListener('scroll', () => {
                if (window.scrollY > headerHeight) {
                    topButton.style.display = 'flex'
                } else {
                    topButton.style.display = 'none'
                }
            });
        },
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
        position relative
    .button_top
        position fixed
        bottom 30px
        right 20px
        width 45px
        height 45px
        border-radius 30px
        display none
        justify-content center
        align-items center
        cursor pointer
        &:hover
            background orangeMain
            svg
                stroke-width 10px
                fill whiteMain
        svg
            transform rotate(180deg) scale(.8)
            fill orangeMain

</style>
