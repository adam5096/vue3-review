// ******** 建立屬於 count 元件的小倉庫 ********
import { defineStore } from 'pinia'

// 'count' 是倉庫名稱，名稱必須唯一

// { } 配置物件

// state: 倉庫中提供保存數據的容器(數據、變數)

// getters: 倉庫中提供的計算屬性

// actions: 倉庫中提供操作數據的行為

export const useCountStore = defineStore('count', {
    state: () => ({
        sum: 0,
        address: '火箭隊',
        name: '小智'
    }),
    actions: {
        increment(num: number) {
            this.sum += num
            console.log("count 倉庫中的 increment 被呼叫了!! ", this.sum)
        },
        decrement(num: number) {
            this.sum -= num
            console.log("count 倉庫中的 decrement 被呼叫了!! ", this.sum)
        }
    }
})
