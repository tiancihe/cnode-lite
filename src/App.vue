<template>
  <div id="app">
    <ProgressBar
      id="progress-bar"
      v-if="progress"
      :totalStages="progress.totalStages"
      :currentStage="progress.currentStage"
      @finish-progress="finishProgress"
    />
    <NavigationBar id="nav"/>
    <router-view id="main"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProgressBar from "@/components/ProgressBar.vue";
import NavigationBar from "./components/NavigationBar.vue";

export default {
  name: "App",
  components: { ProgressBar, NavigationBar },
  computed: Object.assign(
    {},
    // map store中的showPost状态到当前组件，从而能够watch
    mapState(["progress", "showPost"]),
    {
      // 将当前路由状态映射到当前组件，从而能够watch
      currentRoute() {
        return this.$route.name;
      }
    }
  ),
  watch: {
    showPost(val, oldVal) {
      // 当showPost为true时，路由至post，否则路由至home
      if (val === true) {
        this.$router.push("/post");
      } else {
        this.$router.push("/");
      }
    },
    currentRoute(val, oldVal) {
      // 当路由状态从post转至home时，设置showPost的值为false
      if (oldVal === "post" && val === "home") {
        this.$store.commit("setShowPost", { showPost: false });
      }
    }
  },
  methods: {
    finishProgress() {
      // 当ProgressBar组件触发finish-progress事件时，设置store中的progress状态为null
      this.$store.commit("setProgress", { progress: null });
    }
  },
  created() {
    this.$store.dispatch("fetchPosts");
  }
};
</script>
  
<style>
html { font-family: Arial, Helvetica, sans-serif; }
body { overflow-x: hidden; margin: 0; padding: 0; }

#app { padding-top: 4rem; }

#progress-bar,
#nav {
  width: 100%;
  position: fixed;
  top: 0;
}
#progress-bar { z-index: 100; }
#nav { z-index: 10; }

/* 辅助类 */
.smaller-font-size { font-size: 0.75rem; }

.float-right { float: right; }

/* 以下为通过v-html直接渲染到DOM中的内容的样式 */

/* 限制图片大小并居中 */
.markdown-text img {
  display: block;
  max-width: 60%;
  height: auto;
  margin: 0 auto;
}
</style>