<template>
  <div class="author-info">
    <img
      class="avatar"
      alt="Avatar Image"
      v-if="author.avatar"
      :src="author.avatar"
    >
    <div class="avatar-alt" v-else></div>
    <span class="name">{{ author.name ? author.name : "" }}</span>
  </div>
</template>

<script>
export default {
  name: "AppAuthorInfo",
  props: { author: Object }
};
</script>
  
<style scoped>
.author-info {
  display: inline-block;
  height: 2rem;
}

.avatar,
.avatar-alt {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 50%;
}

.avatar-alt {
  background-color: lightskyblue;
}

.name {
  display: inline-block;
  line-height: 2rem;
  vertical-align: top;
}
</style>