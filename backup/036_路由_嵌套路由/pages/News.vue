<template>
    <div>
        <h1>新聞</h1>
        <!-- News 裡的導航區 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <router-link :to="`/news/detail`">{{ news.title }}</router-link>
            </li>
        </ul>

        <!-- News 裡的展示區 -->
        <div class="news-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineOptions, reactive } from 'vue';

    defineOptions({
        name: 'News'
    })

    const newsList = reactive([
        { id: 'qhiwudh01', title: '抗癌食物', content: '花椰菜' },
        { id: 'qhiwudh02', title: '如何發大財', content: '學軟體' },
        { id: 'qhiwudh03', title: '震驚!!!!', content: '明天是週一' },
        { id: 'qhiwudh04', title: '好消息!!', content: '小學要開學了' }
    ])
</script>

<style scoped>

</style>