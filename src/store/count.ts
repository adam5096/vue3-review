// ******** 建立屬於 count 元件的小倉庫 ********
import { defineStore } from 'pinia'

// 'count' 是倉庫名稱，名稱必須唯一
// { } 配置物件
// state: 定義倉庫的狀態 (數據)
// getters: 定義倉庫的計算屬性
// actions: 定義倉庫的行為

export const useCountStore = defineStore('count', {
    state: () => ({
        sum: 6
    }),
    getters: {
        doubleCount: (state) => state.sum * 2
    }
})
