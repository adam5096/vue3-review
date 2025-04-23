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
        <!-- <input type="text" v-model="newGameName"> -->
        <!-- <button @click="addGame">新增一個遊戲名字</button> -->

        <hr>
        <h2>測試: {{ obj.a.b.c }}</h2>
        <button @click="changeObj">修改obj</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, reactive } from 'vue'
    // 數據
    let car = reactive({
        brand: "BMW",
        price: 1000
    })

    let games = reactive([
        {id: 6,name: "CSGO"},
        {id: 7,name: "Dota2"},
        {id: 8,name: "LOL"},
    ])

    // let newGameName = ref("")

    // 方法
    function changePrice() {
        car.price += 10
        console.log(car.price)
    }

    function changeGameName() {
        games[0].name = "Little Fighters 2"
        console.log(games[0].name)
    }

    let obj = reactive({
        a: {
            b: {
                c: 666
            }
        }
    })

    // 修改深處的c也有效: 代表 reactive 是深層響應式
    function changeObj() {
        obj.a.b.c = 999
        // console.log(obj.a.b.c)
    }


    // function addGame() {
    //     games.push({id: games[games.length - 1].id + 1 ,name: newGameName.value})
    //     console.log(games)
    //     console.log(games[games.length - 1].id)
    //     newGameName.value = ""
    // }
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
