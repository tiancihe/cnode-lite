// this function takes in the json data fetched from the api
// and returns the needed information based on it.
export default function formatPost(data) {
  if (Array.isArray(data)) {
    return data.map(post => {
      return {
        id: post.id,
        author: {
          name: post.author.loginname,
          avatar: post.author.avatar_url
        },
        title: post.title,
        isTop: post.top,
        isGood: post.good,
        tab: post.tab,
        createAt: post.create_at,
        lastReplyAt: post.last_reply_at,
        replyCount: post.reply_count,
        visitCount: post.visit_count
      };
    });
  } else {
    throw new Error("The data passed in to formatPosts() is not an Array!");
  }
}
