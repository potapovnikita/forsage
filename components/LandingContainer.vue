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

</template>

<script>
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
                document.getElementsByTagName('body')[0].style.overflow = 'inherit'
            },
            openPopup(component = '') {
                this.component = component
                this.isOpenPopup = true
                document.getElementsByTagName('body')[0].style.overflow = 'hidden'
            }
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
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
