# 聽見你多次提到"副作用"，請問這是甚麼意思?

在程式設計中，"副作用"（Side Effects）是一個重要的概念，讓我來解釋：

**副作用的定義**：
副作用是指除了計算主要結果之外，對外部環境產生的任何影響。簡單來說，就是除了返回計算結果之外，還做了其他事情。

**常見的副作用例子**：

1. **修改外部變數**
```javascript
let count = 0
function increment() {
    count++  // 副作用：修改了外部變數
    return count
}
```

2. **發送 API 請求**
```javascript
async function fetchData() {
    const response = await fetch('https://api.example.com/data')  // 副作用：發送網路請求
    return response.json()
}
```

3. **操作 DOM**
```javascript
function updateTitle(title) {
    document.title = title  // 副作用：修改了網頁標題
}
```

4. **寫入本地存儲**
```javascript
function saveData(data) {
    localStorage.setItem('userData', JSON.stringify(data))  // 副作用：修改了本地存儲
}
```

5. **修改全局狀態**
```javascript
function updateGlobalState() {
    store.dispatch('updateUser', userData)  // 副作用：修改了全局狀態
}
```

**沒有副作用的函數（純函數）例子**：
```javascript
// 這是一個純函數，沒有副作用
function add(a, b) {
    return a + b  // 只返回計算結果，沒有其他影響
}

// 在 Vue 中的 computed 通常應該是純函數
const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value  // 只返回計算結果
})
```

**為什麼要區分副作用**：
1. **可預測性**：沒有副作用的函數更容易預測其行為
2. **可測試性**：純函數更容易測試，因為結果只依賴於輸入
3. **可維護性**：副作用會使程式碼更難理解和維護
4. **並發處理**：沒有副作用的函數更容易進行並發處理

在 Vue 中：
- `computed` 應該盡量避免副作用，專注於計算和返回結果
- `watch` 則專門用於處理副作用，當數據變化時執行額外的操作

這就是為什麼在 Vue 中，我們通常：
- 使用 `computed` 來計算派生值
- 使用 `watch` 來處理副作用（如 API 調用、DOM 操作等）

在你的 `Person.vue` 中，`fullName` 的 computed 就是一個沒有副作用的純函數，它只是計算並返回一個新的值。而如果我們需要基於 `fullName` 的變化來執行某些操作（如發送通知或更新其他數據），那就需要使用 `watch` 來處理這些副作用。

# 請問現在 vue 3  語法中在使用 <router-view>, <router-link> 時，是否需要顯式書寫 import { RouterView } from 'vue-router'; 的語句?

不需要顯式導入 `RouterView`。在 Vue 3 中，`<router-view>` 組件是 Vue Router 自動註冊的全局組件，不需要手動導入。

讓我幫您移除這個不必要的導入：

### 說明：

1. **Vue Router 全局組件**：
   - `<router-view>` 是 Vue Router 自動註冊的全局組件
   - 不需要手動導入就可以在模板中使用

2. **其他 Vue Router 全局組件**：
   - `<router-link>` 也是全局組件
   - 同樣不需要手動導入

3. **需要導入的情況**：
   - 只有當您需要使用 Vue Router 的 API（如 `useRouter`、`useRoute` 等）時才需要導入
   - 例如：`import { useRouter, useRoute } from 'vue-router'`

所以，您可以直接在模板中使用 `<router-view>` 和 `<router-link>` 而不需要任何導入語句。