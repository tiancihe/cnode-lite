<template>
    <v-tabs
        color="transparent"
        fixed-tabs
        :value="vTabsValue">
        <v-tab
            v-for="tab in tabs"
            :key="tab"
            @click="$emit('switch-tab', tab)">
            {{ tab | getTabName }}
        </v-tab>
    </v-tabs>
</template>

<script>
export default {
  name: "AppTabs",
  props: { tabs: Array, activeTab: String },
  computed: {
      vTabsValue() {
          return this.tabs.findIndex(tab => tab === this.activeTab);
      }
  }
};
</script>