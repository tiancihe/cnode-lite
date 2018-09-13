const apiBaseURL = "https://cnodejs.org/api/v1";

export function fetchPosts(tab, page) {
  const url = `${apiBaseURL}/topics?tab=${tab}&page=${page}&limit=20`;
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      if (res.ok) {
        res.json().then(json => resolve(json.data));
      } else {
        reject(new Error(`${response.status}: ${response.statusText}`));
      }
    });
  });
}

export function fetchPost(id) {
  const url = `${apiBaseURL}/topic/${id}`;
  return new Promise((resolve, reject) => {
    fetch(url).then(res => {
      if (res.ok) {
        res.json().then(json => resolve(json.data));
      } else {
        reject(new Error(`${response.status}: ${response.statusText}`));
      }
    });
  });
}
