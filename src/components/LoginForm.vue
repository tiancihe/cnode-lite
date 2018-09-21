<template>
    <v-container class="ma-0 pa-0" fluid>
        <v-layout class="mt-5 px-5" column>
            <v-flex>
                <v-text-field
                    v-model="accessToken"
                    label="Access Token"
                    clearable></v-text-field>
            </v-flex>
            <v-flex>
                <v-btn
                    :loading="loading"
                    block
                    @click="validate">
                    登录
                </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "LoginForm",
    data() {
        return {
            accessToken: "",
            loading: false 
        };
    },
    methods: {
        validate() {
            this.$store.dispatch("validateAccessToken", { accessToken: this.accessToken });
        }
    },
    mounted() {
        // get the cached access token from the store, the store will get the access token from localStorage
        this.accessToken = this.$store.state.userAccessToken;
    }
}
</script>