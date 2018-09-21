import "@babel/polyfill";
import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/plugins";
import "@/filters";
import "@/css/index.css";

Vue.config.productionTip = false;

// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount("#app");

// import Api from "@/api";

// Api.message.getMessages(store.state.userAccessToken)
//     .then(json => console.log(json))