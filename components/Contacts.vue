<template lang="pug">
    .contacts_container
        .contacts_sticker
            h2.title.title-contacts Наши контакты
            .caption.text_default Танцуйте вместе с нами, по всем вопросам обращайтесь:
            .icons
                .item
                    vkLogo
                .item
                    youtubeLogo
                .item
                    instaLogo

            h2.title.phone +7 (903) 081-23-53
            .time пн-вс: 11:00 — 22:00


        no-ssr
            yandex-map(
                :coords="madData.coords"
                :zoom="madData.zoom"
                :style="madData.style"
                :placemarks="placemarks"
                map-link="https://api-maps.yandex.ru/2.1/?apikey=c4f479c4-51d8-4415-8f4c-71c9ef78f1aa&lang=ru_RU"
            )
                ymap-marker(
                    marker-id="1"
                    marker-type="placemark"
                    :coords="placemarks[0].coords"
                    hint-content="Hint content 1")


</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import vkLogo from '~/assets/img/social/vk.svg'
    import youtubeLogo from '~/assets/img/social/youtube.svg'
    import instaLogo from '~/assets/img/social/instagram.svg'

    export default {
        data() {
            return {
                madData: {
                    coords: [56.83352143328822,60.67580989840195],
                    zoom: 16,
                    style: "width: 100%; height: 100%;"
                },
                placemarks: [
                    {
                        coords: [56.83352143328822,60.67580989840195],
                        properties: {}, // define properties here
                        options: {}, // define options here
                        clusterName: "1",
                        balloonTemplate: '<div>"Your custom template"</div>',
                        callbacks: { click: function() {
                            console.log('хзхз')}
                        }
                    }
                ]
            }
        },
        components: {
            yandexMap,
            ymapMarker,
            vkLogo,
            youtubeLogo,
            instaLogo,
        },
        methods: {
        },
        computed: {
        },
        created() {

        },
        mounted() {
        },
    }

</script>

<style lang="stylus">
    .contacts_container
        display flex
        justify-content center
        height 600px
        position relative

        .contacts_sticker
            padding 65px 60px
            position absolute
            width 380px
            height 430px
            background whiteMain
            z-index 2
            bottom 0
            left 10%

            h2.title-contacts
                margin-bottom 40px

            .caption
                text-align center
                margin-bottom 30px

            .icons
                display flex
                justify-content center
                margin-bottom 50px

                .item
                    margin-right 20px

                    &:last-child
                        margin-right 0

            .phone
                font-size 18px
                letter-spacing 0.4px
                margin-bottom 7px

            .time
                text-align center


</style>
