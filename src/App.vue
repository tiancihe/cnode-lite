<template>
    <v-app>
        <v-progress-linear
            class="progress-bar"
            color="accent"
            :active="loading"
            fixed
            indeterminate></v-progress-linear>
        <v-toolbar
            app
            dense
            scroll-off-screen>
            <v-toolbar-title>
                <v-btn color="transparent" flat :ripple="false" v-if="!showBackButton" to="/" exact>
                    <img id="logo-image" src="@/assets/cnodejs.svg" alt="CNode Logo"/>
                </v-btn>
                <v-btn icon v-else to="/" exact><v-icon>arrow_back</v-icon></v-btn>
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

        <v-content>
            <router-view/>
        </v-content>

        <v-bottom-nav
            class="hidden-sm-and-up"
            color="primary"
            fixed
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
        ...mapState(["loading", "tabs", "activeTab", "navItems", "showTopic", "selectedTopic", "unreadMessagesCount"]),
        showTabs() {
            return this.$route.name === "home";
        },
        showBackButton() {
            return this.$route.name !== "home";
        }
    },
    watch: {
        showTopic(val) {
            if(val) {
                this.$router.push(`/topic/${this.selectedTopic}`);
            }
        }
    },
    methods: {
        switchTab(tab) {
            this.$store.commit("setActiveTab", tab);
            this.$store.dispatch("getTopics");
            window.scrollTo({ top: 0, behavior: "smooth"});
        }
    },
    created() {
        this.$store.dispatch("getTopics");
    }
};
</script>