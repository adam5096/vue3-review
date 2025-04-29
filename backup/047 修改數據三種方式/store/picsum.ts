// ******** 建立屬於 count 元件的小倉庫 ********
import { defineStore } from 'pinia'

// 'picsum' 是倉庫名稱，名稱必須唯一

// { } 配置物件

// state: 定義倉庫的狀態 (數據)

// getters: 定義倉庫的計算屬性

// actions: 定義倉庫的行為

export const usePicsumStore = defineStore('picsum', {
    state: () => ({
        picsumList: [
            {id:'eurfhe0', name:'John', email:'john@gmail.com', phone:'0912345678'},
            {id:'eurfhe1', name:'Mary', email:'mary@gmail.com', phone:'0912345678'},
            {id:'eurfhe2', name:'Tom', email:'tom@gmail.com', phone:'0912345678'}
        ]
    })
})
