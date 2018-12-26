<template lang="pug">
    .instagram_container
        .instagram_inner-container
            h2.title Наш инстаграм
            a.instagram_link(href="https://www.instagram.com/forsage_dance_school/" target="_blank")
                img(src="~/assets/img/social/instagram-logo.svg")
                span Подписаться
            .instagram_photos
                .photo(v-for="photo in photos")
                    img(:src="photo.images.standard_resolution.url", :alt="photo.user.full_name")




</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                photos: [],
                error: null,
            }
        },
        components: {

        },
        methods: {

        },
        computed: {

        },
        // de1341bf598a4f26ad8401379fce5535
        async created() {
            const TOKEN = '5615810087.b6a16de.79a0aed7cf134b6eb7fc0fa6e6014cfa' // токен для доступа к api
            const USER_ID = 'self' // id пользователя

            await axios.get(`https://api.instagram.com/v1/users/${USER_ID}/media/recent/?access_token=${TOKEN}`)
                .then((res) => {
                    // оставляем только последние 6 фотографий профиля
                    this.photos = res.data.data.splice(0, 6)
                })
                .catch((err) => {
                    this.error = err
                    console.log("Возникла ощибка", err)

                })
        },
        mounted() {

        },
    }

</script>

<style lang="stylus">
    .instagram_container
        display flex
        justify-content center

    .instagram_inner-container
        width ContainersWidth
        background whiteInnerBackground
        padding 60px

    .instagram_link
        display flex
        align-items center
        justify-content center
        text-align center
        margin 15px auto
        color #000
        cursor pointer
        width 170px

        &:hover
            span
                opacity 1
                color orangeMain

        span
            margin-left 5px
            opacity 0.5
            font-family $LucidaGrandeFont
            font-size 11px
            font-weight bold
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing normal

    .instagram_photos
        display flex
        justify-content center
        flex-wrap wrap
        max-width 1000px
        margin 0 auto
        .photo
            height 300px
            box-sizing border-box
            img
                box-sizing border-box
                max-width 300px
                min-width 300px
                min-height 300px
                max-height 300px




</style>
