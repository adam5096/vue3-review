<template>
    <div class="person">
    <h2>當前水溫度: {{ temp }}</h2>
    <h2>當前水高度: {{ hright }}</h2>
    <button @click="addTemp">點我水溫加加 10</button>
    <button @click="addHright">點我水高度加 10</button>
    <hr>
    <h2>{{ watchEffectCallback }}</h2>
    
    </div>

</template>

<script setup lang="ts" name="PersonTest">
import { ref, watchEffect, watch, onMounted } from 'vue'
    // ********** 數據 **********
    let temp = ref(10)
    let hright = ref(0)
    // ********** 數據 END **********

    // ********** 方法 **********
    const addTemp = () => {
        temp.value+= 10
    }
    const addHright = () => {
        hright.value+= 10
    }
    // ********** 方法 END **********

    // ********** 需求: 監聽水溫度或水高度, 當水溫度過高或水高度過高時, 發送網路請求 **********
    // watch 寫法
    // watch([temp, hright], (newValue) => {
    //     let [newTemp, newHeight] = newValue

    //     if(newTemp > 40 || newHeight > 100){
    //         console.log('水溫度過高或水高度過高')
    //         console.log(newTemp, newHeight)
    //         console.log('網路請求發送中...')
    //     }
    // })

    // watchEffect 寫法

    let watchEffectCallback = watchEffect(() => {
            if(temp.value > 40 || hright.value > 100){
            console.log('水溫度過高或水高度過高')
            console.log(temp.value, hright.value)
            console.log('網路請求發送中...')
        }
    })

    // watch END

    // ********** watchEffect 與 watch 的區別 **********
    // 使用 watch: 需要寫明白監視哪一個(或多個)響應數據
    // 使用 watchEffect: 自動監視 callback 中所有提到的響應數據

    
    // 理解 watch: 相當於給任何響應式數據新增事件監聽 + callback
    //  適合放入 watch 的場景:
    // 1.操作 DOM
    // 2.網路請求
    // 3.滿足特定條件或發生特定事件後的 callback
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
