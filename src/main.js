import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// import 语句
import "./assets/main.css";

// 工厂函数（作用是创建一个对象）

// app 是一个vue实例，因为当前网页需要vue进行管理，所以需要一个vue实例来管理
const app = createApp(App);

// use：一个方法，作用是向这个app里注册插件
app.use(createPinia());
app.use(router);

// mount：一个方法，作用是将app挂载到某个元素上
app.mount("#app");

// main.js 全局入口文件，在html里导入
