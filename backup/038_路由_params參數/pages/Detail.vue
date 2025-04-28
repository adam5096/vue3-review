<template>
    <ul class="news-list">
        <!-- 老師影片示範版本: -->
        <li>編號: {{ params.id }}</li>
        <li>標題: {{ params.title }}</li>
        <li>內容: {{ params.content }}</li>
    </ul>
</template>

<script setup lang="ts">
    import { defineOptions, computed, toRefs } from 'vue';
    // 引入路由器
    import { useRoute } from 'vue-router';

    const route = useRoute();

    const { params} = toRefs(route);

    defineOptions({
        name: 'Detail'
    })


</script>

<style lang="scss" scoped>

</style>