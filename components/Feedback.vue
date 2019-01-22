<template lang="pug">
    .feedback_container
        h2.title.title-feedback Начать танцевать
        h3.title Запишись на занятия и получи скидку 50% на свой первый абонемент!
        form(v-on:submit.prevent="submitForm()")
            .input
                input(type="text" :class="{error: !name && errorName}" v-model="name" placeholder="Имя")
                .error_text(v-if="!name && errorName") Введите имя
            .input
                input(type="text" :class="{error: !phone && errorPhone}" v-model="phone" placeholder="Номер телефона")
                .error_text(v-if="!phone && errorPhone") Введите номер телефона
            Button(name="ЗАПИСАТЬСЯ" type="small borderNone", clickAction="submitForm()")
            .message(v-if="emailStatus") {{ emailStatus }}



</template>

<script>
    import Button from '~/components/Button.vue'
    import * as emailjs from 'emailjs-com/dist/email'

    export default {
        data() {
            return {
                name: '',
                phone: '',
                errorName: false,
                errorPhone: false,
                emailStatus: '',
            }
        },
        components: {
            Button
        },
        methods: {
            submitForm() {
                this.emailStatus = ''

                const data = {
                    service_id: 'forsage_service',
                    template_id: 'template_5dGSiEff',
                    user_id: 'user_JaUNu8x9vuWUpoOfjGNgp',
                    template_params: {
                        'name': this.name,
                        'phone': this.phone
                    }
                };

                if (!this.name) {
                    this.errorName = true
                }

                if (!this.phone) {
                    this.errorPhone = true
                }

                if (this.phone && this.name) {
                    this.errorName = false
                    this.errorPhone = false

                    emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id)
                        .then((res) => {
                            this.emailStatus = 'Заявка отправлена, мы скоро с Вами свяжемся'
                            this.name = ''
                            this.phone = ''
                        }, (error) => {
                            this.emailStatus = 'Что-то пошло не так, попробуйте позже или свяжитесь с нами по телефону'
                        });
                }



            }
        },
        computed: {

        },
        async created() {

        },
        mounted() {
        },
    }

</script>

<style lang="stylus">
    .feedback_container
        padding $PaddingContainers
        text-align center
        background-image linear-gradient(237deg, #0c1135, #080634)

        h2.title-feedback
            color whiteMain
            margin-bottom 20px

        h3.title
            color orangeMain
            margin-bottom 20px

        form
            display flex
            align-items center
            flex-direction column

            .error_text
                margin-top 5px
                color #e62117
            input
                color #000
                border 1px solid #c0c0c0
                outline none
                font-size 18px
                border-radius 30px
                width 60%
                max-width 500px
                padding 10px 20px 11px
                cursor pointer
                &.error
                    border-color #e62117
                    color #e62117
                    &::placeholder
                        color #e62117
                &:focus
                &:hover
                    border 1px solid orangeMain

            .input
                width 100%
                margin-bottom 20px

                &:nth-child(2)
                    margin-bottom 50px
            .message
                position relative
                top 10px
                color whiteMain



    @media only screen and (max-width 767px)
        .feedback_container
            padding $PaddingContainersMobile

    @media only screen and (max-width 500px)
        .feedback_container
            padding $PaddingContainersMobile
            form
                input
                    width 100%
</style>
