// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import "./style/main/index.less";

export default {
    Layout,
    enhanceApp({ app, router, siteData }) {
        // ...
    },
};
