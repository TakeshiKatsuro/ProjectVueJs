<template>
    <div class="container-header">
        <div class="btn-group" role="group" aria-label="Basic outlined example">
            <router-link to="/briefcase" class="btn btn-outline-primary">Портфель</router-link>
            <router-link to="/catalog" class="btn btn-outline-primary">Каталог акций</router-link>
            <router-link to="/history" class="btn btn-outline-primary">История операций</router-link>
        </div>
        <div class="card header">
            <div class="card-body">
                Доступный счет: {{ money }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "PortfolioHeader",
    computed: {
        ...mapState(['history']),
        accountBalance() {
            let totalBalance = 0;

            // for (const operation of this.history) {
            //   if (operation.operation === 'buy') {
            //     totalBalance += operation.price * operation.quantity;
            //   } else if (operation.operation === 'sell') {
            //     totalBalance -= operation.price * operation.quantity;
            //   }
            // }

            for (const operation of this.history) {
                if (operation.operation === 'buy') {
                    totalBalance += operation.price * operation.quantity;
                }
            }
            return totalBalance;
        }
    },
    methods: {
        getMoney() {
            return this.money - this.accountBalance;
        }
    },
    data() {
        return {
            money: 10000
        };
    }
}
</script>

<style scoped>
.container-header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.btn-group {
    left: 20px;
}
</style>
