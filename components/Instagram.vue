<template lang="pug">
    .instagram_container
        .instagram_inner-container
            h2.title Наш инстаграм
            a.instagram_link(href="https://www.instagram.com/forsage_dance_school/" target="_blank")
                InstaLogo
                span Подписаться
            .instagram_photos
                a.photo(v-for="photo in photos" :href="photo.link" target="_blank")
                    .blur
                        .info
                            .likes
                                .info_img
                                span {{photo.likes.count || 0}}
                            .comments
                                .info_img
                                span {{photo.comments.count || 0}}
                    img.photo_img(:src="photo.images.standard_resolution.url", :alt="photo.user.full_name")




</template>

<script>
    import axios from 'axios'
    import InstaLogo from '~/assets/img/social/instagram-logo.svg'

    export default {
        data() {
            return {
                photos: [],
                error: null,
            }
        },
        components: {
            InstaLogo
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
                    console.log(res.data)
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
        padding-right 32px // жосткий костыль из за выравнивания флекс-контейнера =(

    .instagram_link
        display flex
        align-items center
        justify-content center
        text-align center
        margin 15px auto
        color #000
        cursor pointer
        width 170px

        svg
            fill #7F7F7F

        &:hover
            span
                opacity 1
                color orangeMain

            svg
                fill orangeMain

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
            position relative
            box-sizing border-box
            margin 0 28px 28px 0


            &_img
                max-width 300px
                min-width 300px
                min-height 300px
                max-height 300px
            .blur
                position absolute
                top 0
                bottom 0
                left 0
                right 0
                display flex
                justify-content center
                align-items center

                &:hover
                    background-color rgba(0,0,0, 0.3)

                    .info
                        display inline-flex
                .info
                    color whiteMain
                    position absolute
                    display none
                    font-size 16px
                    font-weight 800
                    align-items center

                    .likes
                        display inline-flex
                        margin-right 30px

                        .info_img
                            background-image url('~assets/img/social/instaPics.png')
                            background-position -3px

                    .comments
                        display inline-flex
                        .info_img
                            background-image url('~assets/img/social/instaPics.png')
                            background-position -23px

                    .info_img
                        width 19px
                        height 19px
                        margin-right 5px
                        background-repeat no-repeat






</style>
