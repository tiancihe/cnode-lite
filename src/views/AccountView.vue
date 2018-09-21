<template>
    <v-container fluid>
        <LoginForm v-if="!loggedIn"/>
        <v-card class="pa-5" v-else>
            <v-avatar class="d-block mx-auto mb-5" size="96">
                <img :src="userInfo.avatar" alt="Avatar Image">
            </v-avatar>
            <div class="text-sm-center body-2">{{ userInfo.name }}<span class="caption ml-2">注册于：{{ userInfo.createAt | getTimeAgo }}</span></div>
            <div class="text-sm-center">
                CNode：
                <a class="info--text" :href="`https://cnodejs.org/user/${userInfo.name}`" target="_blank">@{{ userInfo.name }}</a>
            </div>
            <div class="text-sm-center">
                Github：
                <a class="info--text" :href="`https://github.com/${userInfo.githubUserName}`" target="_blank">@{{ userInfo.githubUserName }}</a>
            </div>
            <div class="text-sm-center">积分：{{ userInfo.score }}</div>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import LoginForm from "@/components/LoginForm.vue";
import TopicPreviewList from "@/components/TopicPreviewList.vue";

export default {
    name: "AccountView",
    components: { LoginForm, TopicPreviewList },
    computed: mapState(["loggedIn", "userInfo"])
}
</script>