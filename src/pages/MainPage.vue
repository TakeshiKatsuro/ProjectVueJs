<script>
import Logo from "@/components/logo.vue";

export default {
    components: {Logo}

}
</script>

<template>
    <logo/>
    <h2 style="text-align: center; font-family: 'franklin gothic medium'; margin-top: 100px">ИНВЕСТИРОВАТЬ - ЭТО ПРОСТО!</h2>
    <div class="btn" @click="$router.push('/registration')"><a href="#">Стать клиентом</a></div>
    <div class="buttons">
        <my-button  @click="$router.push('/briefcase')">Брокерский счёт</my-button>
        <my-button  @click="$router.push('/catalog')">Терминал</my-button>
        <my-button  @click="$router.push('/authorization')">Войти</my-button>
    </div>
</template>

<style scoped>
.buttons {
    margin-top: 15%;
    justify-content: center;
    display: flex;
}

my-button {
    padding: 1px;
    margin-right: 5%;
    color: black;
    font-family: 'franklin gothic medium';
    border: none;
    cursor: pointer;
}

.btn {
    position: relative;
    width: 300px;
    margin: 100px auto;
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
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 5px 5px 15px dodgerblue;
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
    background: dodgerblue;
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
    background: dodgerblue;
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
</style>