<template>
    <div class="tag" :class="{ highlight }">{{ tag }}</div>
</template>

<script>
export default {
  name: "AppTag",
  props: { tag: String, highlight: Boolean }
};
</script>
  
<style scoped>
.tag {
  display: inline-block;
  padding: 0.5rem;
  border-radius: 1rem;
  background-color: lightgrey;
  color: grey;
}

.tag.highlight {
  background-color: #80bd01;
  color: white;
}
</style>