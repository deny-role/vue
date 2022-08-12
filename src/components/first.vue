<template>
    <main>
        <router-view></router-view>
            <ul class="box">
            <li><router-link to="/index">
            <img src="../img/like.png" alt="">
            <br>
              猜你喜欢
              </router-link>
             </li>
              <li><router-link to="/type">
              <img src="../img/type.png" alt="">
              <br>
              分类
              </router-link>
             </li>
              <li><router-link to="/index">
              <img src="../img/ranking.png" alt="">
              <br>
              排行榜
              </router-link>
             </li>
              <li><router-link to="/index">
              <img src="../img/shopping-car.png" alt="">
              <br>
              购物车
              </router-link>
             </li>
              <li><router-link to="/my">
              <img src="../img/my.png" alt="">
              <br>
              我的易购
              </router-link>
             </li>
        </ul>
    </main>
</template>

<style>
*{
    margin: 0px;
    padding:0px;
    list-style: none;
    box-sizing: border-box;
}
</style>

<style scoped>
.box{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width:100%;
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    background: pink;
}
li{
    width: 20%;
    text-align: center;
}
.box a{
    text-decoration: none;
    font-size: 3vw;
    color: #666;
}
.box img{
    width: 30%;
}
</style>