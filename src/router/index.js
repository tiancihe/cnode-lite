import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Post from "@/views/Post.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/post",
      name: "post",
      component: Post
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    // 切换到详情界面时重置滚动位置
    if(to.name === "post") {
      return { x: 0, y: 0 };
    }
    // 返回主界面时返回保存的位置
    if(to.name === "home") {
      return savedPosition;
    }
  }
});
