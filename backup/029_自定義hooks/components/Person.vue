<template>
    <div class="person">

        <h2>加總: {{ sum }}, 加總乘以 10 倍: {{ bigSum }}</h2>
        <hr>
        <button @click="add">點我 sum + 1</button>

    </div>

</template>

<script setup lang="ts" name="PersonTest">
    import useSum from '@/hooks/useSum'

    defineOptions({
        name: 'Person'
    })

    // ******** hooks 中的數據與函數 ********
    const { sum, add, bigSum } = useSum()

    // 使用 hooks: 模組化封裝特定功能的函數與狀態 , 才是真正意義上的 composition API


</script>

<style lang="css" scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px ;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin:0 5px;
}

li {
    font-size: 20px;
}
</style>
