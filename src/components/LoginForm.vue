<template>
    <v-container>
        <v-layout class="mt-5 px-5 text-xs-center" column>
            <v-flex>
                <v-text-field
                    label="Access Token"
                    v-model="accessToken"
                    clearable></v-text-field>
            </v-flex>
            <v-flex>
                <v-checkbox
                    label="自动登录"
                    v-model="autoLogin"></v-checkbox>
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
            autoLogin: false,
            loading: false
        };
    },
    methods: {
        validate() {
            // set the auto login preference before validation starts, 
            // because when the validation succeded, the user preferences will be stored
            this.$store.commit("setAutoLogin", this.autoLogin);
            this.$store.dispatch("validateAccessToken", { accessToken: this.accessToken });
        }
    },
    created() {
        // get the cached access token from the store, the store will get the access token from localStorage
        this.accessToken = this.$store.state.userAccessToken;
        this.autoLogin = this.$store.state.autoLogin;
    }
}
</script>