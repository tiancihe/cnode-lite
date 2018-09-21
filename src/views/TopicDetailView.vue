<template>
    <v-container fluid>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
                <TopicDetail v-if="showTopic" :topic="topic"/>
            </v-flex>
        </v-layout>
    </v-container>
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