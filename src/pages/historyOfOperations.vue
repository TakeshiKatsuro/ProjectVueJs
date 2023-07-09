<template>
    <div class="container">
        <div class="history-catalog">
            <h1>История операций</h1>
            <div class="card w-75 mb-3">
                <div class="card-body">
                    <div class="card-body-item">
                        <div class="card-item">
                            <h5>Купленные акции</h5>
                            <div class="card-money-item" v-for="(historyItem, index) in boughtStocks" :key="index">
                                <div class="card-money-title">
                                    <div>{{ historyItem.date }}</div>
                                </div>
                                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                                    {{ historyItem.name }} - {{ historyItem.price }}
                                </div>
                            </div>
                        </div>
                        <div class="card-item">
                            <h5>Проданные акции</h5>
                            <div class="card-money-item" v-for="(historyItem, index) in soldStocks" :key="index">
                                <div class="card-money-title">
                                    <div>{{ historyItem.date }}</div>
                                </div>
                                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                                    {{ historyItem.name }} - {{ historyItem.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed: {
        ...mapState(['history']),
        boughtStocks() {
            return this.history.filter(item => item.operation === 'buy');
        },
        soldStocks() {
            return this.history.filter(item => item.operation === 'sell');
        },
    },
    name: "PortfolioHistory",
    data() {
        return {};
    },
};
</script>

<style scoped>
.history-catalog {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.w-75 {
    width: 100%;
    padding-left: 10px;
    padding-right: 200px;
    box-sizing: content-box;
}

.container {
    display: flex;
    justify-content: center;
    padding-top: 60px;
}

h1,
h2 {
    color: #333;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin-bottom: 10px;
}
.card-money-item {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.card-item {
    margin-bottom: 50px;
    padding-bottom: 10px;
    border-bottom: #dee2e6 1px solid;
}
</style>
