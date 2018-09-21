import Vue from "vue";

Vue.filter("getTabName", tab => {
    switch (tab) {
        case "top":
            return "置顶";
        case "good":
            return "精华";
        case "share":
            return "分享";
        case "ask":
            return "问答";
        case "job":
            return "招聘";
        case "all":
        default:
            return "全部";
    }
});

Vue.filter("getTimeAgo", timeString => {
    const now = new Date(Date.now());
    const date = new Date(timeString);
    if (now.getFullYear() === date.getFullYear()) {
        if (now.getMonth() === date.getMonth()) {
            if (now.getDate() === date.getDate()) {
                if (now.getHours() === date.getHours()) {
                    return `${now.getMinutes() - date.getMinutes()}分钟前`;
                }
                return `${now.getHours() - date.getHours()}小时前`;
            }
            return `${now.getDate() - date.getDate()}天前`;
        }
        return `${now.getMonth() - date.getMonth()}月前`;
    }
    return `${now.getFullYear() - date.getFullYear()}年前`;
});