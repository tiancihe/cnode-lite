<template>
    <div>
        <TopicPreviewList :topics="topics"/>
    </div>
</template>

<script>
import { mapState } from "vuex";
import AppTabs from "@/components/AppTabs.vue";
import TopicPreviewList from "@/components/TopicPreviewList.vue";

export default {
    name: "HomeView",
    components: { AppTabs, TopicPreviewList },
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
                this.$store.commit("setTotalPages", { totalPages: totalPages+1 });
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