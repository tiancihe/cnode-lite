<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2 md6 offset-md3>
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
            </v-flex>
        </v-layout>
    </v-container>
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