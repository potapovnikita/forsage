<template lang="pug">
    .container
        Header
        Description
</template>

<script>
    import Header from '~/components/Header.vue'
    import Description from '~/components/Description.vue'

    export default {
        components: {
            Header,
            Description,
        }
    }
</script>

<style lang="stylus">
    .container
        background-color #f5f4f4
        margin 0 auto
</style>
