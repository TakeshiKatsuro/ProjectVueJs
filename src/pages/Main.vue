<script>
export default {

}
</script>

<template>
    <h1 style="text-align: left; font-family: 'franklin gothic medium'; margin-left: 30px">SOVCOM<br>INVESTMENTS</h1>
    <h2 style="text-align: center; font-family: 'franklin gothic medium'; margin-top: 100px">ИНВЕСТИРОВАТЬ - ЭТО ПРОСТО!</h2>
    <div class="btn" @click="$router.push('/registration')"><a href="#">Стать клиентом</a></div>
    <div class="buttons">
        <my-button  @click="$router.push('/')">Брокерский счёт</my-button>
        <my-button  @click="$router.push('/')">Терминал</my-button>
        <my-button  @click="$router.push('/authorization')">Войти</my-button>
    </div>
</template>

<style>
.buttons {
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
}

my-button {
    padding: 50px;
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
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 5px 5px 15px indianred;
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