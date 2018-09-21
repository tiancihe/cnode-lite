<template>
    <TopicDetail :topic="topic"/>
</template>

<script>
import { mapState } from 'vuex';
import TopicDetail from "@/components/TopicDetail.vue";

export default {
    name: "TopicDetailView",
    components: { TopicDetail },
    props: { id: String },
    computed: mapState(["topic"]),
    created() {
        this.$store.dispatch("getTopic", { id: this.id });
    }
};
</script>