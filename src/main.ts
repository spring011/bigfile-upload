import 'uno.css';
import { createApp } from 'vue';
import './style/style.scss';
import App from './views/App.vue';

import uploader from 'vue-simple-uploader';
import 'vue-simple-uploader/dist/style.css';

createApp(App).use(uploader).mount('#app');
