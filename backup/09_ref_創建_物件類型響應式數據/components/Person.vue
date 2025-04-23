<template>
    <div class="person">
        <h2>車輛訊息: 一輛{{ car.brand }}，價格是{{ car.price }}元</h2>
        <button @click="changePrice">修改價格</button>
        <br>
        <h2>遊戲列表:</h2>
        <!-- 使用 v-for 指令來遍歷、渲染遊戲列表 -->
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeGameName">修改第一個遊戲名字</button><br>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, reactive } from 'vue'
    // 數據
    let car = ref({
        brand: "BMW",
        price: 1000
    })

    let games = ref([
        {id: 6,name: "CSGO"},
        {id: 7,name: "Dota2"},
        {id: 8,name: "LOL"},
    ])


    // 方法
    function changePrice() {
        car.value.price += 10
        console.log(car.value.price)
    }

    function changeGameName() {
        games.value[0].name = "Little Fighters 2"
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
