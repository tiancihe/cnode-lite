<template>
    <ul class="ul">
        <li
            v-for="topic in topics"
            :key="topic.id">
            <TopicPreview
                :topic="topic"
                @check-topic="checkTopic(topic.id)"/>
            <v-divider></v-divider>
        </li>
    </ul>
</template>

<script>
import TopicPreview from "@/components/TopicPreview.vue";

export default {
    name: "TopicPreviewList",
    components: { TopicPreview },
    props: { topics: Array },
    methods: {
        checkTopic(id) {
            this.$store.dispatch("getTopic", { id })
                .then(() => this.$router.push(`/topic/${id}`));
        }
    }
}
</script>