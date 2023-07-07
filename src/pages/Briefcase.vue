<template>
    <Header />
    <div class="container">
        <div class="portfolio-briefcase">
            <h1>Портфель</h1>
            <div class="card w-75 mb-3">
                <div class="card-body">
                    <h5 class="card-title">Брокерский счет</h5>
                    <p class="card-text">{{accountBalance}} <span style="font-weight: normal; font-size: 14px">₽</span></p>
                </div>
            </div>
            <div class="card w-75 mb-3">
                <div class="card-body">
                    <nav class="navbar">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">
                                <div class="centered-icon">
                                    <i class="bi bi-window-desktop"></i>
                                    <div>Заявки</div>
                                </div>
                            </a>
                            <a class="navbar-brand" href="#">
                                <div class="centered-icon">
                                    <i class="bi bi-download"></i>
                                    <div>Пополнить</div>
                                </div>
                            </a>
                            <a class="navbar-brand" href="#">
                                <div class="centered-icon">
                                    <i class="bi bi-unindent"></i>
                                    <div>Вывести</div>
                                </div>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
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
                    <button type="button" class="btn btn-secondary">Продать</button>
                    <button type="button" class="btn btn-primary">Купить</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
    components: {Header},
    name: "PortfolioBriefcase",
    data() {
        return {
            selectedTab: 'all',
            accountBalance: '1234567890',
            selectedName: '',
            selectedPrice: '',
            selectedInfo: '',
            selectedActive: '',
            stocks: [
                { id: 1, name: "Акция1", price: "цена", info: "информация" },
                { id: 2, name: "Акция2", price: "цена", info: "информация" },
            ],
            bonds: [
                { id: 1, name: "Облигация1", price: "цена", info: "информация" },
                { id: 2, name: "Облигация2", price: "цена", info: "информация" },
            ],
            funds: [
                { id: 1, name: "Фонд1", price: "цена", info: "информация" },
                { id: 2, name: "Фонд2", price: "цена", info: "информация" },
            ],
        };
    }
}
</script>

<style scoped>
.portfolio-briefcase {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.w-75 {
    width: 100%;
    padding-left: 10px;
    padding-right: 200px;
    box-sizing: content-box;
}

.card-title {
    font-size: 16px;
}

.card-text {
    font-weight: bold;
}

.centered-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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
