<template>
    <div class="col-md-4 mt-2">
        <div class="card shadow">
            <div class="card-header">
                <h4 class="float-left">Emails</h4>
            </div>

            <div v-if="send" class="card-body">
                versturen
            </div>

            <div v-if="view" class="card-body">
                <div v-for="email in emails" class="toast show" role="alert">
                    <div class="toast-header">
                        <strong class="mr-auto">{{ email.subject }}</strong>
                        <button type="button" class="ml-2 mb-1 close">
                            <span>&times;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="btn-group btn-group-justified">
                <a href="#" class="btn border" @click="viewMail">Receive</a>
                <a href="#" class="btn border" @click="sendMail">Send</a>
                <a href="/oauth/gmail/logout" class="btn border">{{auth}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EmailNotification",
        data() {
            return {
                emails: [],
                send: false,
                view: false,
                auth: ''
            }
        },

        mounted() {
            axios.get('/emails')
                .then((response) => {
                    //send data to emails
                }, (error) => {
                    console.log(error);
                });
            this.auth = 'Login'
        },

        methods: {
            viewMail() {
                this.send = false;
                this.view = true;
            },
            sendMail() {
                this.view = false;
                this.send = true;
            },
        },
    }
</script>

<style scoped>

</style>
