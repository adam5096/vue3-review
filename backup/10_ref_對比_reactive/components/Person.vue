<template>
    <div class="person">
        <h2>車輛訊息: 一輛{{ car.brand }}，價格是{{ car.price }}元</h2>
        <button @click="changePrice">修改價格</button>
        <button @click="changeCar">換一台車</button>
        <br>
        <h2>當前總和: {{sum}}</h2>
        <button @click="add">點我 sum +1</button>
        <button @click="sub" :disabled="sum === 0">點我 sum -1</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, reactive } from 'vue'
    // 數據
    // let car = reactive({brand: "BMW",price: 1000})
    let car = reactive({brand: "BMW",price: 1000})

    let sum = ref(0)

    // 方法
    function changePrice() {
        car.price += 10
        console.log(car.price)
    }

    // 換一台車
    // 使用 reactive 定義的對象是響應式的，當直接賦值給 car 時，car 直接指向新的記憶體地址
    // car 中使用 reactive 對舊物件加工的響應式特性，並"不會"跟著遷移到新物件身上
    // 換句話說，用這種手法，新物件缺少響應式，只是一個普通物件

    // A, B 都無法再次給予響應式，頁面都不會更新
    function changeCar() {
        // 如果資料是從 server 端獲取的，大機率會頭暈失誤直接這樣寫
        // A. car = {brand: "Benz",price: 20}
        // B. car = reactive({brand: "Benz",price: 20})

        // reactive坑: 可以使頁面保持更新的方法
        Object.assign(car, { brand: "Benz", price: 20 })

        // 使用 ref 定義的對象是響應式的，當直接賦值給 car 時，car 直接指向新的記憶體地址
        // car 中使用 ref 對舊物件加工的響應式特性，"會"跟著遷移到新物件身上
        // car.value = {brand: "Benz",price: 20}
    }

    function add() {
        sum.value += 1
        // sum = ref(9) 這樣沒有作用
    }

    function sub() {
        sum.value -= 1
    }
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
