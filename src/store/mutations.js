
export default {
  setProgress(state, { progress }) {
    state.progress = progress;
  },
  setActiveTab(state, { tab }) {
    state.activeTab = tab;
    // 当切换tab后，重置totalPages
    state.totalPages = 1;
  },
  setTotalPages(state, { totalPages }) {
    state.totalPages = totalPages;
  },
  setPosts(state, { data }) {
    if(state.totalPages !== 1) {
      // 如果totalPages不为1，则表明当前加载的posts不止一页
      // 此时应将得到的数据添加到posts数组的末尾
      state.posts = state.posts.concat(data);
    } else {
      state.posts = data;
    }
  },
  setPost(state, { data }) {
    state.post = data;
  },
  setShowPost(state, { showPost }) {
    state.showPost = showPost;
  }
};
