<template>
    <v-container fluid>
        <LoginForm v-if="!loggedIn"/>
        <v-card class="pa-3 text-xs-center" v-else>
            <v-avatar class="d-block mx-auto mb-5" size="96">
                <img :src="userInfo.avatar" alt="Avatar Image">
            </v-avatar>
            <div class="body-2">
                {{ userInfo.name }}
                <span class="caption ml-2">
                    注册于：{{ userInfo.createAt | getTimeAgo }}
                </span>
            </div>
            <div>
                CNode：
                <a 
                    class="info--text" 
                    :href="`https://cnodejs.org/user/${userInfo.name}`" 
                    target="_blank">
                    @{{ userInfo.name }}
                </a>
            </div>
            <div>
                Github：
                <a 
                    class="info--text" 
                    :href="`https://github.com/${userInfo.githubUserName}`" 
                    target="_blank">
                    @{{ userInfo.githubUserName }}
                </a>
            </div>
            <div>积分：{{ userInfo.score }}</div>
            <v-btn @click="logout">退出登录</v-btn>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import LoginForm from "@/components/LoginForm.vue";

export default {
    name: "AccountView",
    components: { LoginForm },
    computed: mapState(["loggedIn", "userInfo"]),
    methods: {
        logout() {
            this.$store.commit("setLoggedIn", false);
        }
    }
}
</script>