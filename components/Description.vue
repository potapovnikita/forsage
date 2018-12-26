<template lang="pug">
    section.description_container
        .description_inner-container
            .description_photo
                img(src="~assets/img/photo-winners.png" alt="Преподаватели - чемпионы Росии и Мира")
                .photo_text
                    .photo_icon
                        Cup

                    | ПРЕПОДАВАТЕЛИ —
                    br
                    | ЧЕМПИОНЫ <span>РОССИИ</span> И <span>МИРА</span>
            .description
                .description_title Мы - это
                .description_text.text_default(v-html='description')
                .description_advantages
                    .item(v-for='item, index in advantages')
                        .point
                        .text.text_default {{item}}
                .descriprion_button
                    Button(name="Посмотреть цены" type="small")



</template>

<script>
    import Data from '~/assets/staticData/title.json'
    import Button from '~/components/Button.vue'
    import Cup from '~/assets/img/cup.svg'


    export default {
        data() {
            return {
                description: Data.Text,
            }
        },
        components: {
            Button,
            Cup,
        },
        computed: {
            advantages: () => Data.Advantages.split('|')
        },
        created() {},
    }

</script>

<style lang="stylus">
    .description_container
        display flex
        justify-content center

    .description_inner-container
        display flex
        flex-wrap wrap
        justify-content center
        width ContainersWidth
        background whiteInnerBackground
        padding 60px

        .description_photo
            position relative
            display flex
            justify-content center
            padding 0 30px
            width 400px
            min-width 50%

            img
                max-width 100%
                max-height 100%

            .photo_icon
                position absolute
                bottom 66px

            .photo_text
                position absolute
                bottom 40px
                font-family $FuturaFont
                font-size 18px
                font-weight bold
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing 0.4px
                color whiteMain

                span
                    color orangeMain

        .description
            padding 27px 30px 0 30px

            &_title
                margin-bottom 30px
                font-size 28px
                font-family $FuturaFont
                font-weight bold
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing 0.7px

            &_text
                margin-bottom 40px
            &_advantages
                margin-bottom 50px
                .item
                    display flex
                    .point
                        background orangeMain
                        min-width 10px
                        max-height 10px
                        border-radius 50px
                        margin-right 10px
                        margin-top 3px

                    .text
                        margin-bottom 15px






</style>
