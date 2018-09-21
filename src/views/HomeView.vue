<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm8 offset-sm2>
                <TopicPreviewList v-if="topics" :topics="topics"/>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12 justify-center>
                <div class="pa-3">加载更多......</div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState } from "vuex";
import TopicPreviewList from "@/components/TopicPreviewList.vue";

export default {
    name: "HomeView",
    components: { TopicPreviewList },
    computed: mapState(["topics"]),
    watch: {
        topics() {
            window.onscroll = this.handleScrollDown;
        }
    },
    methods: {
        handleScrollDown() {
            if(window.scrollY + window.innerHeight >= document.body.scrollHeight) {
                window.onscroll = null;
                const { totalPages } = this.$store.state;
                this.$store.commit("setTotalPages", totalPages + 1);
                this.$store.dispatch("getTopics");
            }
        }
    },
    mounted() {
        window.onscroll = this.handleScrollDown;
    },
    destroyed() {
        window.onscroll = null;
    }
};
</script>