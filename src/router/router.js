import SignInForm from "@/pages/SignInForm.vue";
import SignUpForm from "@/pages/SignUpForm.vue";
import Main from "@/pages/Main.vue";
import process from "process/browser";
import {createRouter, createWebHistory} from "vue-router";

/*Создаётся массив объектов маршрутов*/
const routes = [
    { path: "", component: Main },
    { path: "/signIn", component: SignInForm },
    { path: "/signUp", component: SignUpForm }

]

/*Создание экзмепляра маршрутизатора */
const router = createRouter({
    routes, //массив маршрутов
    history: createWebHistory(process.env.BASE_URL) //создание типа истории маршрутизации
})
//process.env.BASE_URL представляет базовый URL приложения.
export default router;