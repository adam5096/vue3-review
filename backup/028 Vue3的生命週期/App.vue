<template>

    <Person v-if="isShow" />
    <hr>
    <button @click="isShow = !isShow">顯示/隱藏</button>
</template>

<script setup lang="ts">
    import { ref, defineOptions, defineComponent, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
    import Person from './components/Person.vue'



    defineOptions({
        name: 'App'
    })

    defineComponent({
        components: {
            Person
        }
    })

    let isShow = ref(true)


    // ******** 生命週期 ********

    console.log('setup 父-元件創建完畢')
    
    onBeforeMount(() => {
        console.log('父-元件掛載前')
    })

    onMounted(() => {
        console.log('父-元件掛載完畢')
    })

    // 3. onBeforeUpdate 替代 vue 2 中的 beforeUpdate
    onBeforeUpdate(() => {
        console.log('父-元件更新前')
    })

    // 4. onUpdated 替代 vue 2 中的 updated
    onUpdated(() => {
        console.log('父-元件更新完畢')
    })

    // 5. onBeforeUnmount 替代 vue 2 中的 beforeDestroy
    onBeforeUnmount(() => {
        console.log('父-元件卸載前')
    })


    // 6. onUnmounted 替代 vue 2 中的 destroyed
    onUnmounted(() => {
        console.log('父-元件卸載完畢')
    })

</script>