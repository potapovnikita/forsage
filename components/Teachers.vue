<template lang="pug">
    .teachers_container
        .teachers_inner-container
            .teachers_photo(v-if="selectedTeacher.ImagePath" :style="{backgroundImage: getBgImg(selectedTeacher.ImagePath)}")
            .teachers_list
                h2.title.title-teachers Преподаватели
                .teachers_slider
                    #photos.photos
                        .photo.photo-click(
                            v-for="(teacher, index) in teachers",
                            :key="teacher.name",
                            @click="onTeacherClick(teacher, index)",
                            :class="{'photo_active': selectedTeacher === teacher}"
                            :style="{backgroundImage: getBgImg(selectedTeacher.ImagePath)}")
                        #active
                    .teacher_description
                        .name
                            span(v-html="selectedTeacher.Name")
                            .social
                                a.social-link(:href="selectedTeacher.Instagram", target="_blank")
                                    InstaLogo
                                a.social-link(:href="selectedTeacher.Vk", target="_blank")
                                    VkLogo
                        .style(v-html="selectedTeacher.Styles")
                        .description.text_default(v-html="selectedTeacher.Description")

</template>

<script>
    import Data from '~/assets/staticData/teachers.json'
    import InstaLogo from '~/assets/img/social/instagram-logo.svg'
    import VkLogo from '~/assets/img/social/vk-logo.svg'

    export default {
        data() {
            return {
                teachers: Data.Teachers,
                selectedTeacher: Data.Teachers[0],
                selectedTeacherIndex: 0,
                previousOffset: 0,
                rowVol: 0
            }
        },
        components: {
            InstaLogo,
            VkLogo
        },
        methods: {
            getBgImg(url) {
                // ~/assets/img/teachers/image-vanya@2x.png
                const imageUrl = require('~/assets/' + `${url}`)
                return url ? `url(${imageUrl})` : ''
            },
            onTeacherClick(teacher, index = 0) {
                this.selectedTeacher = teacher
                this.selectedTeacherIndex = index
                const offsetLeft = Array.from(document.getElementsByClassName('photo'))[index].offsetLeft
                // test
                const offset = (Array.from(document.getElementsByClassName('photo'))[index].clientWidth + 12)*2;

                const offsetTop = Array.from(document.getElementsByClassName('photo'))[index].offsetTop
                document.getElementById('active').style.display = 'block' // костыль
                let activeSlider = document.getElementById('active').style

                // Если сдвиг слайдера по вертикали, то скрываем его
                if (this.previousOffset !== offsetTop) {
                    activeSlider.opacity = '0'
                    this.previousOffset = offsetTop
                }

                // высота фото и слайдера (могут отличаться в зависимости от разрешения экрана)
                const heightPhoto = Array.from(document.getElementsByClassName('photo'))[index].clientHeight
                const heightSlider = document.getElementById('active').clientHeight
                const indexRow = this.rowVol - Math.ceil((index + 1) / 4)
                activeSlider.transform = `translate(${offsetLeft - offset}px, ${(-(heightPhoto + heightSlider) * indexRow) + heightPhoto}px)`
                setTimeout(() => {
                    activeSlider.opacity = '1'
                }, 300)
            }
        },
        created() {

        },
        mounted() {
            let elems = Array.from(document.getElementsByClassName('photo-click'));

            elems.forEach((item, index) => {
                if((index + 1) % 4 === 0) item.style.marginRight = '0' // каждый 4 элемент без маргина справа
                // тест
                item.style.marginBottom = '15px'
            })

            const fullRow = (elems.length % 4) * 4 // количество преподов в полном ряду
            const photosMarginRight = elems.slice(0, fullRow)

            photosMarginRight.forEach((item) => {
                item.style.marginBottom = '15px'
            })

            window.addEventListener('resize', () => {
                document.getElementById('active').style.display = 'none'
                this.onTeacherClick(this.selectedTeacher, this.selectedTeacherIndex)
            });

            this.rowVol = Math.ceil(elems.length / 4)
            this.onTeacherClick(this.teachers[0])

            this.getBgImg(this.selectedTeacher.ImagePath)
        },
    }

</script>

<style lang="stylus">
    .teachers_container
        display flex
        justify-content center
    .teachers_inner-container
        display flex
        flex-wrap wrap
        width $ContainersWidth
        background-color whiteInnerBackground
        padding $PaddingContainers
        padding-bottom 0
        padding-top 0

    .teachers
        &_photo
            min-width 50%
            background-repeat no-repeat
            background-size contain
            background-position bottom
        &_list
            padding 27px 30px 30px 30px
            width 50%
            /*padding-right 130px*/
            .title-teachers
                margin-bottom 42px
                text-align left

        &_slider
            max-width 436px
            min-width 436px

            .photos
                display flex
                flex-wrap wrap
                flex-direction row
                /*justify-content space-between*/
                position relative
                overflow scroll
                max-height 230px

                .photo
                    width 100px
                    height 100px
                    background-color #d8d8d8
                    background-position center
                    background-size contain
                    background-repeat no-repeat
                    margin 0 12px 0 0
                    cursor pointer
                    font-size 14px
                    z-index 2
                    &:last-child
                        margin-right 0
                    &_active
                        background-color rgba(orangeMain, 0.1)

            .teacher_description
                min-height 270px
                background-image linear-gradient(360deg, orangeGrad, orangeMain)
                color whiteMain
                padding 25px 28px
                font-weight normal
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing normal

                .name
                    display flex
                    align-items center
                    margin-bottom 10px
                    font-family $FuturaFont
                    font-size $FontSize3
                    font-weight bold
                    letter-spacing 0.4px

                    .social
                        display flex

                        .social-link
                            cursor pointer
                            margin-left 15px
                            svg
                                width 30px
                                height 30px
                                fill white
                                opacity 0.5
                            &:hover
                                svg
                                    opacity 1

                .style
                    margin-bottom 22px
                    opacity 0.5
                    font-family $LucidaGrandeFont
                    font-size 13px
                    font-weight bold

                .description
                    color whiteMain


            #active
                width 100px
                height 15px
                background-color orangeMain
                transition transform 0.35s ease-in-out
                z-index 1

    @media only screen and (max-width 1200px)
        .teachers_inner-container
            padding $PaddingContainersMobile
            justify-content center

            .teachers_list
                display flex
                flex-direction column
                align-items center
                width 100%

            .teachers_photo
                display none


    @media only screen and (max-width 767px)
        .teachers_inner-container
            width $ContainersWidthMobile

    @media only screen and (max-width 450px)
        .teachers_inner-container
            .teachers
                &_list
                    display flex
                    flex-direction column
                    align-items center
                    width 100%
                &_slider
                    max-width 356px
                    min-width 356px
                    #active
                        width 80px

                    .photos
                        max-height 190px
                        .photo
                            width 80px
                            height 80px

    @media only screen and (max-width 360px)
        .teachers_inner-container
            .teachers
                &_slider
                    max-width 316px
                    min-width 316px
                    #active
                        width 70px

                    .photos
                        max-height 170px
                        .photo
                            width 70px
                            height 70px



</style>
