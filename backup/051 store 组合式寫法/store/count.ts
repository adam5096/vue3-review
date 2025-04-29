// ******** 建立屬於 count 元件的小倉庫 ********
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// 'count' 是倉庫名稱，名稱必須唯一

// { } 配置物件

// state: 倉庫中提供保存數據的容器(數據、變數)

// getters(state): 倉庫中提供的計算屬性，相當於 computed 函數。state 參數即為倉庫中的 state

// actions: 倉庫中提供操作數據的行為

// picsumList: localStorage.getItem 實現數據持久化，刷新畫面不丟數據


// ******** store 中使用組合式 API 寫法 ********
// 原來物件位置改為 callback 函數回傳

export const useCountStore = defineStore('count', () => {
    const sum = ref(0)
    const address = ref('rocket-19')
    const name = ref('小智')

    function increment(num: number) {
        sum.value += num
        console.log("count 倉庫中的 increment 被呼叫了!! ", sum.value)
    }

    function decrement(num: number) {
        sum.value -= num
        console.log("count 倉庫中的 decrement 被呼叫了!! ", sum.value)
    }

    const upperCaseName = computed(() => address.value.toUpperCase())
    const bigSum = computed(() => sum.value * 10)


    // ******** 記得補上 return 對外匯出倉庫中的狀態、函數 ********

    return {
        sum,
        address,
        name,
        increment,
        decrement,
        upperCaseName,
        bigSum
    }
})