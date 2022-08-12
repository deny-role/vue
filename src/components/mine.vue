<template>
    <main>
        <header>
            <div class="title">
                我的易购    
                <span class="setting">
                    <img src="../img/setting.png" alt="">
                </span>
            </div>
            <div class="header-center">
                <div class="header-icon">
                    <router-link to="">
                        <img src="../img/0000000000_01.jpg" alt="">
                    </router-link>
                    <router-link to="">
                        <span class="certify">
                            去实名认证
                        </span>
                    </router-link>
                </div>
                <div class="ringht-certify">
                    <div class="phone">
                        <span>134******10</span>
                    </div>
                    <router-link to="">
                        <span class="up">升级权益 ></span>
                    </router-link>
                </div>
                 <div class="vip">
                    <img src="../img/vip.png" alt="">
                </div>
            </div>
            <div class="header-bottom">
                <ul class="box">
                    <li v-for="(items,index) in list" :key="index">
                        <router-link to="">
                        <p class="num">{{items.p1}}</p>
                        <p class="under-num">{{items.p2}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
        </header>
        <div class="check-now">
            <div class="check-img">
                <img src="../img/vip1.png" alt="">
            </div>
            <span class="super">银行联名卡，办卡得Super</span>
            <span class="now">立即查看 ></span>
        </div>
        <div class="order">
            <span class="my-order">我的订单
                <router-link to="">
                <span class="check-all">查看全部 <img src="../img/next.png" alt=""></span>
                </router-link>
            </span>
            
            <ul class="order-box">
                <li v-for="(items,index) in list1" :key="index">
                    <router-link to="">
                        <img :src="items.src" alt="">
                        <p>{{items.p}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="tool">
            <span class="tool-s">必备工具</span>
            <ul class="tool-box">
                <li v-for="(items,index) in list2" :key="index">
                    <router-link to="">
                        <img :src="items.src" alt="">
                        <p>{{items.p}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="goods">
            <div class="guess1"><img src="../img/guess1.png" alt=""></div>
            <div class="guess-title">好货推荐</div>
            <div class="guess2"><img src="../img/guess2.png" alt=""></div>
        </div>
        <div class="goods-list">
            <!-- <div class="first">
                
            </div> -->
            <ul class="goods-list-box">
                
                <li v-for="(items,index) in list3" :key="index">
                   <router-link to="">
                    <img :src="items.src" alt="">
                    <p class="describe">{{items.p}}</p>
                    <div class="price">
                        <span class="price-s1">{{items.span1}}</span>
                        <span class="price-s2">{{items.span2}}</span>
                        <span class="price-s3">{{items.span3}}</span>
                    </div>
                    <p class="advertisement">
                        <span v-if="items.span4">{{items.span4}}</span>
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
    </main> 
</template>
<script>

export default{
        data(){
            return{
                list:[
                    {
                         p1:'0',
                        p2:'优惠券'
                    },
                    {
                         p1:'0',
                        p2:'领云钻'
                    },
                    {
                         p1:'0',
                        p2:'足迹'
                    },
                    {
                         p1:'0',
                        p2:'我的关注'
                    },
                ],
                list1:[
                    {
                        src:'images/order1.png',
                        p:'待支付'
                    },
                    {
                        src:'images/order2.png',
                        p:'待收货'
                    },
                    {
                        src:'images/order3.png',
                        p:'评价有礼'
                    },
                    {
                        src:'images/order4.png',
                        p:'退还/售后'
                    },
                    {
                        src:'images/order5.png',
                        p:'常购清单'
                    },
                ],
                 list2:[
                    {
                        src:'images/tool1.png',
                        p:'红包'
                    },
                    {
                        src:'images/tool2.png',
                        p:'店铺关注'
                    },
                    {
                        src:'images/tool3.png',
                        p:'我的预约'
                    },
                    {
                        src:'images/tool4.png',
                        p:'客户服务'
                    },
                    {
                        src:'images/tool5.png',
                        p:'必抢清单'
                    },
                    {
                        src:'images/tool6.png',
                        p:'拼购'
                    },
                    {
                        src:'images/tool7.png',
                        p:'校园VIP'
                    },
                    {
                        src:'images/tool8.png',
                        p:'我的试用'
                    },
                ],
                list3:[
                    {
                        src:'images/goods1.jpg',
                        p:'海尔(Haier)立式无霜冰柜一级能效电脑温控全温区冷藏冷冻保鲜转换冰柜母乳储藏立式冷冻柜 BD-330WEPTU1',
                        span1:'￥',
                        span2:'3949',
                        span3:'.00',
                        span4:'广告'
                    },
                       {
                        src:'images/goods2.jpg',
                        p:'徕芬家用大功率高速吹风机负离子护发速干吹风筒莱芬大风力电吹风 闪银',
                        span1:'￥',
                        span2:'589',
                        span3:'.00',
                        span4:'广告'
                    },
                       {
                        src:'images/goods3.jpg',
                        p:'全国联通手机话费充值100元慢充72小时(上海联通除外)',
                        span1:'￥',
                        span2:'92',
                        span3:'.90',
                        span4:''
                    },

                ]
                
            }
        }
}
</script>
<style scoped>
body{
    background: #f2f2f2;
}
main{
    background: #f2f2f2;
    margin-bottom: 60px;
}
header{
    width: 100%;
    background: #FFDB47;
    /* height: 50vw; */
    position: relative;
}
.title{
    width: 100%;
    text-align: center;
    display: inline-block;
    margin-top: 2vw;
    font-size: 4.7vw;
    font-weight: bold;
}
.setting{
    position: absolute;
    right: 1vw;
    top: 2vw;
}
.setting img{
    width: 6vw;
}
.header-center{
    /* background: red; */
    width: 90%;
    /* height: 20vw; */
    margin: 0 auto;
    margin-top: 5vw;
    display: flex;
    flex-direction: row;
}
.header-icon{
    width: 20%;
    position: relative;
}
.header-icon img{
    width: 85%;
    border-radius: 50%;
     margin-left: 1vw;
}
.certify{
    width: 100%;
    text-align: center;
    color: black;
    font-size: 3vw;
    /* height: 4vw; */
    background: #FFECA3;
    border-radius: 2vw;
    position: absolute;
    left: 0;
    bottom: 0;
}
.ringht-certify{
    width: 20%;
    text-align: center;
    margin-left: 2vw;
    
}
.phone{
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 2vw;
}
.phone span{
    width: 100%;
    font-size: 3.5vw;
    font-weight: bold;
}
.up{
    width: 100%;
    color: white;
    font-size: 3.1vw;
    background: #E1BB23;
    border-radius: 2vw;
    display: flex;
    align-items: center;
    padding-left: 2vw;
    margin-top: 2vw;
}
.vip{
    width: 55%;
    display: flex;
    flex-direction: row-reverse;
}
.vip img{
    width: 33%;
}
.header-bottom{
    width: 98%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    margin-top: 5vw;
}
.box{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.box li{
    width: 25%;
    /* margin- */
}
.box a{
    color: black;
}
.num{
    font-size: 4vw;
    font-weight: bold;
}
.under-num{
    font-size: 3.2vw;
    margin-bottom: 10vw;
}
.check-now{
    width: 90%;
    margin: 0 auto;
    background: white;
    display: flex;
    flex-direction: row;
    padding: 2vw;
    border-radius: 2vw;
    position: absolute;
    left: 5vw;
    top: 48vw;
    justify-content: space-around;
}
.check-img{
    width: 20%;
}
.check-img img{
    width: 70%;
}

.super{
    font-size: 3vw;
    line-height: 8vw;
}
.now{
    display: flex;
    flex-direction: row-reverse;
    font-size: 3vw;
    line-height: 8vw;
}
.order{
    width: 90%;
    margin: 0 auto;
    background: white;
    margin-top: 10vw;
    border-radius: 2vw;
}
.my-order{
    color: black;
    font-weight: bold;
    font-size: 4vw;
    padding: 2vw;
     display: flex;
    justify-content:space-between;
}
.check-all{
    font-size: 3vw;
    color: #666;
    margin-top: 1vw;
}
.check-all img{
    width: 3vw;
    vertical-align: middle;
}
.order-box{
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-top: 3vw;
}
.order-box li{
    width: 20%;
}
.order-box li>a>img{
    width: 40%;
}
.order-box li>a{
    color: #666;
    font-size: 3vw;
}
.order-box p{
    margin-bottom: 7vw;
}
.tool{
    width: 90%;
     margin: 0 auto;
    background: white;
    border-radius: 2vw;
    margin-top: 5vw;

}
.tool-s{
     color: black;
    font-weight: bold;
    font-size: 4vw;
    padding: 2vw;
    display: flex;
}
.tool-box{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 3vw;
}
.tool-box li{
    width: 25%;
}
.tool-box li>a>img{
    width: 25%;
}
.tool-box li>a{
    color: #666;
    font-size: 3vw;
}
.tool-box p{
    margin-bottom: 5vw;
}
.goods{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    margin-top: 3vw;
}
.guess1 img{
    width: 60%;
}
.guess2 img{
    width: 60%;
    transform: rotateY(180deg);
}
.guess-title{
    color: #222;
    font-size: 3.5vw;
    font-weight: bold;
}
.goods-list{
    width: 95%;
    margin: 0 auto;
    /* display: flex;
    flex-wrap: wrap; */
}
/* .first{
    width: 50%;
} */
.goods-list-box{
    display: flex;
    flex-wrap: wrap;
   
}
.goods-list-box li{
    width: 47%;
    margin-left: 2vw;
    background: white;
    border-radius: 2vw;
     position: relative;
     margin-top: 3vw;
}
.goods-list-box li>a>img{
    width: 100%;
    border-top-left-radius: 2vw;
     border-top-right-radius: 2vw;
}
.describe{
        width: 100%;
        color: black;
        font-size: 3.4vw;   
        height: 9vw;
        font-weight: bold;
        text-align: left;
        margin-top: 0.5vw;
        margin-left: 0.5vw;
        /* 让文字超出第二行后显示... */
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
}
  .price{
        width: 100%;
        text-align: left;
        margin-top: 3vw;
        display: flex;
        align-items: flex-end;
        margin-bottom: 2vw;
    }
    .price-s1{
        color: red;
        font-size: 3vw;
        font-weight: bold;
    }
    .price-s2{
        color: red;
        font-size: 5vw;
        font-weight: bold;
    }
    .price-s3{
        color: red;
        font-size: 3vw;
        font-weight: bold;
    }
    .advertisement{
       /* display: flex;
       justify-content: flex-end; */
       position: absolute;
       right: 2vw;
       bottom: 3vw;
    }
    .advertisement span{
        display: block;
        box-sizing: border-box;
        text-align: center;
         font-size: 3vw;
        color: white;
        opacity: 0.2;
        background: black;
        border-radius: 2vw;
    }
</style>
