<script>
import Logo from "@/components/logo.vue";

export default {
    components: {Logo},
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            confirm_pass: ''
        };
    },
    methods: {
        login() {
            // Получение данных из формы
            const credentials = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                password: this.password,
                confirm_pass: this.password
            };

            // Выполнение логики регистрации (например, отправка запроса на сервер)
            // TODO: Здесь должен быть код для авторизации

            // Сброс полей формы
            this.name = '';
            this.surname = '';
            this.email = '';
            this.phone = '';
            this.password = '';
            this.confirm_pass = '';
        }
    }
};
</script>

<template>
    <logo/>
    <h2 style="text-align: center; font-family: 'franklin gothic medium'">РЕГИСТРАЦИЯ</h2>
    <form class="login-form">
        <div class="form-group">
            <label for="name">Имя</label>
            <input type="text" id="name" v-model="name" required/>
        </div>
        <div class="form-group">
            <label for="name">Фамилия</label>
            <input type="text" id="surname" v-model="surname" required/>
        </div>
        <div class="form-group">
            <label for="name">Электронная почта</label>
            <input type="text" id="email" v-model="email" required/>
        </div>
        <div class="form-group">
            <label for="name">Телефон</label>
            <input type="text" id="phone" v-model="phone" required/>
        </div>
        <div class="form-group">
            <label for="password">Придумайте пароль</label>
            <input type="password" id="password" v-model="password" required/>
        </div>
        <div class="form-group">
            <label for="password">Подтвердите пароль</label>
            <input type="password" id="confirm_pass" v-model="confirm_pass" required/>
        </div>
        <!--<button type="submit" @click.prevent="login">Войти</button>-->
        <button type="submit">ГОТОВО</button>
    </form>
</template>

<style scoped>
.login-form {
    margin: 0 auto;
    max-width: 350px;
    border: 2px solid;
    border-color: #282828;
    border-radius: 10px;
    box-shadow: 10px 10px 30px dodgerblue;
    padding: 35px;
}

.form-group {
    margin-bottom: 10px;
}

label {
    align-self: center;
    display: block;
    font-family: "Franklin Gothic Medium";
    font-size: small;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border-radius: 15px;
    background: lightskyblue;
}

button {
    margin-top: 5%;
    width: 100%;
    height: 45px;
    font-size: 16px;
    border: 2px solid;
    border-radius: 15px;
    border-color: dodgerblue;
    background: lightskyblue;
    color: darkblue;
    font-family: "Franklin Gothic Medium";
    box-shadow: 0px 10px 30px dodgerblue;
}

</style>