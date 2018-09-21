<template>
    <v-container>
        <TopicPreviewList v-if="collectedTopics" :topics="collectedTopics"/>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';
import TopicPreviewList from "@/components/TopicPreviewList.vue";

export default {
    name: "MyCollectionsView",
    components: { TopicPreviewList },
    computed: mapState(["collectedTopics"]),
    created() {
        this.$store.dispatch("getCollectedTopics");
    }
}
</script>