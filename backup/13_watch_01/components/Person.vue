<template>
    <div class="person">
    <h1>情況一: 監聽 [ref] 基本類型數據</h1>
       <h2>當前加總: {{ sum }}</h2>
       <button @click="changeSum">點我 sum + 1</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, watch } from 'vue'
    // 數據
    let sum = ref(0)

    const changeSum = () => {
        sum.value++
    }

    // 監聽
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log('sum 的值變了', newValue, oldValue)
        if (newValue >= 10) {
            stopWatch()
        }
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
