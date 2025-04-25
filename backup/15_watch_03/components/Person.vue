<template>
    <div class="person">
    <h1>情況三: 監聽 [ reactive] 定義的物件類型數據</h1>
       <h2>姓名: {{ person.name }}</h2>
       <h2>年齡: {{ person.age }}</h2>
       <button @click="changeName">修改名字</button>
       <button @click="changeAge">修改年紀</button>
       <button @click="changepPerson">修改整個人</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, watch, reactive } from 'vue'
    // 數據
    let person = reactive({
        name: 'adam',
        age: 18
    })
    // 數據 END

    // 方法
    const changeName = () => {
        person.name += " ~"
    }
    const changeAge = () => {
        person.age += 1
    }
    const changepPerson = () => {
        // person = {
        //     name: 'chou',
        //     age: 90
        // }
        Object.assign(person, {
            name: 'chou',
            age: 90
        })
    }
    // 方法 END


    // 情況三: 監聽 [ reactive] 定義的物件類型數據
    // 對於監聽 reactive 數據: 會隱式創造深度監聽，且無法關閉
   const watchResult = watch(person, (newValue, oldValue) => {
        console.log('person 的值變了', newValue, oldValue)
    })
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
