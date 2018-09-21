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
            .catch(error => console.log(error));
    },
    getTopic({ commit, state }, { id }) {
        const { loggedIn, userAccessToken } = state;
        commit("setLoading", true);
        return new Promise(resolve => {
            Api.topic.getTopic(id, userAccessToken)
                .then(json => {
                    const topic = formatTopic(json.data);
                    commit("setTopic", topic);
                    commit("setLoading", false);
                    resolve();
                })
                .catch(error => console.log(error));
        });
    },
    validateAccessToken({ commit, dispatch, state }, { accessToken }) {
        const { autoLogin } = state;
        Api.user.validateAccessToken(accessToken)
            .then(json => {
                if(json.success) {
                    // when the validation succeded, store userId and accessToken, then get user information
                    const user = { id: json.id, accessToken, autoLogin };
                    localStorage.setItem("user", JSON.stringify(user));
                    commit("setUser", user);
                    dispatch("getUserInfo", { loginName: json.loginname });
                }
            })
            .catch(error => console.log(error));
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
                    score: data.score
                };
                commit("setUserInfo", userInfo);
                commit("setLoggedIn", true);
                commit("setLoading", false);
            })
            .catch(error => console.log(error));
    },
    collectTopic({ state }, { id }) {
        const { userAccessToken } = state;
        return new Promise(resolve => {
            Api.topic.collectTopic(userAccessToken, id)
                .then(json => resolve(json.success))
                .catch(error => console.log(error));
        });
    },
    uncollectTopic({ state }, { id }) {
        const { userAccessToken } = state;
        return new Promise((resolve, reject) => {
            Api.topic.uncollectTopic(userAccessToken, id)
                .then(json => resolve(json.success))
                .catch(error => console.log(error));
        });
    },
    getCollectedTopics({ commit, state }) {
        const { userInfo } = state;
        commit("setLoading", true);
        Api.topic.getCollectedTopics(userInfo.name)
            .then(json => {
                const collectedTopics = formatTopics(json.data);
                commit("setCollectedTopics", collectedTopics);
                commit("setLoading", false);
            });
    },
    thumbUpReply({ state }, { id }) {
        const { userAccessToken } = state;
        return new Promise(resolve => {
            Api.reply.thumbUpReply(id, userAccessToken)
                .then(json => resolve(json.action))
                .catch(error => console.log(error));
        });
    }
};