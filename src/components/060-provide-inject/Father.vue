<template>
    <div class="father">
        <h3>父元件</h3>
        <h4>財富: {{ money }}</h4>
        <h4>車輛: 一輛 {{ car.brand }} 車，價值: {{ car.price }}</h4>
        <Child />
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, defineOptions, defineComponent, provide } from 'vue'
    import Child from './Child.vue'

    defineOptions({
        name: 'Father'
    })

    let money = ref(1000)

    let car = reactive({
        brand: 'BMW',
        price: 100000
    })

    function updateMoney(value: number) {
        console
        money.value -= value
    }

    // 向後代元件提供數據、函數
    provide('moneyContext', { money, updateMoney })
    
    provide('che', car)

</script>

<style scoped>
.father {
    background-color: gray;
    padding: 20px;
    border-radius: 10px;
}
</style>