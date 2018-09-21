// retrieve the cached user data from localStorage
let user = JSON.parse(localStorage.getItem("user"));
if(!user) user = {
    id: "",
    userAccessToken: "",
    autoLogin: false
};

export default {
    loading: false,
    loggedIn: false,
    userId: user.id,
    userAccessToken: user.accessToken,
    autoLogin: user.autoLogin,
    userInfo: null,
    tabs: ["all", "good", "share", "ask", "job"],
    activeTab: "all",
    totalPages: 1,
    topics: null,
    collectedTopics: null,
    topic: null
};