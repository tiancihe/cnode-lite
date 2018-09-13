// this function takes in the json data fetched from the api
// and returns the needed information based on it.
export default function formatPosts(data) {
  if (typeof data === "object") {
    return {
      title: data.title,
      author: {
        name: data.author.loginname,
        avatar: data.author.avatar_url
      },
      isTop: data.top,
      isGood: data.isGood,
      tab: data.tab,
      createAt: data.create_at,
      lastReplyAt: data.last_reply_at,
      replyCount: data.reply_count,
      visitCount: data.visit_count,
      content: data.content,
      replies: data.replies.map(reply => {
        return {
          author: {
            name: reply.author.loginname,
            avatar: reply.author.avatar_url
          },
          createAt: reply.create_at,
          content: reply.content,
          ups: reply.ups.length
        };
      })
    };
  } else {
    throw new Error("The data passed in to formatPost() is not an Object!");
  }
}
