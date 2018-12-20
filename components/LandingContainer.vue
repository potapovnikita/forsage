<template lang="pug">
    .container
        Header
        Description
        #teachers
            Teachers
        #styles
            Styles
</template>

<script>
    import Header from '~/components/Header.vue'
    import Description from '~/components/Description.vue'
    import Teachers from '~/components/Teachers.vue'
    import Styles from '~/components/Styles.vue'

    export default {
        components: {
            Header,
            Description,
            Teachers,
            Styles,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
