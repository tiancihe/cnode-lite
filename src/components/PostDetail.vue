<template>
  <div class="post">
    <div class="header">
      <h1>{{ post.title }}</h1>
      <p class="info smaller-font-size">
        <span>发布于&nbsp;{{ getTimeAgo(post.createAt) }}</span>
        <span>作者&nbsp;{{ post.author.name }}</span>
        <span>{{ post.visitCount }}&nbsp;次浏览</span>
      </p>
    </div>
    <hr>
    <div class="content" v-html="post.content"></div>
    <hr>
    <div class="reply-count">{{ post.replyCount }}&nbsp;回复</div>
    <ul class="replies">
      <li 
        class="reply"
        v-for="reply in post.replies"
        :key="reply.id"
      >
        <AppAuthorInfo :author="reply.author"/>
        <div v-html="reply.content"></div>
        <span class="smaller-font-size">{{ getTimeAgo(reply.createAt) }}</span>
        <span class="smaller-font-size float-right">{{reply.ups}}&nbsp;赞</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getTimeAgo } from "@/util";
import AppAuthorInfo from "./AppAuthorInfo.vue";

export default {
  name: "PostDetail",
  components: { AppAuthorInfo },
  computed: mapState(["post"]),
  methods: { getTimeAgo }
};
</script>
  
<style scoped>
.post { box-sizing: border-box; width: 100%; }

.header { padding: 0.5rem; }

.info > span::before {
  content: " • ";
  font-size: 12px;
  font-weight: bold;
}

.content { padding: 1rem; }

.reply-count { padding: 0.5rem; background-color: #f6f6f6; }

.replies {
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
}

.reply {
  display: block;
  padding: 0.5rem;
  border-bottom: 1px solid lightgrey;
}
</style>