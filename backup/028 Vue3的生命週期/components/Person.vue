<template>
    <div class="person">

    <h2>加總: {{ sum }}</h2>
    <hr>
    <button @click="add">+</button>

    </div>

</template>

<script setup lang="ts" name="PersonTest">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

defineOptions({
    name: 'Person'
})

// ******** 數據 ********
let sum = ref(0)

// ******** 方法 ********
const add = () => {
    sum.value+=1
}

    
    // ******** 生命週期 ********
    // 1. vue 3 中的 setup  替代 vue 2 中的 beforeCreate 和 created
    console.log('setup 創建 子-元件完畢')

    // 2.onMounted 替代 vue 2 中的 mounted
    onBeforeMount(() => {
        console.log('子-元件掛載前')
    })

    onMounted(() => {
        console.log('子-元件掛載完畢')
    })

    // 3. onBeforeUpdate 替代 vue 2 中的 beforeUpdate
    onBeforeUpdate(() => {
        console.log('子-元件更新前')
    })

    // 4. onUpdated 替代 vue 2 中的 updated 
    onUpdated(() => {
        console.log('子-元件更新完畢') 
    })

    // 5. onBeforeUnmount 替代 vue 2 中的 beforeDestroy
    onBeforeUnmount(() => {
        console.log('子-元件卸載前')
    })
    

    // 6. onUnmounted 替代 vue 2 中的 destroyed
    onUnmounted(() => {
        console.log('子-元件卸載完畢')
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
