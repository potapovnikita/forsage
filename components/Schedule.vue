<template lang="pug">
    .schedule_container
        .schedule_inner-container
            h2.title Расписание занятий
            .shedule-table
                .halls-switch
                    .hall(
                        v-for="(hall, index) in shedule.Halls",
                        :class="{active: index === activeHall}",
                        @click="selectHall(index)"
                    ) {{hall.HallName}}
                .halls-schedule
                    .schedule
                        .days
                            .days-slider_mobile
                                .item(v-for="(hall, indexDay) in shedule.Halls[activeHall].HallSchedule"
                                    @click="selectDay(indexDay)"
                                    :class="{active: indexDay === activeDay}") {{dayShort[indexDay]}}
                            .day.empty
                                .cell.day_head
                                .day_schedule(v-for="(time, index) in scheduleTimes")
                                    .cell.time {{time.time}}

                            .day(v-if="scheduleHallByDay.length"
                                v-for="(hall, indexDay) in shedule.Halls[activeHall].HallSchedule"
                                :class="['day-'+indexDay, { visible: indexDay === activeDay}]")

                                .cell.day_head(:class="{active: indexDay === activeDayDesktop}") {{hall.WeekDay}}
                                .day_schedule(v-for="(daySchedule) in scheduleHallByDay[activeHall][indexDay].fullShedule")
                                    .cell.cell_schedule
                                        div(v-if="daySchedule.lesson"
                                            :style="{ height: calcHeight(daySchedule.lesson.diff, 80), top: daySchedule.lesson.offset }")
                                            span.name(v-html="daySchedule.lesson.Name")
                                            span.teacher(v-html="daySchedule.lesson.Teacher")
                                            span.start(v-html="daySchedule.lesson.LessonStart + '-' + daySchedule.lesson.LessonEnd")





</template>

<script>
    import Shedule from '~/assets/staticData/schedule.json'

    const scheduleTimes = [
        { id: 1, time: '10:00', },
        { id: 2, time: '11:00', },
        { id: 3, time: '12:00', },
        { id: 4, time: '13:00', },
        { id: 5, time: '16:00', },
        { id: 6, time: '17:00', },
        { id: 7, time: '18:00', },
        { id: 8, time: '19:00', },
        { id: 9, time: '20:00', },
        { id: 10, time: '21:00', },
        { id: 11, time: '22:00', },
    ];

    const dayShort = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

    export default {
        data() {
            return {
                shedule: Shedule,
                activeHall: 0,
                activeDay: new Date().getDay() - 1,
                activeDayDesktop: new Date().getDay() - 1,
                scheduleTimes: scheduleTimes,
                scheduleHallByDay: [],
                scheduleWeek: [],
                dayShort: dayShort,
            }
        },
        methods: {
            // select active hall
            selectHall(index) {
                this.activeHall = index
                this.scheduleHallByDay = this.calculateScheduleTable(index)
            },
            // select active day in week
            selectDay(index) {
                this.activeDay = index
            },
            // Вычитание времени
            subtractiontime(h1, h2) {
                const rang = Number(h2.replace(':','')) -  Number(h1.replace(':',''))
                let diff = 1;
                switch (rang) {
                    case 130: diff = 1.5
                        break
                    case 170: diff = 1.5
                        break
                    case 200: diff = 2
                        break
                    case 230: diff = 2.5
                        break
                    case 270: diff = 2.5
                        break
                    case 300: diff = 3
                        break
                    default: diff = 1
                        break
                }
                return diff
            },
            calcHeight(heightCell, defaultHeightCell) {
                return `${(defaultHeightCell * heightCell) - 1}px`
            },

            calculateScheduleTable(index) {
                let arr = this.shedule.Halls.map((hall) => hall.HallSchedule)

                arr[index].forEach((dayWeek, indexHall) => { // перебираем все дни в каждом зале
                    dayWeek.fullShedule = JSON.parse(JSON.stringify(scheduleTimes))
                    dayWeek.fullShedule.forEach((shed, shedIndex) => { // перебираем все полное распиание для каждого дня
                        dayWeek.Groups.forEach((lesson, lessonIndex) => { // перебираем все расписание  для каждого дня
                            if (lesson.LessonStart.slice(0,2) === shed.time.slice(0,2)) {
                                if (lesson.LessonStart.slice(3,5) === '30') {
                                    lesson.offset = '40px'
                                }

                                lesson.diff = this.subtractiontime(lesson.LessonStart, lesson.LessonEnd)

                                shed.lesson = lesson

                            }
                        })
                    })
                })
                return arr
            }
        },
        mounted() {
            this.scheduleHallByDay = this.calculateScheduleTable(this.activeHall)
        },
    }

