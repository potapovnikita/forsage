<template lang="pug">
    .description_container
        .description_inner-container
            .description_photo
                img(src="~assets/img/photo-winners.png" alt="Преподаватели - чемпионы Росии и Мира")
                h3.title.photo_text
                    .photo_icon
                        Cup
                    | ПРЕПОДАВАТЕЛИ —
                    br
                    | ЧЕМПИОНЫ <span>РОССИИ</span> И <span>МИРА</span>
            .description
                h2.title.description_title Современная школа танцев в Екатеринбурге
                <!--.description_text.text_default(v-html='description')-->
                .description_advantages
                    .item(v-for='item, index in advantages')
                        .point
                        .text.text_default {{item}}
                .description_button
                    Button(name="Посмотреть цены" type="small" :clickAction="() => {$emit('open', 'prices')}")



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
        props: ['open'],
        components: {
            Button,
            Cup,
        },
        methods: {
            visible: (el) => {
                const targetPosition = {
                        top: window.pageYOffset + el.getBoundingClientRect().top,
                        left: window.pageXOffset + el.getBoundingClientRect().left,
                        right: window.pageXOffset + el.getBoundingClientRect().right,
                        bottom: window.pageYOffset + el.getBoundingClientRect().bottom
                    }

                const windowPosition = {
                        top: window.pageYOffset,
                        left: window.pageXOffset,
                        right: window.pageXOffset + document.documentElement.clientWidth,
                        bottom: window.pageYOffset + document.documentElement.clientHeight
                    };

                if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
                    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
                    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
                    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
                    el.style.left = '0'
                    el.style.opacity = '1'
                } else {
                    el.style.left = '20%'
                    el.style.opacity = '0'
                };
            }
        },
        computed: {
            advantages: () => Data.Advantages.split('|')
        },
        mounted() {
            const el = document.getElementsByClassName('description_advantages')[0]
            // Запускаем функцию при прокрутке страницы
            document.addEventListener('scroll', () => {
                this.visible(el);
            });

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
        justify-content space-between
        width $ContainersWidth
        background whiteInnerBackground
        padding $PaddingContainers

        .description_photo
            position relative
            display flex
            justify-content center
            margin 0 30px 0 0
            min-width 400px
            min-height 600px
            background-image $BackgroundPreloader
            background-size cover

            img
                max-width 100%
                max-height 100%

            .photo_icon
                position absolute
                bottom 59px

            .photo_text
                position absolute
                bottom 40px
                left 45px
                color whiteMain

                span
                    color orangeMain

        .description
            padding 30px 0 0 0

            &_title
                text-align center
                max-width 400px
                margin 0 auto 30px

            &_text
                margin-bottom 40px
            &_advantages
                margin-bottom 50px
                position relative
                left 25%
                transition all .4s ease-in-out
                opacity 0
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

    @media only screen and (min-width 1300px)
        .description_inner-container
            justify-content center

    @media only screen and (max-width 1200px)
        .description_inner-container
            .description_title
                text-align center

    @media only screen and (max-width 1265px)
        .description_inner-container
            padding 30px
            justify-content center

            .description_photo
                margin-left 30px

            .description
                .description_button
                    text-align center

    @media only screen and (max-width 767px)
        .description_inner-container
            width $ContainersWidthMobile
            padding $PaddingContainersMobile

    @media only screen and (max-width 450px)
        .description_inner-container
            padding 0

            .description_photo
                margin 0
                min-width 100%
                width 100%
                img
                    width 100%
                .photo_text
                    font-size $FontSize16

            .description
                padding 30px






</style>
