<template lang="pug">
    .feedback_container
        h2.title.title-feedback {{statusSuccess ? 'СПАСИБО!' : 'Начать танцевать'}}
        h3.title(v-html="statusSuccess && emailStatus ? emailStatus : formDesc")
        Gift
        form(v-if="!statusSuccess" v-on:submit.prevent="submitForm()")
            .input
                input(type="text" :class="{error: !name && errorName}" v-model="name" placeholder="Имя")
                <!--.error_text(v-if="!name && errorName") Введите имя-->
                    div
            .input
                input(type="text" :class="{error: !phone && errorPhone}" v-model="phone" placeholder="Номер телефона")

            .error_text(v-if="(!name && errorName) || (!phone && errorPhone)") Заполните обязательные поля
                div
            Button(name="ЗАПИСАТЬСЯ" type="small")
            .lds-dual-ring(v-if="preload")
            .message(v-if="emailStatus") {{ emailStatus }}
            .message.err(v-if="emailStatusErr") {{ emailStatusErr }}



</template>

<script>
    import Button from '~/components/Button.vue'
    import * as emailjs from 'emailjs-com/dist/email'
    import Gift from '~/assets/img/gift.svg'
    import Contacts from '~/assets/staticData/contacts.json'


    export default {
        data() {
            return {
                name: '',
                phone: '',
                errorName: false,
                errorPhone: false,
                formDesc: 'Запишись на занятия и получи скидку 50% на&nbsp;свой&nbsp;первый абонемент!',
                emailStatus: '',
                emailStatusErr: '',
                phoneNumber: Contacts.Contacts.Phone,
                preload: false,
                statusSuccess: false,
            }
        },
        components: {
            Button,
            Gift,
        },
        methods: {
            submitForm() {
                this.emailStatus = ''
                this.emailStatusErr = ''

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

                    this.preload = true
                    emailjs.send(data.service_id, data.template_id, data.template_params, data.user_id)
                        .then((res) => {
                            this.emailStatus = 'Заявка отправлена, мы скоро с Вами свяжемся'
                            this.name = ''
                            this.phone = ''
                            this.preload = false
                            this.statusSuccess = true
                        }, (error) => {
                            this.emailStatusErr = `Что-то пошло не так, попробуйте позже или свяжитесь с нами по телефону ${phoneNumber}`
                            this.preload = false
                            this.statusSuccess = false
                        });
                }
            }
        },
        computed: {

        },
        async created() {

        },
        mounted() {
            this.statusSuccess = false;
        },
        destroyed() {
            this.statusSuccess = false
        }
    }

</script>

<style lang="stylus">
    .feedback_container
        text-align center

        h2.title-feedback
            color #000
            margin-bottom 20px

        h3.title
            color orangeMain
        svg
            width 70px
            height  70px
            path
                stroke orangeMain !important


        form
            display flex
            align-items center
            flex-direction column
            position relative

            .error_text
                position absolute
                bottom 55px
                color #e62117

            input
                color #000
                border 1px solid #c0c0c0
                outline none
                font-size 18px
                border-radius 30px
                width 65%
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
                color green
                &.err
                    color red

    .lds-dual-ring {
        display: inline-block;
        width: 25px;
        height: 25px;
        position relative
        top 10px
    }
    .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 25px;
        height: 25px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid orangeMain;
        border-color: orangeMain transparent orangeMain transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

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
