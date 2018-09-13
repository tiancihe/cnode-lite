import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabs: ["all", "good", "share", "ask"],
    activeTab: "all",
    totalPages: 1,
    progress: null,
    posts: null,
    post: null,
    showPost: false
  },
  mutations,
  actions
});
