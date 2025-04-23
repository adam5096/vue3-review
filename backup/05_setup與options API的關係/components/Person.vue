<template>
    <div class="person">
        <h2>姓名: {{ name }}</h2>
        <h2>年齡: {{ age }}</h2>
        <h2>性別: {{ gender }}</h2>

        <br><button @click="changeName">修改姓名</button>
        <br><button @click="changeAge">修改年齡</button>
        <br><button @click="showTel">查看聯絡方式</button>
        <hr>
        <h2>a: {{ a }}</h2>
        <button @click="changeA">修改a</button>
    </div>
</template>

<script lang="ts">

    export default {
        name: 'Person',
        beforeCreate() {
            console.log('@@ beforeCreate')
        },
        // 可以與 setup 中的數據共存
        data() {
            return {
                a:100
            }
        },
        // 可以與 setup 中的函數共存
        methods: {
            changeA() {
                this.a += 1
            }
        },
        setup() {
            // setup 函數中的 this 是 undefined，vue 3 中已經弱化了 this

            // 數據
            let name = ('哈哈')
            let age = (18)
            let gender = ('男')
            let tel = ('12345678901')


            // 函數
            function changeName() {
                console.log('@@ changeName fired')
                name = '小明' // 這樣修改 name 不會觸發響應式
                console.log(name) // name 確實改變了，但畫面不會變
            }
            function changeAge() {
                console.log('@@ changeAge fired')
                age += 1
                console.log(age)
            }
            function showTel() {
                console.log('@@ showTel fired')
                alert(tel)
                console.log(tel)
            }
            // 將數據、函數交出去，模板中才能使用
            return {
                name,
                age,
                gender,
                tel,
                changeName,
                changeAge,
                showTel
            }

            // return () => "hello world"
        }
    }
</script>

<style lang="css" scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px ;
    border-radius: 10px;
    padding: 20px;
}
</style>
