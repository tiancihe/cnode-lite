import { baseUrl, callApi, initObj } from "./shared";

export function getUnreadMessagesCount(accessToken) {
    const url = `${baseUrl}/message/count?accesstoken=${accessToken}`;
    return callApi(url);
}

export function getMessages(accessToken) {
    const url = `${baseUrl}/messages?accesstoken=${accessToken}`;
    return callApi(url);
}

export function readAllMessages(accessToken) {
    const url = `${baseUrl}/message/mark_all`;
    const init = initObj({ accesstoken: accessToken });
    return callApi(url, init);
}

export function readMessage(accessToken, msgId) {
    const url = `${base}/message/mark_one/${msgId}`;
    const init = initObj({ accesstoken: accessToken });
    return callApi(url, init);
}