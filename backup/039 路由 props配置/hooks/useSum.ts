import { ref, onMounted, computed } from "vue"


export default function () {
    // ******** 數據 ********
    let sum = ref(0)

    // ******** 方法 ********
    const add = () => {
        sum.value += 1
    }

    let bigSum = computed(() => {
        return sum.value * 10
    })

    // 在 hooks 中使用生命週期函數
    onMounted(() => {
        add()
    })

    return { sum, add, bigSum }
}
