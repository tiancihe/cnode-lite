import Api from "@/api";
import { formatTopics, formatTopic } from "@/util";

export default {
    getTopics({ commit, state }) {
        const { activeTab, totalPages } = state;
        commit("setLoading", true);
        Api.topic.getTopics(activeTab, totalPages)
            .then(json => {
                const topics = formatTopics(json.data);
                commit("setTopics", topics);
                commit("setLoading", false);
            })
            .catch(error => console.error(error));
    },
    getTopic({ commit, state }, { id }) {
        const { userAccessToken } = state;
        commit("setLoading", true);
        Api.topic.getTopic(id, userAccessToken)
            .then(json => {
                const topic = formatTopic(json.data);
                commit("setTopic", topic);
                commit("setLoading", false);
            })
            .catch(error => console.error(error));
    },
    validateAccessToken({ commit, dispatch }, { accessToken }) {
        Api.user.validateAccessToken(accessToken)
            .then(json => {
                // when the validation succeded, store userId and accessToken, then get user information
                const user = { id: json.id, accessToken };
                localStorage.setItem("user", JSON.stringify(user));
                commit("setUser", user);
                dispatch("getUserInfo", { loginName: json.loginname });
            })
            .catch(error => console.error(error));
    },
    getUserInfo({ commit }, { loginName }) {
        commit("setLoading", true);
        Api.user.getUserInfo(loginName)
            .then(json => {
                const { data } = json;
                const userInfo = {
                    name: data.loginname,
                    avatar: data.avatar_url,
                    githubUserName: data.githubUsername,
                    createAt: data.create_at,
                    score: data.score,
                    recentTopics: data.recent_topics.map(topic => topic.id),
                    recentReplies: data.recent_replies.map(repliedTopic => repliedTopic.id)
                };
                commit("setUserInfo", userInfo);
                commit("setLoggedIn", true);
                commit("setLoading", false);
            })
            .catch(error => console.error(error));
    },
    getUnreadMessagesCount({ commit, state }) {
        const { accessToken } = state;
        Api.message.getUnreadMessagesCount(accessToken)
            .then(json => console.log(json))
            .catch(error => console.log(error));
    },
    getMessages() {
        const { accessToken } = state;
        Api.message.getMessages(accessToken)
            .then(json => {
                const { }
            })
            .catch();
    },
    thumbUpReply({ state }, { id }) {
        const { userAccessToken } = state;
        Api.reply.thumbUpReply(id, userAccessToken)
            .then(json => console.log(json))
            .catch(error => console.error(error));
    }
};