/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

import App from "./App.vue";
import router from "@/router";
import { VueMaskDirective } from 'v-mask';
import { store, key } from "./store/index";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const vMaskV2 = VueMaskDirective;
const vMaskV3 = {
    beforeMount: vMaskV2.bind,
    updated: vMaskV2.componentUpdated,
    unmounted: vMaskV2.unbind
};

const app = createApp(App)

app.directive('mask', vMaskV3);
app.component('QuillEditor', QuillEditor)

app.use(router);

app.use(store, key);

registerPlugins(app)

app.mount('#app')
