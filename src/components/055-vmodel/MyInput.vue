<template>
    <div>
        <input type="text"
        :value="box"
        @input="handleBox" />
        <br>
        <input type="password"
        :value="mima"
        @input="handleMima" />


    </div>
</template>

<script setup lang="ts">
// 實現方向A: 修改 vue 數據，而後修改畫面
// defineProps(['modelValue'])

defineProps(['box', 'mima'])

// 實現方向B: 修改畫面，而後修改 vue 數據
// const emit = defineEmits(['update:modelValue'])
const emit = defineEmits(['update:box', 'update:mima'])

function handleBox(e: Event) {
    emit('update:box', (<HTMLInputElement>e.target).value)
}

function handleMima(e: Event) {
    emit('update:mima', (<HTMLInputElement>e.target).value)
}
</script>

<style scoped>
input {
    border: 2px solid black;
    background-image: linear-gradient(to right, red,yellow,green);
    height: 30px;
    font-size: 20px;
    color: white;
}
</style>