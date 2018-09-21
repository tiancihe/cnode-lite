import HomeView from "@/views/HomeView.vue";
import MessagesView from "@/views/MessagesView.vue";
import AccountView from "@/views/AccountView.vue";
import TopicDetailView from "@/views/TopicDetailView.vue";

export default [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/messages",
        name: "messages",
        component: MessagesView
    },
    {
        path: "/account",
        name: "account",
        component: AccountView
    },
    {
        path: "/topic/:id",
        name: "topic",
        props: true,
        component: TopicDetailView
    }
];