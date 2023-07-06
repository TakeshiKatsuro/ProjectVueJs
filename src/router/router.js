import SignInForm from "@/pages/SignInForm.vue";
import SignUpForm from "@/pages/SignUpForm.vue";
import Main from "@/pages/Main.vue";
import process from "process/browser";
import {createRouter, createWebHistory} from "vue-router";

/*Создаётся массив объектов маршрутов*/
const routes = [
    { path: "",
        name: "Main",
        component: Main
    },
    { path: "/authorization",
        name: "SignInForm",
        component: SignInForm
    },
    { path: "/registration",
        name: "SignUpForm",
        component: SignUpForm,
    }

]

/*Создание экзмепляра маршрутизатора */
const router = createRouter({
    history: createWebHistory(), //создание типа истории маршрутизации
    routes //массив маршрутов
})
//process.env.BASE_URL представляет базовый URL приложения.
export default router;