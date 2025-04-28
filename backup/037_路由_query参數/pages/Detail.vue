<template>
    <ul class="news-list">
        <!-- 老師影片示範版本 -->
        <li>編號: {{ route.query.id }}</li>
        <li>標題: {{ route.query.title }}</li>
        <li>內容: {{ route.query.content }}</li>
        <hr>
        <!-- 老師影片示範版本: 經修改 --> 
        <!-- <li>編號: {{ id }}</li> -->
        <!-- <li>標題: {{ title }}</li> -->
        <!-- <li>內容: {{ content }}</li> -->
    </ul>
</template>

<script setup lang="ts">
    import { defineOptions, computed } from 'vue';
    // 引入路由器
    import { useRoute } from 'vue-router';

    defineOptions({
        name: 'Detail'
    })

    const route = useRoute();

    
    // ********* 使用 computed 來處理路由參數 *********
    // const id = computed(() => route.query.id?.toString() || '');
    // const title = computed(() => route.query.title?.toString() || '');
    // const content = computed(() => route.query.content?.toString() || '');
</script>

<style lang="scss" scoped>

</style>