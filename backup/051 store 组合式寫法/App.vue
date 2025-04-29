<template>
    <div>
        <Count />
        <hr>
        <Picsum />
    </div>
</template>

<script setup lang="ts">
    import { defineOptions, defineComponent } from 'vue';
    import Count from '@/components/Count.vue';
    import Picsum from '@/components/Picsum.vue';
    
    // 定義元件名稱
    defineOptions({
        name: 'App'
    })
    defineComponent({
        components: {
            Count,
            Picsum
        }
    })

</script>
