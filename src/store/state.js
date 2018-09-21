// retrieve the cached user data from localStorage
const user = JSON.parse(localStorage.getItem("user"));

export default {
    loggedIn: false,
    userId: user.id,
    userAccessToken: user.accessToken,
    userInfo: null,
    unreadMessagesCount: 0,
    unreadMessages: null,
    readMessages: null,
    tabs: ["all", "good", "share", "ask", "job"],
    activeTab: "all",
    totalPages: 1,
    loading: false,
    topics: null,
    topic: null,
    selectedTopicId: "",
    showTopic: false,
    navItems: [
        {
            title: "首页",
            icon: "forum",
            to: "/"
        },
        {
            title: "消息",
            icon: "message",
            to: "/messages"
        },
        {
            title: "我",
            icon: "person",
            to: "/account"
        }
    ],
    error: ""
};