import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import EventObject from './components/EventObject.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'



createApp(Watch).mount('#watch')
createApp(Computed).mount('#computed')
createApp(EventObject).mount('#eventObject')
createApp(App).mount('#app')
