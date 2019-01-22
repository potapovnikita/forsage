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
            Schedule
        section#instagram
            Instagram
        section#feedback
            Feedback
        section#contacts
            Contacts(@open="openPopup")
        section#partners
            Partners
        section#popup
            Popup(:isOpenPopup="isOpenPopup", @close="closePopup")

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
    import Feedback from '~/components/Feedback.vue'
    import Popup from '~/components/Popup.vue'

    export default {
        data() {
          return {
              isOpenPopup: false,
          }
        },
        methods: {
            closePopup() {
                this.isOpenPopup = false
            },
            openPopup() {
                this.isOpenPopup = true
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
            Feedback,
            Popup,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
