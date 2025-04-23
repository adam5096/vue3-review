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

<!-- vite-plugin-vue-setup-extend 插件 -->
<!-- 支持在 setup 中加入 name 屬性來設置元件名稱-->

<script setup lang="ts" name="PersonTest">
import { ref } from 'vue'
    // 數據
    let name = ref('哈哈')
    let age = ref(18)
    let gender = ('男')
    let tel = ('12345678901')

    console.log(1, name)
    console.log(2, age)
    console.log(3, gender)
    console.log(4, tel)

    // 函數
    // 這樣修改 name 不會觸發響應式
    // name 確實改變了，但畫面不會變
    function changeName() {
        console.log('@@ changeName fired')
        name.value = '小明'
        console.log(name.value)
    }
    function changeAge() {
        console.log('@@ changeAge fired')
        age.value += 1
        console.log(age.value)
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
