import { baseUrl, callApi, initObj } from "./shared";

export function getTopics(tab, page) {
    let url = `${baseUrl}/topics?limit=20`;
    if(tab) url += `&tab=${tab}`;
    if(page) url += `&page=${page}`;
    return callApi(url);
}

export function getTopic(topicId, accessToken) {
    let url = `${baseUrl}/topic/${topicId}`;
    if(accessToken) url += `?accesstoken=${accessToken}`;
    return callApi(url);
}

export function collectTopic(accessToken, topicId) {
    const url = `${baseUrl}/topic_collect/collect`;
    const init = initObj({
        accesstoken: accessToken,
        topic_id: topicId
    });
    return callApi(url, init);
}

export function uncollectTopic(accessToken, topicId) {
    const url = `${baseUrl}/topic_collect/de_collect`;
    const init = initObj({
        accesstoken: accessToken,
        topic_id: topicId
    });
    return callApi(url, init);
}

export function getCollectedTopics(loginName) {
    const url = `${baseUrl}/topic_collect/${loginName}`;
    return callApi(url);
}