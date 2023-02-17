import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

//vue-app/src/main.js
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { fas } from '@fortawesome/free-solid-svg-icons'
// library.add(fas);
// import { fab } from '@fortawesome/free-brands-svg-icons';
// library.add(fab);
// import { far } from '@fortawesome/free-regular-svg-icons';
// library.add(far);
// import { dom } from "@fortawesome/fontawesome-svg-core";
// dom.watch();

// App.component("font-awesome-icon", FontAwesomeIcon);

import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard, faCoffee, faSpinner, faEdit, faCircle, faCheck,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faPhone, faToggleOn, faToggleOff, faLink, faPencil, faTrash, faInfoCircle, faSmile, faHome } from '@fortawesome/free-solid-svg-icons'

library.add(faHatWizard, faCoffee, faSpinner, faEdit, faCircle, faCheck,
    faPlus, faEquals, faArrowRight, faPencilAlt, faComment, faPhone, faToggleOff, faToggleOn, faLink, faPencil, faTrash, faInfoCircle, faSmile, faHome)

// App.component('font-awesome-icon', FontAwesomeIcon)
// createApp(App).mount('#app')

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
