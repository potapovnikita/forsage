<template lang="pug">
    button.button(:class="type") {{name}}
</template>

<script>
    export default {
        props: ['name', 'type']
    }
</script>

<style lang="stylus">

    button
        border none
    .button.default
        color #fff
        padding 12px 50px 12px
        border-radius 30px
        background-color #e56b2e
        font-family Futura
        font-size 18px
        font-weight bold
        font-style normal
        font-stretch normal
        line-height normal
        letter-spacing 0.4px
        transition background-color .3s ease, color .3s ease
        outline none

        &:hover
            cursor pointer
            color #e56b2e
            background #fff

</style>
