<template lang="pug">
    .contacts_container
        .contacts_sticker
            h2.title.title-contacts Наши контакты
            .caption.text_default Танцуйте вместе с нами, по всем вопросам обращайтесь:
            .contacts-icons
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
            Button(name="Записаться онлайн" type="small" :clickAction="() => {$emit('open', 'feedback')}")

        .contacts_sticker_mobile
            h2.title.title-contacts Наши контакты
            .caption.text_default Танцуйте вместе с нами, по всем вопросам обращайтесь:
            .contacts-icons
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
            Button(name="Записаться онлайн" type="small" :clickAction="() => {$emit('open', 'feedback')}")

        no-ssr
            .map-container
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
    import Button from '~/components/Button.vue'

    export default {
        data() {
            return {
                contacts: Data.Contacts,
                madData: {
                    coords: [56.833184077060075,60.668699468200664], // координаты центра карты (в завистимости от размера экрана могут быть другими. См. mounted. )
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
            Button,
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
            const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            if (width < 767) {
                this.madData.coords = [56.833407567878105,60.67578049999999]
            }
        },
    }

</script>

<style lang="stylus">
    .contacts_container
        position relative
        .map-container
            height 600px

        .contacts_sticker_mobile
            display none
            margin 0 auto
            background whiteMain
            padding $PaddingContainers
            width $ContainersWidth
            text-align center

            h2.title-contacts
                margin-bottom 15px

            .caption
                text-align center
                margin-bottom 15px
            .phone
                font-size $FontSize3
                letter-spacing 0.4px
                margin-bottom 7px

            .time
                text-align center
                margin-bottom 25px


        .contacts_sticker
            padding 40px 60px
            position absolute
            width 380px
            height 430px
            background whiteMain
            z-index 2
            bottom 0
            left 10%
            text-align center

            h2.title-contacts
                margin-bottom 40px

            .caption
                text-align center
                margin-bottom 30px

            .phone
                font-size $FontSize3
                letter-spacing 0.4px
                margin-bottom 7px

            .time
                text-align center
                margin-bottom 25px

            button
                margin 0 auto

        .contacts-icons
            display flex
            justify-content center
            margin-bottom 30px

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

    @media only screen and (max-width 767px)
        .contacts_container
            height auto
            .map-container
                height 400px
            .contacts_sticker
                display none
            .contacts_sticker_mobile
                padding $PaddingContainersMobile
                width $ContainersWidthMobile
                display block

</style>
