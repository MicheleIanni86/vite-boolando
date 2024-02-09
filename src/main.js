import { createApp } from 'vue';
import App from './App.vue';

import * as bootstrap from 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { faTwitter, faFontAwesome, faYoutube } from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faFontAwesome);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