</script>

<style lang="stylus">
    $borderCell = 1px solid #d9d9d9

    .schedule_container
        display flex
        justify-content center

    .schedule_inner-container
        width $ContainersWidth
        background whiteInnerBackground
        padding $PaddingContainers

        h2.title
            margin-bottom 28px

    .halls-switch
        display flex
        justify-content center
        .hall
            font-size 16px
            font-family $FuturaFont
            font-weight bold
            letter-spacing 0.3px
            color #c0c0c0
            border-bottom 2px solid #c0c0c0
            padding 5px 9px
            text-align center
            cursor pointer
            &.active
                color orangeMain
                border-color orangeMain

    .halls-schedule
        text-align center
        margin-top 25px
        .schedule
            display inline-flex
            border-top $borderCell
            border-right $borderCell

            .days
                display inline-flex
                font-size 12px
                position relative
                box-shadow 0 1px 10px 0 rgba(0, 0, 0, 0.4)

                .days-slider_mobile
                    display none

                .cell
                    border-bottom $borderCell
                    border-left $borderCell
                    height 80px

                    &.cell_schedule
                        height 80px
                        div
                            position relative
                            height 100%
                            background #f5f4f4
                            outline $borderCell
                            display flex
                            flex-wrap wrap
                            flex-direction column
                            justify-content space-between
                            padding 10px 5px

                            .name
                                font-size 12px
                                font-weight bold
                            .teacher
                                opacity 0.5
                                font-family $LucidaGrandeFont
                                font-size 11px
                                font-weight bold
                            .start
                            .finish
                                font-size 11px
                                font-family $LucidaGrandeFont
                                font-weight bold

                            span
                                width 100%

                .day
                    text-align center
                    width 106px

                    .cell.time
                        display flex
                        align-items center
                        justify-content center
                        font-family $ProximaNovaFont
                        font-size 16px
                        letter-spacing 0.4px

                    .day_head
                        font-family $FuturaFont
                        font-size 11px
                        font-weight bold
                        letter-spacing 0.2px
                        color #b0b0b0
                        display flex
                        align-items center
                        justify-content center
                        height 47px
                        &.active
                            color orangeMain


    @media only screen and (max-width 1200px)
        .halls-schedule
            .schedule
                .days
                    .days-slider_mobile
                        position absolute
                        left 1px
                        right 0
                        top 1px
                        background-color whiteMain
                        display flex
                        justify-content space-evenly
                        align-items center
                        height 45px
                        .item
                            display flex
                            align-items center
                            justify-content center
                            width 30px
                            height 30px
                            color #d9d9d9
                            border 1px solid #d9d9d9
                            border-radius 50%
                            cursor pointer
                            font-family $FuturaFont
                            &.active
                                color orangeMain
                                border-color orangeMain

                    for index in 0..6
                        .day-{index}
                            width 300px
                            display none
                    .visible
                        display block




    @media only screen and (max-width 767px)
        .schedule_inner-container
            width $ContainersWidthMobile
            padding $PaddingContainersMobile

    @media only screen and (max-width 480px)
        .halls-schedule
            .schedule
                .days
                    for index in 0..6
                        .day-{index}
                            width 200px





</style>
