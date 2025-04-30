<template>
    <div class="grand-child">
        <h3>孫元件</h3>
        <h4>財富: {{ money }}</h4>
        <h4>車輛: 一輛 {{ y.brand }} 車，價值: {{ y.price }}</h4>
        <hr>
        <button @click="updateMoney(6)">花爺爺的錢</button>
    </div>
</template>

<script setup lang="ts">
    import { inject, defineOptions, defineComponent } from 'vue'
    defineOptions({
        name: 'GrandChild'
    })

    // inject 如果沒有接到參數， 會使用預設值
    let { money, updateMoney } = inject('moneyContext', { money: 0, updateMoney: (num:number) => {} })
    let y = inject('che', { brand: 'DEFAULT_BRAND', price: 999 })
</script>

<style scoped>
.grand-child {
    background-color: orange;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px black;
}
</style>