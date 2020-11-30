import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";


const opts = {
    theme: {
        dark: true,
    },
    icons: {
        iconfont: 'mdi'
    }
}

const vuetify = new Vuetify(opts)

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
	vuetify,
    store,
    router,
    render: h => h(App)
}).$mount("#app");