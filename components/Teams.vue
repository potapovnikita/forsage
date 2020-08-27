<template lang="pug">
    .teams_container
        #teams_bg.teams_inner-container
            .teams-top
                h1.title.title-text Наши команды
                    .line
                .teams_list
                    .teams_list-item(
                    v-for="(item, index) in teams",
                    :class="{active: index === activeCrew}",
                    @click="selectCrew(index)") {{item.CrewName}}
            .teams_content
                .teams_text
                    h3.title.teams_description(v-html="crewDescription" v-if="crewDescription")
                    .text_default-white.teams_description(v-for="award in crewAwards" v-if="crewAwards.length")
                        span.icon
                            Cup
                        span(v-html="award")
                .teams_video
                    iframe(:src="videoUrl"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen)
                    <!--div.my-swiper(v-swiper:mySwiper="swiperOption")-->
                        <!--.swiper-wrapper-->
                            <!--.swiper-slide(v-for="video in videoUrls")-->
                                <!---->
                        <!--.swiper-pagination-->
                        <!--.swiper-button-prev(slot="button-prev")-->
                        <!--.swiper-button-next(slot="button-next")-->


</template>

<script>
    import Data from '~/assets/staticData/crews.json'
    import Cup from '~/assets/img/cup.svg'

    export default {
        data() {
            return {
                teams: Data.Crews,
                activeCrew: 0,
                // swiperOption: {
                //     slidesPerView: 1,
                //     spaceBetween: 30,
                //     loop: true,
                //     pagination: {
                //         el: '.swiper-pagination',
                //         clickable: true
                //     },
                //     navigation: {
                //         nextEl: '.swiper-button-next',
                //         prevEl: '.swiper-button-prev'
                //     },
                // }
            }
        },
        components: {
            Cup,
        },
        methods: {
            // выбор стиля
            selectCrew(index) {
                this.activeCrew = index
            },
        },
        computed: {
            videoUrl() {
                return this.teams[this.activeCrew].YouTubeLinks[0]
            },

            crewDescription() {
                return this.teams[this.activeCrew].Description
            },
            crewAwards() {
                return this.teams[this.activeCrew].Awards
            },
            bgUrl() {
                return this.teams[this.activeCrew].backgroundImage
            },
        },
        created() {

        },
        mounted() {
        
        },
    }

</script>

<style lang="stylus">
    /*.my-swiper
        height: 300px;
        width: 100%;

        .swiper-slide
            text-align: center;
            font-size: 38px;
            font-weight: 700;
            background-color: #eee;
            display: flex;
            justify-content: center;
            align-items: center;

        .swiper-pagination
            position inherit */

    .teams_inner-container
        background-color #000
        background-position 50%
        background-image url('~assets/img/backgrounds/teams.png')
        background-repeat no-repeat
        background-size cover
        padding $PaddingContainers
        padding-bottom 80px

        .teams-top
            margin-bottom 25px
            .title-text
                max-width 470px
                padding-top 35px
                padding-bottom 50px
                position relative
                margin 0 auto

                .line
                    width 118px
                    height 5px
                    position absolute
                    background orangeMain
                    top 35px
                    right 0
        .teams_content
            display flex
            flex-direction row
            flex-wrap wrap
            justify-content center

            .teams_text
                width 50%
                min-width 300px
                padding 0 10px 10px 10px

                .teams_description
                    margin-bottom 15px
                    color whiteMain
                    display inline-flex
                    width 100%
                    span
                        display flex
                        align-items center
                    .icon
                        display flex
                        align-items flex-start
                        margin-right 10px
                        svg
                            transform scale(0.6)
    .teams_list
        display flex
        justify-content center

        &-item
            color whiteMain
            cursor pointer
            font-family $FuturaFont
            font-size $FontSizeMenu
            font-weight bold
            font-style normal
            font-stretch normal
            line-height normal
            letter-spacing 0.3px
            opacity 0.5
            margin 0 30px 15px 0
            white-space nowrap
            border-bottom 2px solid
            border-color rgba(0, 0, 0, 0)


            &:hover
                opacity 1

            &:last-child
                margin-right 0

            &:first-child
                margin-left 0
        .active
            border-bottom 2px solid orangeMain
            opacity 1

    .teams_video
        position relative
        width 50%
        min-width 300px
        iframe
            min-height 500px
            width 100%

    @media only screen and (max-width 1500px)
        .teams_inner-container
            background-image url('~assets/img/backgrounds/teams.png')
        .teams_video
            iframe
                min-height 400px
                width 100%

    @media only screen and (max-width 1200px)
        .teams_video
            iframe
                min-height 300px
                width 100%

    @media only screen and (max-width 1000px)
        .teams_inner-container
            background-image url('~assets/img/backgrounds/teams.png')

        .teams_video
            iframe
                min-height 220px
                width 100%

        .teams_list
            margin 0 auto
            max-width 400px
            flex-wrap wrap

    @media only screen and (max-width 767px)
        .teams_inner-container
            width $ContainersWidthMobile
            padding $PaddingContainersMobile

            .teams_content
                flex-direction column
                align-items center

                .teams_text,
                .teams_video
                    width 100%

                .teams_video
                    max-width 500px

                    iframe
                        min-height 280px
                        width 100%


    @media only screen and (max-width 450px)
        .teams_inner-container
            background-image url('~assets/img/backgrounds/teams-min.png')
            .teams-top
                .title-text
                    padding-top 0

                    .line
                        top 0
            .teams_content
                .teams_video
                    iframe
                        min-height 200px
        .teams_list-item
            margin-right 15px


</style>
