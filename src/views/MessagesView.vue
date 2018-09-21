<template>
    <v-container>
        <v-card>
            <ul class="ul">
                <li v-for="message in messages.unreadMessages" :key="message.id">
                    <div>{{ message }}</div>
                </li>
            </ul>
        </v-card>
        <v-card>
            <ul class="ul">
                <li v-for="message in messages.readMessages" :key="message.id">
                    <div>{{ message }}</div>
                </li>
            </ul>
        </v-card>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "MessagesView",
    computed: mapState(["messages"]),
    created() {
        this.$store.dispatch("getMessages");
    }
}
</script>