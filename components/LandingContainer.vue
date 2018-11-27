<template lang="pug">
    .container
        Header
        Description
        #teachers
            Teachers
</template>

<script>
    import Header from '~/components/Header.vue'
    import Description from '~/components/Description.vue'
    import Teachers from '~/components/Teachers.vue'

    export default {
        components: {
            Header,
            Description,
            Teachers,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color grayBackground
        margin 0 auto
</style>
