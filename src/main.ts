import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import './styles/index.scss'
import 'virtual:svg-icons-register'
import VueLazyloadNext from 'vue-lazyload-next'
import Error from '~/assets/icons/loading-error.svg'
import Loading from '~/assets/icons/loading-audio.svg'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueLazyloadNext, {
  error: Error,
  loading: Loading,
})
app.mount('#app')

// install all modules under `modules/`
Object.values(import.meta.glob('./modules/*.ts', { eager: true })).map((i: any) => i.install?.(app))
