export default {
    setLoading(state, payload) { state.loading = payload; },
    setLoggedIn(state, payload) { state.loggedIn = payload; },
    setUserId(state, payload) { state.userId = payload; },
    setUserAccessToken(state, payload) { state.userAccessToken = payload; },
    setUserInfo(state, payload) { state.userInfo = payload; },
    setActiveTab(state, payload) {
        state.activeTab = payload;
        // when the tab is switched, the total pages should reset
        state.totalPages = 1;
    },
    setTotalPages(state, payload) { state.totalPages = payload; },
    setShowTopic(state, payload) { state.showTopic = payload; },
    setSelectedTopic(state, payload) { state.selectedTopic = payload; },
    setTopic(state, payload) {
        state.topic = payload;
        // then the topic information is received, show the topic
        state.showTopic = true;
    },
    setTopics(state, payload) {
        if(state.totalPages !== 1) {
            state.topics = state.topics.concat(payload);
        } else {
            state.topics = payload;
        }
    },
    setUnreadMessages(state, payload) { state.unreadMessages = payload; },
    setReadMessages(state, payload) { state.readMessages = payload; },
    setError(state, payload) { state.error = payload; }
};