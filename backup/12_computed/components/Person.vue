<template>
    <div class="person">
        姓: <input type="text" v-model.trim="firstName"><br>
        名: <input type="text" v-model.trim="lastName"><br>
        <button @click="changeFullName">將全名修改為漩渦名人</button><br>
        <!-- 注意一: 如果畫面上重複多次使用 computed 計算屬性, 計算屬性具緩存特性 -->
        <!-- 當他發現多處使用到 fullName，但下一個  fullName 與前一個 fullName 並無改變，會直接沿用前一個 fullName 數值 -->
        <!-- 並不會重複執行 computed -->
        全名: <span>{{ fullName }}</span><br>
        全名: <span>{{ fullName }}</span><br>
        全名: <span>{{ fullName }}</span><br>
 
        <hr>
        <!-- 全名: <span>{{ fullName2() }}</span><br>
        全名: <span>{{ fullName2() }}</span><br>
        全名: <span>{{ fullName2() }}</span><br> -->

    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import { ref, computed } from 'vue'
    // 數據
    let firstName = ref('adam')
    let lastName = ref('chou')

    // 需求: firstName 首字母變大寫
    // .toUpperCase() 轉大寫
    // .slice(0, 1) 從0開始取1個字
    // .slice(1) 從1開始取到最後

    // 特性一: computed 具緩存特性: 即便畫面上多處都使用同一個 computed 變數，只會使 computed 執行一次
    // 特性二: 這樣寫 computed, 只可讀, 無法修改
    // let fullName = computed(() => {
    //     console.log('fullName: computed 被執行了')
    //     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value

    // })

    // 比較: function 是沒有緩存特性的
    // function fullName2() {
    //     console.log('fullName2: 一般 function 被執行了')
    //     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
    // }


    // 可讀可寫的 computed 完整語法
    let fullName = computed({
        get() {
            // console.log('fullName: computed 被執行了')
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
        },
        set(value) {
            // console.log('changeFullName 被執行了')

            // value 會接住 fullName.value = '漩渦-名人' 的值
            // 並在這裡分別處理 firstName 和 lastName 的值
            // 陣列也可以解構賦值，並且即便陣列沒有(只有值)，也會按照 str1, str2 順序賦值
            let [str1, str2] = value.split('-') 
            console.log(str1, str2)
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        // 只是引起了 computed 的 set 方法呼叫
        fullName.value = '漩渦-鳴人'
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
