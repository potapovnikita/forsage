<template lang="pug">
    .container
        section#header
            Header
        section#description
            Description
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
            Contacts
        section#partners
            Partners

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

    export default {
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
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
