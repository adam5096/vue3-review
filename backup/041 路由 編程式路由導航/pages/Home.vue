<template>
    <div>
        <h1>首頁</h1>
    </div>
</template>

<script setup lang="ts">
import {  onMounted } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({
    name: 'Home'
})

const router = useRouter();

// onMounted(() => {
//     setTimeout(() => {
//         router.push('/news')
//     }, 3000)
// })

// 程式導航: 脫離 router-link, 以其他方式的導航行為，使用程式碼進行導航
</script>

<style scoped>

</style>