<script>
import Logo from "@/components/logo.vue";

export default {
    components: {Logo},
    data() {
        return {
            login: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Получение данных из формы
            const credentials = {
                login: this.login,
                password: this.password
            };

            // Выполнение логики авторизации (например, отправка запроса на сервер)
            // TODO: Здесь должен быть код для авторизации

            // Сброс полей формы
            this.login = '';
            this.password = '';
        }
    }
};
</script>

<template>
    <logo/>
    <h2 style="text-align: center; font-family: 'franklin gothic medium'; margin-top: 100px">Добро пожаловать!</h2>
    <form class="login-form">
        <div class="form-group">
            <label for="username">Телефон</label>
            <input type="text" id="username" v-model="username" />
        </div>
        <div class="form-group">
            <label for="password">Пароль</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <!--Здесь будет переход на другую страницу-->
        <div class="btn" @click.prevent="login"><a href="#">Войти</a></div>
    </form>
</template>

<style>
.login-form {
    max-width: 300px;
    margin: 0 auto;
    border: 2px solid;
    border-color: #282828;
    border-radius: 10px;
    box-shadow: 10px 0px 30px indianred;
    padding: 35px;
}

.form-group {
    margin-bottom: 10px;
}

label {
    align-self: center;
    display: block;
    font-family: franklin gothic medium;
    font-size: small;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border-radius: 15px;
    background: lightpink;
}

.btn {
    position: relative;
    margin-top: 30px;
    width: 300px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btn a {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    padding: 10px;
    letter-spacing: 1px;
    text-decoration: none;
    overflow: hidden;
    color: black;
    font-family: 'franklin gothic medium';
    font-weight: 200;
    z-index: 1;
    transition: 0.5s;
    backdrop-filter: blur(15px);
}
.btn:hover a {
    letter-spacing: 3px;
}
.btn a::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
    transform: skewX(45deg) translate(0);
    transition: 0.5s;
    filter: blur(0px);
}
.btn:hover a::before {
    transform: skewX(45deg) translate(200px);
}
.btn::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    bottom: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5s;
}
.btn:hover::before /*lightup button*/ {
    bottom: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
}

.btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translatex(-50%);
    top: -5px;
    width: 30px;
    height: 10px;
    background: #f00;
    border-radius: 10px;
    transition: 0.5s;
    transition-delay: 0.5s;
}
.btn:hover::after /*lightup button*/ {
    top: 0;
    height: 50%;
    width: 80%;
    border-radius: 30px;
}
.btn:nth-child(1)::before, /*chnage 1*/
.btn:nth-child(1)::after {
    background: #ff1f1f;
    box-shadow: 0 0 5px #ff1f1f, 0 0 15px #ff1f1f, 0 0 30px #ff1f1f,
    0 0 60px #ff1f1f;
}
</style>