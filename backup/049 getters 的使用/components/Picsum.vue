<template>
    <div class="picsum">
        <button @click="picsumStore.handleGetPicsum">取得使用者資料</button>
        <ul>
            <!-- <li v-for="listItem in picsumList" :key="listItem.id">{{ listItem.id }} - {{ listItem.name }} - {{ listItem.email }} - {{ listItem.phone }}</li> -->
             <li v-for="listItem in picsumList" :key="listItem.id">{{ listItem.id }} - {{ listItem.name }} - {{ listItem.email }} - {{ listItem.phone }}</li>
        </ul>
    </div>
</template>

<script setup lang="js">
    import { usePicsumStore } from '@/store/picsum' // 引入 picsum 小倉庫

    import { storeToRefs } from 'pinia';

    const picsumStore = usePicsumStore()// 建立 picsum 小倉庫實例

    // 解構賦值，從倉庫中取出名為 picsumList 的狀態 ，且狀態同時保持響應特性
    // 只關心 store 中的 state、 getters，為其加上響應特性。並不會包裹 store 中的方法
    // 明顯在使用 storeToRefs 後，讀取數值 + 渲染畫面速度加快許多
    const { picsumList } = storeToRefs(picsumStore)
</script>

<style scoped>
.picsum {
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px ;
}
</style>