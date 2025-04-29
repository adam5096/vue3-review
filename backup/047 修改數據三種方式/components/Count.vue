<template>
    <div class="count">
        <h2>當前加總為 {{ countStore.sum }}</h2>
        <h3>歡迎: {{ countStore.name }} 來到: {{ countStore.address }}</h3>
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

    // ******** 變數 ********
    // let sum = ref(0) // 當前加總
    const countStore = useCountStore() // 建立 count 小倉庫實例

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

    onMounted(() => {
        updateButtonState()// 掛載時，檢查減法按鈕是否要停用
    })

    const handleAdd = () => {
        // sum.value += userSelectNumber.value

        // pinia 第一種修改方式
        // countStore.sum += userSelectNumber.value


        // 第二種修改方式: 批量修改
        // $patch 可以直接修改 state 中多個狀態
        // countStore.$patch({
            // sum: countStore.sum + userSelectNumber.value,
            // name: countStore.name + '~ ',
            // address: countStore.address + '~ '
        // })

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