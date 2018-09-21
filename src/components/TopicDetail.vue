<template>
    <v-container fluid>
        <v-alert
            class="alert"
            v-if="alert"
            v-model="alert"
            :type="alert.type"
            transition="slide-x-reverse-transition"
            dismissible
            @click="dismissAlert">
            {{ alert.message }}
        </v-alert>
        <div class="headline">{{ topic.title }}</div>
        <span class="caption mr-2">发布于&nbsp;{{ topic.createAt | getTimeAgo }}</span>
        <span class="caption mr-2">作者&nbsp;{{ topic.author.name }}</span>
        <span class="caption">
            {{ topic.visitCount }}
            <v-icon class="caption">visibility</v-icon>
        </span>
        <!-- only show the collect button when the user is logged in -->
        <v-btn
            class="caption"
            icon
            :ripple="false"
            v-if="loggedIn"
            @click="collectTopicAction(topic.id)">
            <v-icon
                :color="topic.collected ? 'info' : ''"
                small>
                {{ topic.collected ? "star" : "star_border" }}
            </v-icon>
        </v-btn>
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
                <div class="flex">
                    <v-avatar class="mr-3" size="24">
                        <img :src="reply.author.avatar" alt="Avatar Image">
                    </v-avatar>
                    <span class="subheading mr-2">{{ reply.author.name }}</span>
                    <span class="caption mr-2">{{ reply.createAt | getTimeAgo }}</span>
                    <span class="caption">
                        {{ reply.uped ? reply.ups.length + 1 : reply.ups.length}}
                        <v-icon
                            small
                            :color="reply.uped ? 'info' : ''"
                            @click="thumbUpReply(reply.id)">thumb_up</v-icon>
                    </span>
                </div>
                <v-container class="reply-content" v-html="reply.content"></v-container>
                <v-divider></v-divider>
            </li>
        </ul>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "TopicDetail",
    props: { topic: Object },
    data() {
        return {
            alert: null
        };
    },
    computed: {
        ...mapState(["loggedIn"]),
        starIcon() {
            return this.topic.collected ? "star" : "star_border";
        }
    },
    watch: {
        alert() {
            setTimeout(() => this.alert = null, 2000);
        }
    },
    methods: {
        collectTopicAction(id) {
            if(!this.loggedIn) {
                this.alert = {
                    type: "error",
                    message: "你还没有登录哦！"
                };
            }else if(!this.topic.collected) {
                this.$store.dispatch("collectTopic", { id })
                    .then(result => {
                        if(result) {
                            this.alert = {
                                type: "success",
                                message: "成功收藏！"
                            };
                            this.$store.commit("setTopic", {
                                ...this.topic,
                                collected: true
                            })
                        }else {
                            this.alert = {
                                type: "info",
                                message: "你已经收藏过了！"
                            };
                        }
                    });
            }else {
                this.$store.dispatch("uncollectTopic", { id })
                    .then(result => {
                        if(result) {
                            this.alert = {
                                type: "success",
                                message: "取消收藏！"
                            };
                            this.$store.commit("setTopic", {
                                ...this.topic,
                                collected: false
                            })
                        }else {
                            this.alert = {
                                type: "info",
                                message: "你还没有收藏这篇话题！"
                            }
                        }
                    });
            }
        },
        thumbUpReply(id) {
            if(!this.loggedIn) {
                this.alert = {
                    type: "error",
                    message: "你还没有登录哦！"
                };
            }else {
                // the api server will auto determine the action of thumb up
                this.$store.dispatch("thumbUpReply", { id })
                    .then(result => {
                        this.$store.commit("setTopic", {
                            ...this.topic,
                            replies: this.topic.replies.map(reply => {
                                // iterate through the replies array and modify the uped property of the target reply
                                if(reply.id === id) {
                                    // the result retured is the action of up or down
                                    const uped = result === "up" ? true : false;
                                    return {
                                        ...reply,
                                        uped
                                    };
                                }
                                return reply;
                            })
                        })
                    })
            }
        },
        dismissAlert() { this.alert = null; }
    }
};
</script>