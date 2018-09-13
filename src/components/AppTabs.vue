<template>
  <ul class="tabs">
    <li
      class="tab"
      v-for="tab in tabs"
      :key="tab"
      :class="{active: tab === activeTab}"
      @click="$emit('switch-tab', tab)"
    >
      {{ getTabName(tab) }}
    </li>
  </ul>
</template>

<script>
import { getTabName } from "@/util";

export default {
  name: "AppTabs",
  props: { tabs: Array, activeTab: String },
  methods: { getTabName }
};
</script>
  
<style scoped>
.tabs {
  display: flex;
  box-sizing: border-box;
  height: 3rem;
  margin: 0;
  padding: 0;
  box-shadow: 0 0 8px 0 grey;
  list-style: none;
  background-color: white;
}

.tabs .tab {
  flex: 1;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;
}

.tabs .tab.active {
  color: #80bd01;
  border-bottom: 3px solid #80bd01;
}
</style>