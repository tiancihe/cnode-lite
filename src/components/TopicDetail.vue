<template>
    <v-container>
        <h4 class="display-1">{{ topic.title }}</h4>
        <span class="caption mr-2">发布于&nbsp;{{ topic.createAt | getTimeAgo }}</span>
        <span class="caption mr-2">作者&nbsp;{{ topic.author.name }}</span>
        <span class="caption">
            {{ topic.visitCount }}
            <v-icon class="caption">visibility</v-icon>
        </span>
        <v-divider></v-divider>
        <v-container v-html="topic.content"></v-container>
        <v-divider></v-divider>
        <div>{{ topic.replyCount }}&nbsp;回复</div>
        <v-divider></v-divider>
        <ul class="ul">
            <li
                class="pa-1"
                v-for="reply in topic.replies"
                :key="reply.id">
                <v-avatar class="mr-3" size="24">
                    <img :src="reply.author.avatar" alt="Avatar Image">
                </v-avatar>
                <span class="subheading font-weight-bold mr-2">{{ reply.author.name }}</span>
                <span class="caption mr-2">{{ reply.createAt | getTimeAgo }}</span>
                <v-container class="reply-content" v-html="reply.content"></v-container>
                <span class="caption">
                    {{reply.ups.length}}
                    <v-icon class="caption" @click="thumbUp(reply.id)">thumb_up</v-icon>
                </span>
                <v-divider></v-divider>
            </li>
        </ul>
    </v-container>
</template>

<script>
export default {
    name: "TopicDetail",
    props: { topic: Object },
    methods: {
        thumbUp(id) {
            this.$store.dispatch("thumbUpReply", { id });
        }
    }
};
</script>