import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vue virtual scroller
import "vue-virtual-scroller/dist/vue-virtual-scroller.css" // 引入它的 css
import VueVirtualScroller from "vue-virtual-scroller" // 引入它
app.use(VueVirtualScroller) // use 它



//把vant引入放在一个函数里
import getVant from './pulgins'

const app = createApp(App)
//调用函数放回vant组件注册  
getVant(app)
// app.use(Icon)
// app.use(Button);
app.use(store)
app.use(router).mount('#app')
