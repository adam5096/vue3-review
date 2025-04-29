<template>
    <div class="picsum">
        <button @click="handleGetPicsum">取得使用者資料</button>
        <ul>
            <!-- <li v-for="listItem in picsumList" :key="listItem.id">{{ listItem.id }} - {{ listItem.name }} - {{ listItem.email }} - {{ listItem.phone }}</li> -->
             <li v-for="listItem in picsumStore.picsumList" :key="listItem.id">{{ listItem.id }} - {{ listItem.name }} - {{ listItem.email }} - {{ listItem.phone }}</li>
        </ul>
    </div>
</template>

<script setup lang="js">
    import { ref, onMounted } from 'vue';
    import { nanoid } from 'nanoid';
    import { usePicsumStore } from '@/store/picsum' // 引入 picsum 小倉庫

    // let picsumList = ref([])

    const picsumStore = usePicsumStore()// 建立 picsum 小倉庫實例

    let url = "https://jsonplaceholder.typicode.com/users"

    const handleGetPicsum = async () => {
        try {
            const res = await fetch(url)
            const data = await res.json()

            // ******** 取回資料、擷取必要值、填入自製的物件 (key - value) ********
            // 遍歷並擷取 data 中的 name、email、phone 屬性值後，再填入到新物件中(配合新物件要求的屬性名稱)
            // 加上 nanoid() 產生 id
            let newData = data.map(item => {
                return {
                    id: nanoid(),
                    name: item.name,
                    email: item.email,
                    phone: item.phone,
                }
            })

            // ******** 將 newData 每一元素推入 picsumList(提供 render 畫面用) ********
            // 拆解: .forEach 的循環次數、要推入哪些元素，依據的是 newData 的元素數量；
            // 我們將這些元素從 newData 中讀取出來(所以.forEach放在newData身上)，並且每一次讀取後，都推入 picsumList 一次，並成為 picsumList 的後續元素

            newData.forEach(item => {
                picsumList.value.push(item)
            })
        } catch (err) {
            console.log(`唉呀，發生錯誤了，請重新整理頁面 ${err}`)
        }
    }

</script>

<style scoped>
.picsum {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px ;
}
</style>