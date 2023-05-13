import { createApp } from 'vue';

import App from './App.vue';
const app = createApp(App);

import { vuetify } from './plugins/vuetify';
app.use(vuetify);

import { router } from './router';
app.use(router);

app.mount('#app');