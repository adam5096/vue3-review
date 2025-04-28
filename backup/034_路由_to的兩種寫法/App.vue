<template>

    <div class="">
        <Header />
        <!-- 導航區 -->
        <div class="navigate">
            <!-- ********** 原生JS 使用 a 標籤 進行導航 ********** -->
            <!-- <a href="#/home">首頁</a> -->
            <!-- <a href="#/home">首頁</a> -->
            <!-- <a href="#/about">新聞</a> -->

            <hr>

            <!-- ********** vue 3 使用 router-link，通過使用者按下按鈕 進行導航 ********** -->
            <!-- active-class 是 vue-router 預設提供的類別名稱 -->
            <router-link to="/home" class="router-link" active-class="active">首頁</router-link>
            <br>
            <router-link to="/about" class="router-link" active-class="active">關於</router-link>
            <br>
            <router-link :to="{ path: '/news' }" class="router-link" active-class="active">新聞</router-link>

        </div>

        <!-- 展示區 -->
        <div class="main-content">
            此處展示各種元件
            <!-- 告訴路由器在監測到路由地址發生變化時，會自動將對應的元件渲染到 router-view 中 -->
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Header from '@/components/Header.vue';
    import { ref, defineOptions, defineComponent } from 'vue';

    // 定義元件名稱
    defineOptions({
        name: 'App'
    })

    // 定義元件
    defineComponent({
        components: {
            Header
        }
    })
</script>

<style scoped>
    .active {
        color: chocolate;
    }

    .router-link:hover {
        color: blue;
        font-size: 25px;
        background-color: yellow;
    }

    .router-link:active {
        color: red;
    }
</style>