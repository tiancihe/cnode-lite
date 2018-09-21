export default function formatTopics(topics) {
    return topics.map(topic => {
        return {
            id: topic.id,
            author: {
                id: topic.author_id,
                name: topic.author.loginname,
                avatar: topic.author.avatar_url
            },
            title: topic.title,
            isTop: topic.top,
            isGood: topic.good,
            tab: topic.tab,
            createAt: topic.create_at,
            lastReplyAt: topic.last_reply_at,
            replyCount: topic.reply_count,
            visitCount: topic.visit_count
        };
    });
}