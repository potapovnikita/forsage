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
</template>

<script>
    import Header from '~/components/Header.vue'
    import Description from '~/components/Description.vue'
    import Teachers from '~/components/Teachers.vue'
    import Styles from '~/components/Styles.vue'
    import News from '~/components/News.vue'

    export default {
        components: {
            Header,
            Description,
            Teachers,
            Styles,
            News,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
