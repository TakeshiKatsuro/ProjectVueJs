import SignInForm from "@/pages/SignInForm.vue";
import SignUpForm from "@/pages/SignUpForm.vue";
import Main from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from "vue-router";
import Catalog from "@/pages/Catalog.vue";
import Briefcase from "@/pages/Briefcase.vue";
import DepositForm from "@/pages/DepositForm.vue"
import Withdrawal from "@/pages/Withdrawal.vue";

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
    },
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/briefcase',
        name: 'Briefcase',
        component: Briefcase
    },
    {
        path: '/briefcase/deposit',
        name: 'Deposit',
        component: DepositForm
    },
    {
        path: '/briefcase/withdrawal',
        name: 'Withdrawal',
        component: Withdrawal
    },
    {
        path: '/history',
        name: 'History',
        component: History
    }
]

/*Создание экзмепляра маршрутизатора */
const router = createRouter({
    history: createWebHistory(), //создание типа истории маршрутизации
    routes //массив маршрутов
})
//process.env.BASE_URL представляет базовый URL приложения.
export default router;