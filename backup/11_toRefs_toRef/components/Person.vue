<template>
    <div class="person">
       <h2>姓名：{{ name }}</h2>
       <h2>年齡：{{ age }},{{ n1 }},{{ a1 }}</h2>
       <button @click="changeName">修改姓名</button>
       <button @click="changeAge">修改年齡</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, reactive, toRefs, toRef } from 'vue'
    // 數據
    let person = reactive({
        name: 'adam',
        age: 18,
    })

    // 狀況一: 解構賦值
    // 若解構賦值未經任何處理，解構後的變數失去響應特性
    // 解法: 使用 toRefs 將解構後變數轉為響應式

    // 從語法上來說，下面兩行等價
    // let { name, age } = person
    // let name = person.name
    // let age = person.age

    // toRefs 可以一次性解構多個鍵值-對並做成響應式
    let { name, age } = toRefs(person)

    // toRef 可以將單個鍵值-對轉為響應式，必須逐個取出操作
    let n1 = toRef(person, 'name')
    let a1 = toRef(person, 'age')

    // 方法
    function changeName() {
        name.value += '~'
        console.log(name.value)
    }
    function changeAge() {
        age.value += 1
        console.log(age.value)
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
