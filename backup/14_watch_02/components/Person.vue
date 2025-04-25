<template>
    <div class="person">
    <h1>情況二: 監聽 [ ref ] 定義的物件類型數據</h1>
       <h2>姓名: {{ person.name }}</h2>
       <h2>年齡: {{ person.age }}</h2>
       <button @click="changeName">修改名字</button>
       <button @click="changeAge">修改年紀</button>
       <button @click="changepPerson">修改整個人</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, watch } from 'vue'
    // 數據
    let person = ref({
        name: 'adam',
        age: 18
    })
    // 數據 END

    // 方法
    const changeName = () => {
        person.value.name += " ~"
    }
    const changeAge = () => {
        person.value.age += 1
    }
    const changepPerson = () => {
        person.value = {
            name: 'chou',
            age: 90
        }
    }
    // 方法 END


    // A: watch
    // 直接監聽 person, 無論是修改  person.value.name 或  person.value.age 並不會觸發 watch 執行
    // 反而 修改 person 整個物件時, 會觸發 watch 執行

    // B: watch
    // deep: true : 深度監聽, 監聽 person 整個物件
    // immediate: true ; 頁面準備好的第一時間，就立即執行一次
    // wacth 第 1 參數: 監視的數據, 第 2 參數: callback 函數
    watch(person, (newValue, oldValue) => {
        console.log('person 的值變了', newValue, oldValue)
    }, { deep: true , immediate: true })
    // watch END
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
