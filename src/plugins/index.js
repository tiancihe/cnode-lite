import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify, {
    theme: {
        primary: "#F5F5F5",
        secondary: "#E0E0E0",
        accent: "#2962FF",
        error: "#FF5722",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50"
    }
});