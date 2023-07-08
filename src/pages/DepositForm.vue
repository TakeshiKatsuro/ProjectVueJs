<script>

import {defineComponent} from "vue";
import Logo from "@/components/logo.vue";

export default defineComponent({
    components: {Logo}
})
</script>

<template>
    <logo />
    <div class="deposit-page">
        <form>
            <h3>Внести депозит</h3>
            <label for="amount">Сумма депозита:</label>
            <input type="number" id="amount" name="amount" required>

            <br>
            <label for="currency">Валюта:</label>
            <select id="currency" name="currency">
                <option value="USD">Доллары США</option>
                <option value="EUR">Евро</option>
                <option value="GBP">Фунты стерлингов</option>
                <!-- Добавьте другие валюты, если нужно -->
            </select>

            <br>
            <button type="submit">Подтвердить</button>
        </form>
    </div>
</template>

<style scoped>

h3 {
    font-family: "Franklin Gothic Medium";

    margin-bottom: 30px;
}

label {
    padding-right: 15px;
    font-family: "Franklin Gothic Medium";
}

#amount {
    height: 24px;
    width: 30%;
    border-radius: 8px;
    border: 2px solid;
    border-color: dodgerblue;
}

#currency {
    height: 24px;
    width: 30%;
    border-radius: 8px;
    border: 2px solid;
    border-color: dodgerblue;
}

form {
    padding: 30px;
    width: 50%;
    margin: 5% auto;
    border: 5px solid;
    border-color: dodgerblue;
    border-radius: 15px;
    box-shadow: 13px 13px 50px dodgerblue;
}

button {
    margin-top: 30px;
    border: 2px solid;
    border-radius: 10px;
    border-color: dodgerblue;
    background: white;
    font-family: "Franklin Gothic Medium";
    box-shadow: 0px -5px 10px dodgerblue;
}

</style>