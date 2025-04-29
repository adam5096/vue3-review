<template>
    <div class="count">
        <h2>當前加總為 {{ sum }}</h2>
        <h3>歡迎: {{ name }} 來到: {{ address }}</h3>
        <select v-model.number="userSelectNumber">
            <option value="1" selected>1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="handleAdd">加</button>
        <button @click="handleSub" ref="subBtn">減</button>
    </div>
</template>

<script setup lang="ts">
    import { ref, useTemplateRef, onMounted } from 'vue';

    import { useCountStore } from '@/store/count' // 引入 count 小倉庫

    import { storeToRefs } from 'pinia';

    // ******** 變數 ********
    const countStore = useCountStore() // 建立 count 小倉庫實例

    // 解構賦值，從倉庫中取出狀態，且狀態同時保持響應特性
    // 只關心 store 中的狀態，為其加上響應特性。並不會包裹 store 中的方法
    const { sum, name, address } = storeToRefs(countStore)
    
    let userSelectNumber = ref(1) // 每次加、減法一單位，使用者選擇

    const subBtn = useTemplateRef('subBtn') //  取得減法按鈕 DOM 元素

    // ******** 變數 END ********


    // ******** 函數 ********
    // 此函數時刻檢查減法按鈕是否要停用
    const updateButtonState = () => {
        if (subBtn.value) {
            // subBtn.value.disabled = sum.value <= 0
            subBtn.value.disabled = countStore.sum <= 0
        }
    }

    

    const handleAdd = () => {

        // 第三種修改方式: 使用 actions 修改
        // 傳入參數 userSelectNumber.value 後，會落到倉庫中被  num 接住 (可在倉庫找到這個變數)
        countStore.increment(userSelectNumber.value)

        updateButtonState() // 加法時，檢查減法按鈕是否要停用
    }

    const handleSub = () => {
        // sum.value -= userSelectNumber.value
        countStore.sum -= userSelectNumber.value

        // 第三種修改方式: 使用 actions 修改
        countStore.decrement(userSelectNumber.value)

        updateButtonState() // 減法時，檢查減法按鈕是否要停用
    }

    onMounted(() => {
        updateButtonState()// 掛載時，檢查減法按鈕是否要停用
    })
    // ******** 函數 END ********
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px ;
}

select, button{
    margin: 0 5px;
    height: 25px;
}
</style>