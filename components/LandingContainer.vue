<template lang="pug">
    .container
        section#header
            Header(@open="openPricesPopup")
        section#description
            Description(@open="openPricesPopup")
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
            Contacts(@open="openPricesPopup")
        section#partners
            Partners
        section#prices
            Prices(:isOpenPopup="isOpenPricesPopup", @close="closePricesPopup")

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
    import Prices from '~/components/Prices.vue'

    export default {
        data() {
          return {
              isOpenPricesPopup: false,
          }
        },
        methods: {
            closePricesPopup() {
                this.isOpenPricesPopup = false
            },
            openPricesPopup() {
                this.isOpenPricesPopup = true
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
            Prices,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
