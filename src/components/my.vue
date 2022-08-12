<template>

    <main>
        <header>
            <a href="/index">
                联系客服
            </a>
        </header>
        <div class="center">
            <div class="center-content">
            </div>
        </div>
    </main>
</template>
<style scoped>
header{
    /* background: blue; */
    width: 94%;
    margin: 0 auto;
    display: flex;
    flex-direction: row-reverse;
    margin-top: 3vw;
}
header a{
    color: #222;    
    text-decoration: none;
    font-size: 3.2vw;
}
.center{
    width: 100%;
    background: blue;
    margin-top: 5vw;
}
.center-content{
    background: red;
    width: 80%;
    height: 20vw;
    margin: 0 auto;
}
</style>