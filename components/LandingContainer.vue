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
        section#instagram
            Instagram
</template>

<script>
    import Header from '~/components/Header.vue'
    import Description from '~/components/Description.vue'
    import Teachers from '~/components/Teachers.vue'
    import Styles from '~/components/Styles.vue'
    import News from '~/components/News.vue'
    import Instagram from '~/components/Instagram.vue'

    export default {
        components: {
            Header,
            Description,
            Teachers,
            Styles,
            News,
            Instagram,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
