<template>
    <ul class="ul">
        <li
            v-for="topic in topics"
            :key="topic.id">
            <TopicPreview
                :topic="topic"
                @check-topic="checkTopic(topic.id)"/>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';
import TopicPreview from "./TopicPreview.vue";

export default {
    name: "TopicPreviewList",
    components: { TopicPreview },
    props: { topics: Array },
    methods: {
        checkTopic(id) {
            this.$store.dispatch("getTopic", { id });
        }
    }
}
</script>