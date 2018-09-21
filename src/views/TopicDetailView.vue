<template>
    <TopicDetail v-if="showTopic" :topic="topic"/>
</template>

<script>
import { mapState } from 'vuex';
import TopicDetail from "@/components/TopicDetail.vue";

export default {
    name: "TopicDetailView",
    components: { TopicDetail },
    props: { id: String },
    data() { return { showTopic: false }; },
    computed: mapState(["topic"]),
    created() {
        if(!this.topic) {
            this.$store.dispatch("getTopic", { id: this.id })
                .then(() => this.showTopic = true);
        } else {
            this.showTopic = true;
        }
    }
};
</script>