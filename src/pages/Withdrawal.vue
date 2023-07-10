<script setup>

import Logo from "@/components/logo.vue";
</script>

<template>
    <logo />
    <div class="container">
        <h3>Вывести средства на банковский счёт</h3>
        <form>
            <div class="form-group">
                <select id="card">
                    <option value="">Выберите карту</option>
                </select>
            </div>
            <div class="form-group">
                <label for="amount">Доступно на счету RUB: </label>
                <input type="text" id="amount" name="amount" placeholder="Доступно ₽" required>
            </div>
            <div class="form-group">
                <label for="amount">Сумма средств для перечисления: </label>
                <input type="text" id="amount" name="amount" placeholder="Введите сумму ₽" required>
            </div>
            <div class="form-group">
                <label for="phone">Номер телефона: </label>
                <input type="text" id="phone" name="phone" placeholder="Введите для подтверждения" required>
            </div>
        </form>

        <button type="submit">Продолжить</button>
    </div>
</template>

<style scoped>
h3 {
    font-family: "Franklin Gothic Medium", cursive;
    margin-bottom: 30px;
}

.container {
    width: 300px;
    margin: 0 auto;
    border: 3px solid;
    border-radius: 13px;
    padding: 10px 20px;
}
.form-group {
    margin-bottom: 10px;
}
.form-group label {
    display: block;
    font-size: small;
    font-family: "Franklin Gothic Medium", cursive;
    margin-bottom: 5px;
}
.form-group input[type="text"] {
    width: 50%;
    height: 22px;
    padding: 5px;
    font-size: 14px;
}
.form-group #phone {
    width: 100%;
    height: 22px;
    padding: 5px;
    font-size: 14px;
}
button[type="submit"] {
    background-color: dodgerblue;
    color: white;
    font-family: "Franklin Gothic Medium", cursive;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px
}
.form-group #card
{
    font-family: "franklin gothic", cursive;
    width: 100%;
    margin-bottom: 10px;
}
</style>