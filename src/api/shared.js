export const baseUrl = "https://cnodejs.org/api/v1";

export function callApi(url, init) {
    return new Promise((resolve, reject) => {
        let promise;
        if(!init) {
            promise = fetch(url);
        } else {
            promise = fetch(url, init);
        }
        promise.then(response => {
            if (response.ok) {
                response.json().then(json => resolve(json));
            }
        })
            .catch(error => reject(error));
    });
}

export function initObj(body) {
    return {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    };
}