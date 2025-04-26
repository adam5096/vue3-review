<template>
    <div class="person">

    <ul>
        <li v-for="person in props.personList" :key="person.id">
            <h2>姓名: {{ person.name }}</h2>
            <h2>年齡: {{ person.age }}</h2>
        </li>
    </ul>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
import { ref, onMounted } from 'vue'

defineOptions({
    name: 'Person'
})
    
    // defineProps(['personList'])

    // 限制來源 + 限制類型 + 限制必要 + 限制預設值
    const props = withDefaults(defineProps<{
        personList: {id: number, name: string, age: number}[]
    }>(), {
        personList: () => [{id: 999, name: 'DEFAULT', age: 999}]
    })



</script>

<style lang="css" scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px ;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin:0 5px;
}

li {
    font-size: 20px;
}
</style>
