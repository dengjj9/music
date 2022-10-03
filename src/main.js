import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element.js'
// 导入图标库
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
import axios from 'axios'


axios.defaults.baseURL = 'http://localhost:3000'

axios.interceptors.request.use(config => {
  console.log(config)
  console.log(window.sessionStorage.getItem('token'))
  //   config 是请求对应的对象
  //config.headers.Authorization = window.sessionStorage.getItem('token')
  //config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

const app = createApp(App)
installElementPlus(app)
app.use(router).mount('#app')

app.config.globalProperties.$http = axios
app.config.globalProperties.$router = router
// app.provide('$axios',axios)
