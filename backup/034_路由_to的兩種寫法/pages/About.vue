<template>
    <div>
        <h1>關於我</h1>
    </div>
</template>

<script setup lang="ts">
    import { defineOptions, onMounted, onUnmounted } from 'vue';

    defineOptions({
        name: 'About'
    })

    // ********** 經過路由器選染的元件，會經過 onMounted 和 onUnmounted 生命週期 **********
    onMounted(() => {
        console.log('About 頁面已經掛載')
    })

    onUnmounted(() => {
        console.log('About 頁面已經卸載')
    })
</script>

<style scoped>

</style>