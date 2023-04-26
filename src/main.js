import { createApp } from 'vue';

import App from './app.vue';
const app = createApp(App);

import { vuetify } from './plugins/vuetify';
app.use(vuetify);

import { router } from './router';
app.use(router);

app.mount('#app');