<template>
  <div class="post-preview" @click="$emit('check-post', post.id)">
    <AppAuthorInfo :author="post.author"/>
    <AppTag
      class="tag"
      :tag="tagName"
      :highlight="tagHighlight"
    />
    <h2>{{ post.title }}</h2>
    <span class="smaller-font-size">{{ getTimeAgo(post.createAt) }}</span>
    <span class="smaller-font-size float-right">{{ post.replyCount }}回帖</span>
  </div>
</template>

<script>
import { getTimeAgo, getTabName } from "@/util";
import AppAuthorInfo from "./AppAuthorInfo.vue";
import AppTag from "./AppTag.vue";

export default {
  name: "PostPreview",
  components: { AppAuthorInfo, AppTag },
  props: { post: Object },
  computed: {
    tagHighlight() {
      return this.post.isTop || this.post.isGood;
    },
    tagName() {
      if (this.post.isTop) {
        return "置顶";
      }
      if (this.post.isGood) {
        return "精华";
      }
      return getTabName(this.post.tab);
    }
  },
  methods: { getTimeAgo }
};
</script>
  
<style scoped>
.post-preview {
  padding: 0.25rem;
  background-color: white;
  transition: 0.5s;
  cursor: pointer;
  position: relative;
}

.post-preview:hover {
  background-color: lightgrey;
}

.tag {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>