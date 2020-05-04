<template>
    <div class="col-md-4 mt-2">
        <div class="card shadow">
            <div class="card-header">
                <h4>Welkom, {{ user.name }}</h4>
            </div>
            <div class="card-body">
                <p class="email"><b>Email:</b> {{ user.email }}</p>
                <p class="date"><b>Datum:</b> 02-05-2020</p>
                <p class="time"><b>Tijd:</b> 16:10 uur</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "WelcomeWidget",

        mounted() {
            this.$store.dispatch('loadUser');
        },

        computed: {
            ...mapGetters([
                'user',
            ])
        }
    }
</script>

<style scoped>

</style>
