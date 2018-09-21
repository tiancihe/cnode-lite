import { baseUrl, callApi, initObj } from "./shared";

export function createReply(topicId, accessToken, content, replyId) {
    const url = `${baseUrl}/topic/${topicId}/replies`;
    const body = {
        accesstoken: accessToken,
        content
    };
    if(replyId) body.reply_id = replyId;
    const init = initObj(body);
    return callApi(url, init);
}

export function thumbUpReply(replyId, accessToken) {
    const url = `${baseUrl}/reply/${replyId}/ups`;
    const init = initObj({ accesstoken: accessToken });
    return callApi(url, init);
}