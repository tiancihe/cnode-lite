import Vue from "vue";
import Router from "vue-router";
import routes from "./routes";

Vue.use(Router);

export default new Router({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(to.name === "topic") {
            return { y: 0 };
        }
        if(to.name === "home") {
            return savedPosition;
        }
    }
});