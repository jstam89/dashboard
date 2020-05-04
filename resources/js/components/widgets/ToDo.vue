<template>
    <div class="col-md-4 mt-2">
        <div class="card shadow">
            <div class="card-header">
                <h4>Todo's</h4>
            </div>
            <div class="card-body">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Plaats een todo" v-model="newTodo"
                           @keyup.enter="add">
                </div>
                <ul class="list-group">
                    <li v-for="(todo, index) in todos"
                        class="list-group-item d-flex justify-content-between align-items-center">
                        {{todo}}
                        <div class="btn-group">
                            <button @click="editTodo(todo, index)" type="button" class="close m-1" aria-label="Close">
                                <span aria-hidden="true"><i class="far fa-edit fa-xs"></i></span>
                            </button>
                            <button @click="remove(index)" type="button" class="close m-1" aria-label="Close">
                                <span aria-hidden="true"><i class="fas fa-times fa-xs"></i></span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        name: "ToDo",
        data(){
            return{
                newTodo: '',
            }
        },
        methods: {
            add() {
                let value = this.newTodo && this.newTodo.trim();
                this.$store.dispatch('add', value);
                this.newTodo = '';
            },

            remove(index) {
                this.$store.dispatch('remove', index);
            }
        },
        computed: {
            ...mapGetters([
                'todos',
            ])
        }
    }
</script>

<style scoped>

</style>
