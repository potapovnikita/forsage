<template lang="pug">
    section.description_container
        .description_inner-container
            .photo
                img(src="~/assets/img/photo-winners.png")
            .description
                .description_title Мы - это
                .description_text(v-html='description')
                .description_advantages
                    .item(v-for='item in advantages')
                        .point
                        .text {{item}}
                .descriprion_button
                    Button(name="Посмотреть цены" type="small")








</template>

<script>
    import Data from '~/assets/staticData/title.json'
    import Button from '~/components/Button.vue'


    export default {
        data() {
            return {
                description: Data.Text,
            }
        },
        components: {
            Button
        },
        computed: {
            advantages: () => Data.Advantages.split('|')
        },
        created() {
            console.log(Data)
        }
    }

</script>

<style lang="stylus">
    .description_container
        display flex
        justify-content center

    .description_inner-container
        display flex
        width 80%
        background whiteMain
        padding 60px

        .description
            padding 27px 0 0 73px

            &_photo
                width 400px
                height 600px

            &_title
                margin-bottom 30px
                font-size 28px
                font-family Futura
                font-weight bold
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing 0.7px

            &_text
                margin-bottom 40px
                font-family: ProximaNova
                font-size: 16px
                font-weight normal
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing 0.4px
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
                        margin-top 5px

                    .text
                        margin-bottom 15px
                        font-family ProximaNova
                        font-size 16px
                        font-weight normal
                        font-style normal
                        font-stretch normal
                        line-height 1
                        letter-spacing 0.4px






</style>
