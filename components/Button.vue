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
        color whiteMain
        padding 12px 50px 12px
        border-radius 30px
        background-color orangeMain
        font-family $FuturaFont
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
            color orangeMain
            background whiteMain

    .button.small
        color whiteMain
        border 1px solid whiteMain
        padding 9px 46px 10px
        border-radius 30px
        background-color orangeMain
        font-family $ProximaNovaFont
        font-size 18px
        /*font-weight bold*/
        letter-spacing 0.6px
        transition background-color .3s ease, color .3s ease
        outline none

        &:hover
            cursor pointer
            color orangeMain
            background whiteMain
            border 1px solid orangeMain

</style>
