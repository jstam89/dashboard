<template>
    <div class="row p-2">
        <welcome-widget></welcome-widget>
        <todo-list></todo-list>
        <email-notification></email-notification>
        <bookmarks-list></bookmarks-list>
    </div>
</template>

<script>
    import WelcomeWidget from "./widgets/WelcomeWidget";
    import ToDo from "./widgets/ToDo";
    import EmailNotification from "./widgets/EmailNotification";
    import BookMarks from "./widgets/BookMarks";

    export default {
        name: "WidgetArea",
        components: {
            'welcome-widget': WelcomeWidget,
            'todo-list' :ToDo,
            'email-notification': EmailNotification,
            'bookmarks-list': BookMarks,
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
