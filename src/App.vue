<template>
    <div>
        <!-- <Count /> -->
        <!-- <hr> -->
        <!-- <Picsum /> -->
        <Father />
    </div>
</template>

<script setup lang="ts">
    import { defineOptions, defineComponent } from 'vue';
    // import Count from '@/components/Count.vue';
    // import Picsum from '@/components/Picsum.vue';
    import Father from '@/components/055-vmodel/Father.vue';
    // 定義元件名稱
    defineOptions({
        name: 'App'
    })
    defineComponent({
        components: {
            // Count,
            // Picsum,
            Father
        }
    })

</script>
