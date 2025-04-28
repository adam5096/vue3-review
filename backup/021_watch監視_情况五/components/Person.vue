<template>
    <div class="person">
    <h1>情況四: 監聽 ref, reactive 定義的 [ 物件類型 ] "之中的某個屬性"</h1>
        <h2>姓名: {{ person.name }} </h2>
        <h2>年齡: {{ person.age }}</h2>
        <h2>車子: {{ person.car.c1 }}, {{ person.car.c2 }}</h2>
        <hr>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年紀</button>
        <button @click="changeCar1">修改第一台車</button>
        <button @click="changeCar2">修改第二台車</button>
        <button @click="changeAllCar">修改整個車子</button>
    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { isConstructorDeclaration } from 'typescript'
import { ref, watch, reactive } from 'vue'
    // 數據
    let person = reactive({
        name: 'adam',
        age: 18,
        car: {
            c1: 'BMW',
            c2: 'Benz'
        }
    })
    // 數據 END

    // 方法
    const changeName = () => {
        person.name += ' ~'
    }
    const changeAge = () => {
        person.age += 1
    }
    const changeCar1 = () => {
        person.car.c1 += ' ~'
    }
    const changeCar2 = () => {
        person.car.c2 += ' ~'
    }
    const changeAllCar = () => {
        person.car = {
            c1: 'Toyota',
            c2: 'Honda'
        }
    }

    // 方法 END


    // 情況五: 監聽多個數據

    // const stopWatch01 = watch(() => person.name, (newVal, oldVal) => {
    //     console.log('newVal --- oldVal', newVal, oldVal)
    // })


    const stopWatch02 = watch([() => person.name, () => person.car.c1], (newVal, oldVal) => {
        console.log('newVal --- oldVal', newVal, oldVal)
    })

    // 結論: 監聽 ref, reactive 深層的屬性或物件，一律寫成函式型態，如有額外深層監聽需求，再加寫 {deep: true} 就好

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
