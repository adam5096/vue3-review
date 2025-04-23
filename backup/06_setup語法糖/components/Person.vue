<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年齡: {{ age }}</h2>
        <h2>性別: {{ gender }}</h2>

        <br><button @click="changeName">修改姓名</button>
        <br><button @click="changeAge">修改年齡</button>
        <br><button @click="showTel">查看聯絡方式</button>
    </div>
</template>

<script lang="ts">
// name 會被記錄在 vue 的 devtools 中 (可點開瀏覽器開發工具查看)
    export default {
        name: 'Person123',
        // setup() {
            // setup 函數中的 this 是 undefined，vue 3 中已經弱化了 this

            // 數據
            // let name = ('哈哈')
            // let age = (18)
            // let gender = ('男')
            // let tel = ('12345678901')


            // 函數
            // 這樣修改 name 不會觸發響應式
            // name 確實改變了，但畫面不會變
            // function changeName() {
            //     console.log('@@ changeName fired')
            //     name = '小明'
            //     console.log(name)
            // }
            // function changeAge() {
            //     console.log('@@ changeAge fired')
            //     age += 1
            //     console.log(age)
            // }
            // function showTel() {
            //     console.log('@@ showTel fired')
            //     alert(tel)
            //     console.log(tel)
            // }
            // 將數據、函數交出去，模板中才能使用
            // return {
            //     name,
            //     age,
            //     gender,
            //     tel,
            //     changeName,
            //     changeAge,
            //     showTel
            // }
        // }
    }
</script>

<!-- vite-plugin-vue-setup-extend 插件 -->
<!-- 支持在 setup 中加入 name 屬性來設置元件名稱-->

<script setup lang="ts">
    // setup 函數中的 this 是 undefined，vue 3 中已經弱化了 this
    // 數據
    let name = ('哈哈')
    let age = (18)
    let gender = ('男')
    let tel = ('12345678901')


    // 函數
    // 這樣修改 name 不會觸發響應式
    // name 確實改變了，但畫面不會變
    function changeName() {
        console.log('@@ changeName fired')
        name = '小明'
        console.log(name)
    }
    function changeAge() {
        console.log('@@ changeAge fired')
        age += 1
        console.log(age)
    }
    function showTel() {
        console.log('@@ showTel fired')
        alert(tel)
        console.log(tel)
    }
</script>

<style lang="css" scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px ;
    border-radius: 10px;
    padding: 20px;
}
</style>
