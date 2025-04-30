<template>
    <div>
        <h3>父元件</h3>
        <p>帳號: {{ username }}</p>
        <p>密碼: {{ password }}</p>

        <!-- v-model 用在 html 標籤上 -->
        <!-- 一般開發中，語法糖寫法 -->
        <!-- <input type="text" v-model="username" /> -->

        <!-- 實際上，v-model 是 :value 和 @input 的簡寫 -->
        <!-- <input type="text" :value="usernameHtml" @input="usernameHtml = (<HTMLInputElement>$event.target).value" /> -->



        <!-- v-model 用在自定義元件上 -->
        <!-- 一般開發語法糖寫法 -->
        <!-- <MyInput v-model="username" /> -->


        <!-- 實際上，v-model 是 :modelValue 和 @update:modelValue 的簡寫 -->
        <!-- <MyInput :modelValue="username" @update:modelValue="username = $event" /> -->

        <!-- 修改並自訂 modelValue 的命名 -->
        <MyInput v-model:box="username" v-model:mima="password" />
    </div>
</template>

<script setup lang="ts">
    import { ref, defineOptions, defineComponent } from 'vue'
    import MyInput from './MyInput.vue'

    defineOptions({
        name: 'Father'
    })

    defineComponent({
        components: {
            MyInput
        }
    })

    let username = ref('ADAM')
    let usernameHtml = ref('ADAM')
    let password = ref('123456')
</script>

<style scoped>

</style>