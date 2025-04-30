<!-- ******** 子元件存在目的，是為證明 provide 和 inject 在父、孫之間傳遞數據工作中不會打擾子元件******** -->

<template>
    <div class="child">
        <h3>子元件</h3>
        <GrandChild />
    </div>
</template>

<script setup lang="ts">
import GrandChild from './GrandChild.vue'
import { defineOptions, defineComponent } from 'vue'
defineOptions({
    name: 'Child'
})

defineComponent({
    components: {
        GrandChild
    }
})
</script>

<style scoped>
.child {
    margin-top: 20px;
    background-color: skyblue;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
}
</style>