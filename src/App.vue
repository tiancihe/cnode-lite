<template>
    <v-app>
        <v-progress-linear
            class="progress-bar"
            color="accent"
            :active="loading"
            indeterminate></v-progress-linear>
        <v-toolbar
            app
            dense
            scroll-off-screen>
            <v-toolbar-title>
                <v-btn
                    color="transparent"
                    flat
                    :ripple="false"
                    v-if="!showBackButton"
                    to="/"
                    exact>
                    <img
                        id="logo-image"
                        src="@/assets/cnodejs.svg"
                        alt="CNode Logo"/>
                </v-btn>
                <v-btn
                    icon
                    v-else
                    @click="$router.back()">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn
                    flat
                    v-for="item in navItems"
                    :key="item.to"
                    :to="item.to"
                    exact>{{ item.title }}</v-btn>
            </v-toolbar-items>
            <AppTabs
                v-if="showTabs"
                slot="extension"
                :tabs="tabs"
                :active-tab="activeTab"
                @switch-tab="switchTab"/>
        </v-toolbar>

        <v-content
            v-touch="{
                left: () => swipe('Left'),
                right: () => swipe('Right')
            }">
            <router-view/>
        </v-content>

        <v-bottom-nav
            class="hidden-sm-and-up"
            color="white"
            app
            :active="0"
            :value="true">
            <v-btn
                flat
                v-for="item in navItems"
                :key="item.to"
                :to="item.to"
                exact>
                {{ item.title }}
                <v-icon>{{ item.icon }}</v-icon>
            </v-btn>
        </v-bottom-nav>
    </v-app>
</template>

<script>
import { mapState } from 'vuex';
import AppTabs from "@/components/AppTabs.vue";

export default {
    name: "App",
    components: { AppTabs },
    computed: {
        ...mapState(["loading", "loggedIn", "autoLogin", "userAccessToken", "tabs", "activeTab", "selectedTopic", "unreadMessagesCount"]),
        showTabs() {
            return this.$route.name === "home";
        },
        showBackButton() {
            return this.$route.name !== "home";
        },
        navItems() {
            return [
                {
                    title: "首页",
                    icon: "forum",
                    to: "/"
                },
                {
                    title: "我的收藏",
                    icon: "collections_bookmark",
                    to: "/collections"
                },
                {
                    title: this.loggedIn ? "我" : "登录",
                    icon: "person",
                    to: "/account"
                }
            ];
        }
    },
    methods: {
        switchTab(tab) {
            this.$store.commit("setActiveTab", tab);
            this.$store.dispatch("getTopics");
            window.scrollTo({ top: 0, behavior: "smooth"});
        },
        swipe(direction) {
            // get the current index of the active tab in the tabs array
            const currentIndex = this.tabs.findIndex(tab => tab === this.activeTab);
            let index;
            // get the next index
            if(direction === "Right") index = currentIndex + 1;
            else if(direction === "Left") index = currentIndex - 1;
            // if the swipe direction is neither left nor right, igore this swipe action
            else return;
            let nextIndex;
            // get the RIGHT next index
            if(index > this.tabs.length - 1) nextIndex = index - this.tabs.length;
            else if(index < 0) nextIndex = index + this.tabs.length;
            else nextIndex = index;
            this.switchTab(this.tabs[nextIndex]);
        }
    },
    created() {
        this.$store.dispatch("getTopics");
        // if the auto login preference is set to true and the userAccessToken is present,
        // validate the access token and if succeded, the user should be logged in
        if(this.autoLogin && this.userAccessToken) {
            this.$store.dispatch("validateAccessToken", { accessToken: this.userAccessToken });
        }
    }
};
</script>