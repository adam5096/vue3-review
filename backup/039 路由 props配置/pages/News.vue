<template>
    <div>
        <h1>新聞</h1>
        <!-- News 裡的導航區 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- params 第一種寫法 -->
                <!-- <router-link :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title
                    }}</router-link> -->

                <!-- params 第二種寫法 -->
                <!-- 特別注意一: 使用 params 時，需要先在 router 中設定好路由，並且在 router 中設定好路由的 name，使用命名路由導航，而非path導航 -->
                <!-- 特別注意二: params 物件中的 key 值，此值需要與 router 中預先設定佔位參數的相同 (如本例的 path: 'detail/:id/:title/:content') -->
                <router-link :to="{
                    name: 'seemore',
                    query: {
                        id: news.id,
                        title: news.title,
                        content: news.content
                    }
                }">{{ news.title }}</router-link>
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