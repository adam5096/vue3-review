<template>
    <Person />

</template>

<script lang="ts">
    import Person from './components/Person.vue'
    export default {
        // 組件名稱
        name: 'App',
        // 組件註冊
        components: {
            Person
        }
    }

</script>