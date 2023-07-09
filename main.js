import {createApp} from 'vue'
import App from '@/router/App.vue'
import router from "@/router/router";
import store from './store';

const app = createApp(App) //создали экземпляр компонента

/*
components.forEach(component => {
    app.component(component.name, component)
}) */

app
    .use(router)//Подключение маршрутизатора. Подобным образом подкл. библ., Bootstrap, Vuex и т.д.
    .provide('store', store)
    .use(store)
    .mount('#app'); //монтируем компонент(условно точка входа в приложение) в div