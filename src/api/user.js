import { baseUrl, callApi, initObj } from "./shared";

export function getUserInfo(loginName) {
    const url = `${baseUrl}/user/${loginName}`;
    return callApi(url);
}

export function validateAccessToken(accessToken) {
    const url = `${baseUrl}/accesstoken`;
    const init = initObj({ accesstoken: accessToken });
    return callApi(url, init);
}