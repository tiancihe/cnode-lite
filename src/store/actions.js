import { fetchPosts, fetchPost } from "@/api";
import { formatPosts, formatPost } from "@/util";

export default {
  fetchPosts({ commit, state }) {
    const { activeTab, totalPages, progress } = state;
    // 设置progress状态，显示ProgressBar组件
    commit("setProgress", { progress: { totalStages: 3, currentStage: 0 } });
    // 第二个参数为totalPages是为了fetch最后一页的数据
    fetchPosts(activeTab, totalPages)
      .then(rawData => {
        // 得到数据后设置progress阶段为1，然后commit setPosts
        commit("setProgress", { progress: Object.assign({}, progress, { currentStage: 1 })})
        return new Promise(resolve => {
          const data = formatPosts(rawData);
          commit("setPosts", { data });
          resolve();
        });
      })
      // 最后设置阶段为2
      .then(() => {
        commit("setProgress", { progress: Object.assign({}, progress, { currentStage: 2 })});
      })
      .catch(error => console.log(error));
  },
  fetchPost({ commit, state }, { id }) {
    let { progress } = state;
    commit("setProgress", { progress: { totalStages: 2, currentStage: 0 } });
    fetchPost(id)
      .then(rawData => {
        commit("setProgress", { progress: Object.assign({}, progress, { currentStage: 1 })})
        return new Promise(resolve => {
          const data = formatPost(rawData);
          commit("setPost", { data });
          resolve();
        });
      })
      .then(() => {
        // 当store中的post状态确实包含数据后才显示该post
        commit("setShowPost", { showPost: true });
        commit("setProgress", { progress: Object.assign({}, progress, { currentStage: 2 })});
      })
      .catch(error => console.log(error));
  }
};
