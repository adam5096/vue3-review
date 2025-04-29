// ******** 建立屬於 count 元件的小倉庫 ********
import { defineStore } from 'pinia'

import { nanoid } from 'nanoid'

// 'picsum' 是倉庫名稱，名稱必須唯一

// { } 配置物件

// state: 定義倉庫的狀態 (數據)

// getters: 定義倉庫的計算屬性，相當於 computed 函數。state 參數即為倉庫中的 state

// actions: 定義倉庫的行為

export const usePicsumStore = defineStore('picsum', {
    state: () => ({
        picsumList: [
            {id:'eurfhe0', name:'John', email:'john@gmail.com', phone:'0912345678'},
            {id:'eurfhe1', name:'Mary', email:'mary@gmail.com', phone:'0912345678'},
            {id:'eurfhe2', name:'Tom', email:'tom@gmail.com', phone:'0912345678'}
        ],
        url: 'https://jsonplaceholder.typicode.com/users'
    }),
    actions: {
        async handleGetPicsum() {
            console.log('picsum 倉庫中的 handleGetPicsum 被呼叫了!!')
            try {
                const res = await fetch(this.url)
                const data = await res.json()

                // ******** 取回資料、擷取必要值、填入自製的物件 (key - value) ********
                // 遍歷並擷取 data 中的 name、email、phone 屬性值後，再填入到新物件中(配合新物件要求的屬性名稱)
                // 加上 nanoid() 產生 id
                let newData = data.map((item: any) => {
                    return {
                        id: nanoid(),
                        name: item.name,
                        email: item.email,
                        phone: item.phone
                    }
                })

                // ******** 將 newData 每一元素推入 picsumList(提供 render 畫面用) ********
                // 拆解: .forEach 的循環次數、要推入哪些元素，依據的是 newData 的元素數量；
                // 我們將這些元素從 newData 中讀取出來(所以.forEach放在newData身上)，並且每一次讀取後，都推入 picsumList 一次，並成為 picsumList 的後續元素
                newData.forEach((item: any) => {
                    this.picsumList.push(item)
                })


            } catch (err) {
                console.log(`唉呀，發生錯誤了，請重新整理頁面 ${err}`)
            }
        }
    }
})
