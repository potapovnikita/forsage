<template lang="pug">
    .contacts_container
        .contacts_sticker
            h2.title.title-contacts Наши контакты
            .caption.text_default Танцуйте вместе с нами, по всем вопросам обращайтесь:
            .icons
                .item.vk
                    a(:href="contacts.Vk", target="_blank")
                        vkLogo
                .item.youtube
                    a(:href="contacts.YouTube", target="_blank")
                        youtubeLogo
                .item.insta
                    a(:href="contacts.Instagram", target="_blank")
                        instaLogo

            h2.title.phone {{contacts.Phone}}
            .time {{contacts.WorkTime}}


        no-ssr
            yandex-map(
                :coords="madData.coords"
                :zoom="madData.zoom"
                :style="madData.style"
                :map-link="madData.apiLink"
            )
                ymap-marker(
                    marker-id="1"
                    marker-type="placemark"
                    :coords="placemarks[0].coords"
                    :hint-content="contacts.Address.toUpperCase()"
                    :icon="{color: 'orange', glyph: 'star'}"
                    :balloon="{body: contacts.Address.toUpperCase()}")

</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import vkLogo from '~/assets/img/social/vk.svg'
    import youtubeLogo from '~/assets/img/social/youtube.svg'
    import instaLogo from '~/assets/img/social/instagram.svg'

    import Data from '~/assets/staticData/contacts.json'

    export default {
        data() {
            return {
                contacts: Data.Contacts,
                madData: {
                    coords: [56.833184077060075,60.668699468200664], // координаты центра карты
                    zoom: 16,
                    style: "width: 100%; height: 100%;",
                    apiLink: 'https://api-maps.yandex.ru/2.1/?apikey=c4f479c4-51d8-4415-8f4c-71c9ef78f1aa&lang=ru_RU',
                },
                placemarks: [
                    {
                        coords: [56.83345461840599,60.675716126983616], // координаты метки
                        clusterName: "1"
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
                    cursor pointer

                    a
                        display block

                    &:last-child
                        margin-right 0
                    &.vk > a > svg
                        &:hover
                            fill #4680C2
                    &.youtube > a > svg
                        &:hover
                            fill #E62117
                    &.insta > a > svg
                        &:hover
                            fill #DD2A7B

            .phone
                font-size 18px
                letter-spacing 0.4px
                margin-bottom 7px

            .time
                text-align center

    @media only screen and (max-width 767px)
        .contacts_sticker
            display none
</style>
