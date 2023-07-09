<script>

import {defineComponent} from "vue";
import Logo from "@/components/logo.vue";

export default defineComponent({
    components: {Logo},

    data() {
        return {
            cardnumber: '',
            cardname: '',
            year: '',
            month: '',
            cvv: '',
            amount: ''
        };
    },

    methods: {
        card() {
            const credentials = {
                cardnumber: this.cardnumber,
                cardname: this.cardname,
                year: this.year,
                month: this.month,
                cvv: this.cvv,
                amount: this.amount
            }

            // Сброс полей формы
            this.cardnumber = '';
            this.cardname = '';
            this.year = '';
            this.month = '';
            this.cvv = '';
            this.amount = '';
        }
    }
})
</script>

<template>
    <logo />
    <div class="container">
    <h3>Заполните данные карты</h3>
        <form>
            <div class="form-group">
                <label for="card-number">Номер карты</label>
                <input type="text" id="card-number" name="card-number" placeholder="Введите номер карты" required>
            </div>
            <div class="form-group">
                <label for="cardholder-name">Имя владельца</label>
                <input type="text" id="cardholder-name" name="cardholder-name" placeholder="Введите имя владельца карты" required>
            </div>
            <div class="form-group">
                <label for="year">Срок действия</label>
                <input type="text" id="year" name="expiration-date" placeholder="ММ" required>
                <input type="text" id="month" name="expiration-date" placeholder="ГГ" required>
                <input type="text" id="cvv" name="cvv" placeholder="CVV" required>
            </div>
        </form>

        <div class="deposit">
            <form>
                <div class="form-group">
                    <label for="amount">Размер депозита</label>
                    <input type="text" id="amount" name="amount" placeholder="₽" required>
                </div>
            </form>
        </div>

        <button type="submit">Отправить</button>
    </div>
</template>

<style scoped>

h3 {
    font-family: "Franklin Gothic Medium";
    margin-bottom: 30px;
}
.deposit {
    border: 2px solid;
    border-radius: 10px;
    padding: 1px 5px;
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
    font-family: "Franklin Gothic Medium";
    margin-bottom: 5px;
}
.form-group input[type="text"] {
    width: 100%;
    padding: 5px;
    font-size: 14px;
}
button[type="submit"] {
    background-color: dodgerblue;
    color: white;
    font-family: "Franklin Gothic Medium";
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin-top: 10px
}

.form-group #cvv {
    width: 20%;
    text-align: center;
}
.form-group #year {
    width: 20%;
    text-align: center;
    margin-right: 5px;
}
.form-group #month {
    width: 20%;
    text-align: center;
    margin-right: 40px;
}
</style>