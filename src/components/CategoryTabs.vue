<template>
  <AppTabs
    :tabs="tabs"
    :active-tab="activeTab"
    @switch-tab="switchTab"
  />
</template>

<script>
import { mapState } from "vuex";
import AppTabs from "./AppTabs.vue";

export default {
  name: "CategoryTabs",
  components: { AppTabs },
  computed: mapState(["tabs", "activeTab"]),
  methods: {
    switchTab(tab) {
      // 首先设置activeTab状态，然后再获取数据
      new Promise(resolve => {
        this.$store.commit("setActiveTab", { tab });
        resolve();
      }).then(() => {
        this.$store.dispatch("fetchPosts");
      });
      window.scrollTo({ top: 0, behavior: "smooth"});
    }
  }
}
</script>