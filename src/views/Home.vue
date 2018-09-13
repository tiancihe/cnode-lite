<template>
  <div>
    <PostPreviewList id="post-list"/>
    <CategoryTabs id="categories"/>
  </div>
</template>

<script>
import CategoryTabs from "@/components/CategoryTabs.vue";
import PostPreviewList from "@/components/PostPreviewList.vue";

export default {
  name: "Home",
  components: { CategoryTabs, PostPreviewList }
};
</script>

<style scoped>
#post-list { margin-bottom: 3rem; }

#categories {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
