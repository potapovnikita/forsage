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



</template>

<script>
    import InstaLogo from '~/assets/img/social/instagram-logo.svg'
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
            InstaLogo,
            Button
        },
        methods: {
            submitForm() {
                console.log(this.name, this.phone)
                this.emailStatus = ''

                const data = {
                    service_id: '<YOUR SERVICE ID>',
                    template_id: '<YOUR TEMPLATE ID>',
                    user_id: '<YOUR USER ID>',
                    template_params: {
                        name: this.name,
                        phone: this.phone
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

                    // emailjs.send(data)
                    //     .then((res) => {
                    //         this.emailStatus = 'Заявка отправлена, мы скоро с Вами свяжемся'
                    //         this.name = ''
                    //         this.phone = ''
                    //     }, (error) => {
                    //         this.emailStatus = 'Что-то пошло не так, попробуйте позже или свяжитесь с нами по телефону'
                    //     });
                }



            }
        },
        computed: {

        },
        async created() {

        },
        mounted() {
            // const userId = 'user_0qIsrdRv9hVhOoGLjqibi'
            // emailjs.init(userId)
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
