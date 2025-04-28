<template>
    <ul class="news-list">
        <!-- 老師影片示範版本: -->
        <!-- <li>編號: {{ id }}</li> -->
        <!-- <li>標題: {{ title }}</li> -->
        <!-- <li>內容: {{ content }}</li> -->

        <li>a: {{ a }}</li>
        <li>b: {{ b }}</li>
        <li>c: {{ c }}</li>
    </ul>
</template>

<script setup lang="ts">
    // 引入路由器

    defineOptions({
        name: 'Detail'
    })

    // props 第一型的配套:
    // 路由器在多元件之間導航&傳遞參數時，通常會被路由器加工成一個深層次物件
    // 經過路由規則中開啟 props 設定，達到用更便捷的方式取深層物件中的參數
    // defineProps(['id', 'title', 'content']);


    // props 第二型的配套: params 與 query 皆有效
    // defineProps(['id', 'title', 'content']);

    // props 第三型的配套: 物件寫法
    defineProps({ a: 100, b: 200 ,c:400});




</script>

<style lang="scss" scoped>

</style>