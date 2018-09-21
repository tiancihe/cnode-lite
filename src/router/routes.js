import store from "@/store";
import HomeView from "@/views/HomeView.vue";
import AccountView from "@/views/AccountView.vue";
import MyCollectionsView from "@/views/MyCollectionsView.vue";
import TopicDetailView from "@/views/TopicDetailView.vue";

export default [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/account",
        name: "account",
        component: AccountView
    },
    {
        path: "/collections",
        name: "collections",
        component: MyCollectionsView,
        beforeEnter(to, from, next) {
            if(!store.state.loggedIn) {
                next("/account");
            } else {
                store.dispatch("getCollectedTopics")
                    .then(next)
            }
        }
    },
    {
        path: "/topic/:id",
        name: "topic",
        props: true,
        component: TopicDetailView
    }
];