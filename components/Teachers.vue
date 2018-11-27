<template lang="pug">
    section.teachers_container
        .teachers_inner-container
            .teachers_photo Фотка
            .teachers_list
                .title Преподаватели
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
                        .description {{selectedTeacher.Description}}



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
                if (this.previousOffset !== offsetTop) {
                    activeSlider.opacity = '0'
                    this.previousOffset = offsetTop
                }

                activeSlider.transform = `translate(${offsetLeft}px, ${offsetTop-115}px)`
                setTimeout(() => {
                    activeSlider.opacity = '1'
                }, 300)
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
        height 1000px
    .teachers_inner-container
        display flex
        flex-wrap wrap
        width ContainersWidth
        background-color whiteInnerBackground
        padding 60px

    .teachers
        &_photo
            min-width 50%
            background black

        &_list
            padding 27px 30px 0 30px
            width 50%
            /*padding-right 130px*/
            .title
                margin-bottom 42px
                font-family Futura
                font-size 28px
                font-weight bold
                font-style normal
                font-stretch normal
                line-height normal
                letter-spacing 0.7px

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
                    font-family Futura
                    font-size 18px
                    font-weight bold
                    letter-spacing 0.4px

                .style
                    margin-bottom 22px
                    opacity 0.5
                    font-family LucidaGrande
                    font-size 13px
                    font-weight bold

                .description
                    font-size 16px
                    font-family ProximaNova
                    letter-spacing 0.4px


            #active
                width 100px
                height 15px
                background-color orangeMain
                transition transform 0.35s ease-in-out, opacity 0.1s
                z-index 1

</style>
