<template>
    <Header />
    <div class="container">
        <div class="portfolio-catalog">
            <h1>Каталог</h1>
            <div class="card w-75 mb-3">
                <div class="card-body">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" @click="selectedTab = 'all'">Все</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="selectedTab = 'stocks'">Акции</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="selectedTab = 'bonds'">Облигации</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" @click="selectedTab = 'funds'">Фонды</a>
                        </li>
                    </ul>
                    <br>
                    <div class="card-body-item">
                        <div class="card-item" v-if="selectedTab === 'stocks' || selectedTab === 'all'">
                            <h5>Акции</h5>
                            <div class="card-money-item" v-for="stock in stocks" :key="stock.id">
                                <div class="card-money-title">
                                    <button type="button" class="btn btn-outline-primary" data-toggle="modal"
                                            data-target="#exampleModalLong"
                                            @click="selectedName = stock.name; selectedPrice = stock.price; selectedActive = 'stock'; selectedInfo = stock.info">
                                        {{ stock.name }}
                                    </button>
                                    <div>{{ stock.price }}</div>
                                </div>
                                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                                    {{ stock.price }}
                                </div>
                            </div>
                        </div>
                        <div class="card-item" v-if="selectedTab === 'bonds' || selectedTab === 'all'">
                            <h5>Облигации</h5>
                            <div class="card-money-item" v-for="bond in bonds" :key="bond.id">
                                <div class="card-money-title">
                                    <button type="button" class="btn btn-outline-primary" data-toggle="modal"
                                            data-target="#exampleModalLong"
                                            @click="selectedName = bond.name; selectedPrice = bond.price; selectedActive = 'bond'; selectedInfo = bond.info">
                                        {{ bond.name }}
                                    </button>
                                    <div>{{ bond.price }}</div>
                                </div>
                                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                                    {{ bond.price }}
                                </div>
                            </div>
                        </div>
                        <div class="card-item" v-if="selectedTab === 'funds' || selectedTab === 'all'">
                            <h5>Фонды</h5>
                            <div class="card-money-item" v-for="fund in funds" :key="fund.id">
                                <div class="card-money-title">
                                    <button type="button" class="btn btn-outline-primary" data-toggle="modal"
                                            data-target="#exampleModalLong"
                                            @click="selectedName = fund.name; selectedPrice = fund.price; selectedActive = 'fund'; selectedInfo = fund.info">
                                        {{ fund.name }}
                                    </button>
                                    <div>{{ fund.price }}</div>
                                </div>
                                <div class="card-money-price" style="font-weight: bold; font-size: 16px">
                                    {{ fund.price }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">{{ selectedName }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h6 class="modal-title" id="exampleModalLongTitle">Цена: {{ selectedPrice }}</h6>
                    <h5>
                        <span v-if="selectedActive === 'stock'">О компании {{selectedName}}</span>
                        <span v-else-if="selectedActive === 'fund'">О фонде {{selectedName}}</span>
                        <span v-else>Про облигацию {{selectedName}}</span>
                    </h5>
                    <div style="word-wrap: break-word;">
                        {{selectedInfo}}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="sellStock(selectedName, selectedPrice, selectedActive, selectedInfo)">Продать</button>
                    <button type="button" class="btn btn-primary" @click="buyStock(selectedName, selectedPrice, selectedActive, selectedInfo)">Купить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import {mapMutations} from "vuex";
import store from "../../store";
export default {
    components: Header,
    store: store,
    name: "PortfolioCatalog",
    computed: {
        // ...mapState({
        //   history: state => state.history
        // })
    },
    methods: {
        ...mapMutations(['addOperation', 'removeOperation']),
        buyStock(name, price, type, info) {
            const currentDate = new Date();
            const date = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            const formattedDate = `${date}.${month}.${year}`;
            const boughtStock = {
                name: name,
                price: price,
                quantity: 1,
                date: formattedDate,
                type: type,
                operation: "buy",
                info: info
            };
            this.$store.commit('addOperation', boughtStock);
        },
        sellStock(name, price, type, info) {
            const currentDate = new Date();
            const date = currentDate.getDate().toString().padStart(2, '0');
            const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
            const year = currentDate.getFullYear();
            const formattedDate = `${date}.${month}.${year}`;
            const soldStock = {
                name: name,
                price: price,
                quantity: 1,
                date: formattedDate,
                type: type,
                operation: "sell",
                info: info
            };
            const index = this.$store.state.history.filter(item => item.name === name && item.type === type && item.operation === "buy");
            console.log(index)
            if (index.length !== 0) {
                this.$store.commit('removeOperation', index);
                this.$store.commit('addOperation', soldStock);
            }
            else alert("Купленной акции не найдено")
        }
    },
    data() {
        return {
            history: [],
            selectedTab: 'all',
            accountBalance: '1234567890',
            selectedName: '',
            selectedPrice: '',
            selectedInfo: '',
            selectedActive: '',
            boughtStocks: [],
            soldStocks: [],
            stocks: [
                {id: 1, name: "Акция1", price: 1000, info: "информация"},
                {id: 2, name: "Акция2", price: 1000, info: "информация"},
            ],
            bonds: [
                {id: 1, name: "Облигация1", price: 1000, info: "информация"},
                {id: 2, name: "Облигация2", price: 1000, info: "информация"},
            ],
            funds: [
                {id: 1, name: "Фонд1", price: 1000, info: "информация"},
                {id: 2, name: "Фонд2", price: 1000, info: "информация"},
            ],
        };
    },
}
</script>

<style scoped>
.portfolio-catalog {
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

h1, h2 {
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
