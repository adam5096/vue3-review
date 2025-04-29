// ******** 建立屬於 count 元件的小倉庫 ********
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { nanoid } from 'nanoid'

// 'picsum' 是倉庫名稱，名稱必須唯一

// { } 配置物件

// state: 定義倉庫的狀態 (數據)

// getters: 定義倉庫的計算屬性，相當於 computed 函數。state 參數即為倉庫中的 state

// actions: 定義倉庫的行為

// picsumList: localStorage.getItem 實現數據持久化，刷新畫面不丟數據

// ******** store 中使用組合式 API 寫法 ********
// 原來物件位置改為 callback 函數回傳
export const usePicsumStore = defineStore('picsum', () => {
    const picsumList = ref<any[]>(localStorage.getItem('picsumList') ? JSON.parse(localStorage.getItem('picsumList') || '') : [{
        id: nanoid(),
        name: '預設名稱',
        email: '預設郵件',
        phone: '預設號碼'
    }])
    const url = 'https://jsonplaceholder.typicode.com/users'

    async function handleGetPicsum() {
        console.log('picsum 倉庫中的 handleGetPicsum 被呼叫了!!')
        try {
            const res = await fetch(url)
            const data = await res.json()
            // 將 data 中的資料轉換為新的格式
            let newData = data.map((item: any) => ({
                id: nanoid(),
                name: item.name,
                email: item.email,
                phone: item.phone
            }))
            // 將 newData 中的資料遍歷並逐個 push 到 picsumList 中
            newData.forEach((item: any) => {
                picsumList.value.push(item)
            })
        } catch (err) {
            console.log(`唉呀，發生錯誤了，請重新整理頁面 ${err}`)
        }
    }

    // ******** 記得補上 return 對外匯出倉庫中的狀態、函數 ********
    return {
        picsumList,
        url,
        handleGetPicsum
    }
})
