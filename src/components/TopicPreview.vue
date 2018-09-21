<template>
    <v-container
        class="pa-2 cursor-pointer"
        style="width: 100%;"
        fluid
        v-ripple
        @click="$emit('check-topic', topic.id)">
        <v-avatar size="32" class="mr-2">
            <img :src="topic.author.avatar" alt="Avatar Image">
        </v-avatar>
        <span class="subheading mr-2">{{ topic.author.name }}</span>
        <span class="caption">{{ topic.createAt | getTimeAgo }}</span>
        <span
            class="topic-tag d-inline-block"
            :class="{ highlight: topic.isTop || topic.isGood }">
            {{ topic.isTop ? "top" : (topic.isGood ? "good" : topic.tab) | getTabName }}
        </span>
        <div class="title mx-5 my-2">{{ topic.title }}</div>
        <div class="flex-justify-end">
            <span class="d-inline-block caption">
                {{ topic.visitCount }}
                <v-icon class="caption">visibility</v-icon>
            </span>
            <span class="d-inline-block caption">
                {{ topic.replyCount }}
                <v-icon class="caption">reply</v-icon>
            </span>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "TopicPreview",
    props: { topic: Object }
};
</script>

<style scoped>
/* special style for the tag */
.topic-tag {
    padding: 0.4rem;
    border-radius: 1rem;
    background-color: lightgrey;
    color: grey;
    float: right;
}

.topic-tag.highlight {
    background-color: #80bd01;
    color: white;
}
</style>