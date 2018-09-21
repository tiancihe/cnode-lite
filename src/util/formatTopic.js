export default function formatTopic(topic) {
    return {
        id: topic.id,
        author: {
            id: topic.author_id,
            name: topic.author.loginname,
            avatar: topic.author.avatar_url
        },
        title: topic.title,
        collected: topic.is_collect,
        isTop: topic.top,
        isGood: topic.good,
        tab: topic.tab,
        replyCount: topic.reply_count,
        visitCount: topic.visit_count,
        createAt: topic.create_at,
        lastReplyAt: topic.last_reply_at,
        content: topic.content,
        replies: topic.replies.map(reply => {
            return {
                id: reply.id,
                author: {
                    name: reply.author.loginname,
                    avatar: reply.author.avatar_url
                },
                createAt: reply.create_at,
                content: reply.content,
                replyId: reply.reply_id,
                ups: reply.ups,
                uped: reply.is_uped
            };
        })
    };
}