<template lang="pug">
    .teachers_container
        .teachers_inner-container
            .teachers_photo
            .teachers_list
                h2.title.title-teachers Преподаватели
                .teachers_slider
                    #photos.photos
                        .photo.photo-click(
                            v-for="(teacher, index) in teachers",
                            :key="teacher.name",
                            @click="onTeacherClick(teacher, index)",
                            :class="{'photo_active': selectedTeacher === teacher}") {{teacher.Name}}</br>{{teacher.active}}
                    #active
                    .teacher_description
                        .name {{selectedTeacher.Name}}
                        .style {{selectedTeacher.Styles}}
                        .description.text_default {{selectedTeacher.Description}}
                        .social Найти в соцсетях: тут будут соцсети



</template>

<script>
    import Data from '~/assets/staticData/teachers.json'

    export default {
        data() {
            return {
                teachers: Data.Teachers,
                selectedTeacher: Data.Teachers[0],
                previousOffset: 0
            }
        },
        components: {

        },
        methods: {
            onTeacherClick(teacher, index = 0) {
                this.selectedTeacher = teacher
                const offsetLeft = Array.from(document.getElementsByClassName('photo'))[index].offsetLeft
                const offsetTop = Array.from(document.getElementsByClassName('photo'))[index].offsetTop
                let activeSlider = document.getElementById('active').style

                // Если сдвиг слайдера по вертикали, то скрываем его
                // if (this.previousOffset !== offsetTop) {
                //     activeSlider.opacity = '0'
                //     this.previousOffset = offsetTop
                // }

                activeSlider.transform = `translate(${offsetLeft}px, ${offsetTop-115}px)`
                // setTimeout(() => {
                //     activeSlider.opacity = '1'
                // }, 300)
            }
        },
        created() {

        },
        mounted() {
            let elems = Array.from(document.getElementsByClassName('photo-click'));
            const halfElemsLength = elems.length/2
            const photos = elems.slice(0, Math.floor(halfElemsLength))
            photos.forEach(item => {
                item.style.marginBottom = '15px'
            })
            photos[halfElemsLength-1].style.marginRight = '0'

            this.onTeacherClick(this.teachers[0])
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
        padding 60px
        padding-bottom 0

    .teachers
        &_photo
            min-width 50%
            background-image url('~assets/img/teachers/image-vanya@2x.png')
            background-repeat no-repeat
            background-size contain
            background-position bottom
        &_list
            padding 27px 30px 0 30px
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

                .photo
                    width 100px
                    height 100px
                    background-color gray
                    margin 0 12px 0 0
                    cursor pointer
                    font-size 14px
                    z-index 2
                    &:last-child
                        margin-right 0
                    &_active
                        background-color darkgray

            .teacher_description
                min-height 270px
                background-image linear-gradient(360deg, orangeGrad, orangeMain)
                color whiteMain
                padding 34px 28px
                font-weight normal
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing normal

                .name
                    margin-bottom 10px
                    font-family $FuturaFont
                    font-size 22px
                    font-weight bold
                    letter-spacing 0.4px

                .style
                    margin-bottom 22px
                    opacity 0.5
                    font-family $LucidaGrandeFont
                    font-size 13px
                    font-weight bold

                .description
                    color whiteMain
                    margin-bottom 20px

            #active
                width 100px
                height 15px
                background-color orangeMain
                transition transform 0.35s ease-in-out
                z-index 1

    @media only screen and (max-width 767px)
        .teachers_inner-container
            display none


</style>
