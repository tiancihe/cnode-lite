<template>
  <ul class="post-preview-list">
    <li 
      class="post-preview-item"
      v-for="post in posts"
      :key="post.id"
    >
      <PostPreview :post="post" @check-post="checkPost"/>
    </li>
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import PostPreview from "./PostPreview.vue";

export default {
  name: "PostPreviewList",
  components: { PostPreview },
  computed: mapState(["posts"]),
  watch: {
    posts() {
      // 当posts发生改变时表示已经加载完了一页或者切换了tab
      window.onscroll = this.handleScrollDown;
    }
  },
  methods: {
    checkPost(id) {
      this.$store.dispatch("fetchPost", { id });
    },
    handleScrollDown() {
      // 当滚动到底部时加载另一页posts
      if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        window.onscroll = null; // 保证当滚动到底部时只触发一次加载
        const { totalPages } = this.$store.state;
        this.$store.commit("setTotalPages", { totalPages: totalPages+1 });
        this.$store.dispatch("fetchPosts");
      }
    }
  },
  mounted() {
    window.onscroll = this.handleScrollDown;
  },
  beforeDestroy() {
    window.onscroll = null;
  }
}
</script>
  
<style scoped>
.post-preview-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.post-preview-item {
  border-bottom: 1px solid lightgrey;
}
</style>