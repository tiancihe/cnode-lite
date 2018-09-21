export default {
    setLoading(state, payload) { state.loading = payload; },
    setLoggedIn(state, payload) { state.loggedIn = payload; },
    setUser(state, payload) {
        state.userId = payload.id;
        state.userAccessToken = payload.accessToken;
        state.autoLogin = payload.autoLogin;
    },
    setAutoLogin(state, payload) { state.autoLogin = payload; },
    setUserInfo(state, payload) { state.userInfo = payload; },
    setActiveTab(state, payload) {
        state.activeTab = payload;
        // when the tab is switched, the total pages should reset
        state.totalPages = 1;
    },
    setTotalPages(state, payload) { state.totalPages = payload; },
    setTopic(state, payload) { state.topic = payload; },
    setTopics(state, payload) {
        if(state.totalPages !== 1) {
            state.topics = state.topics.concat(payload);
        } else {
            state.topics = payload;
        }
    },
    setCollectedTopics(state, payload) { state.collectedTopics = payload; }
};