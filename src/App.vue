<template>

    <Person :personList="personList" />

</template>

<script setup lang="ts">
    import { defineOptions ,defineComponent } from 'vue';
    import Person from './components/Person.vue'


    defineOptions({
        name: 'App'
    })

    defineComponent({
        components: {
            Person
        }
    })

    let personList = [
        {
            id: 1,
            name: '張三',
            age: 18
        },
        {
            id: 2,
            name: '李四',
            age: 20
        },
        {
            id: 3,
            name: '王五',
            age: 22
        }
    ]

</script>