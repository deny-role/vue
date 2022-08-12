<template>
    <main>
        <header class="index">
            <div class="header-img">
                <!-- <img src="../img/818.jpg" alt=""> -->
                <div class="header-nav">
                    <a href=""><img src="../img/header-type.png" alt=""></a>
                    <div class="header-nav-center"><a href=""><img src="../img/service.png" alt=""></a></div>
                    <a href=""><img src="../img/login.png" alt=""></a>
                </div>
                <div class="search">
                    <input type="text" placeholder="商品/店铺">
                    <span class="search-btn"><img src="../img/search-icon.png" alt=""></span>
                </div>
                
            </div>
        </header>

        <div class="autoplay">
                 <div class="autoplay-back">
                <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item><img src="../img/autoplay1.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay2.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay3.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay4.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay5.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay6.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay7.jpg" alt=""></van-swipe-item>
                <van-swipe-item><img src="../img/autoplay8.jpg" alt=""></van-swipe-item>
                </van-swipe>
                </div>
            </div>
        
        <div class="center-img">
            <img src="../img/mianxi.jpg" alt="">
        </div>
                <ul class="list">
                <li v-for="(items,index) in list" :key="index">
                    <img :src="items.src" alt="">
                    <br>
                    <span>{{items.title}}</span>
                </li>
            </ul>
        <div class="under-list">
          <ul>
            <li v-for="(items1,index) in list1" :key="index">
                <router-link to="">
                    <p class="ptitle">{{items1.title}}</p>
                    <p class="ptitle1">{{items1.title1}}</p>
                    <div class="under-list-main">
                    <span>
                    <img :src="items1.src1" alt="">
                    <p class="pdetail">{{items1.p1}}</p>
                    </span>
                    <span>
                    <img :src="items1.src2" alt="">
                    <p class="pdetail">{{items1.p2}}</p>
                    </span>
                    </div>
                </router-link>
            </li>
          </ul>
        </div>
        <div class="recommend">
            <div class="recommend-left">
                <router-link to="">
                    <span>
                    <p class="recommend-p1">为您推荐</p>
                    <p class="recommend-p2">精选频道</p>
                    </span>
                </router-link>
            </div>
            <ul class="recommend-list">
                <li v-for="(items2,index) in list2" :key="index">
                    <router-link to="">
                    <img :src="items2.src" alt="">
                <br>
                {{items2.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="under-recommend">
            <ul class="recommend-box">
                <li v-for="(items3,index) in list3" :key="index">
                <img :src="items3.src" alt="">
                <span class="s1"><img :src="items3.src1" alt=""></span>
                <p class="recommend-box-p">{{items3.p}}</p>
                <div class="recommend-div">
                    {{items3.div}}
                </div>
                </li>
            </ul>
        </div>
        <div class="top-list">
            <router-link to="">
                  <div class="top-list-title">
            </div>
            </router-link>
             <div class="top-list-center">
                <ul class="top-list-box">
                    <li>
                        <router-link to="">
                            <span class="li-img1"><img src="../assets/images/top-list1.jpg" alt=""></span>
                            <span class="li-bottom"><img src="../assets/images/top-list11.png" alt=""></span>
                            <div class="popularity-list">
                                人气榜
                            </div>
                            <p class="top-list-p1">大火力燃气灶榜</p>
                            <p class="top-list-p2">卖爆3307件</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                            <span class="li-img1"><img src="../assets/images/top-list2.jpg" alt=""></span>
                            <span class="li-bottom"><img src="../assets/images/top-list22.png" alt=""></span>
                            <div class="popularity-list">
                                人气榜
                            </div>
                            <p class="top-list-p1">酱油</p>
                            <p class="top-list-p2">卖爆378件</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="">
                           <span class="li-img1"> <img src="../assets/images/top-list3.jpg" alt=""> </span>
                            <span class="li-bottom"><img src="../assets/images/top-list33.png" alt=""></span>
                            <div class="popularity-list">
                                人气榜
                            </div>
                            <p class="top-list-p1">人气轻薄本榜</p>
                            <p class="top-list-p2">卖爆1020件</p>
                        </router-link>
                    </li>
                </ul>
        </div>
        <div class="top-list-bottom">
            <ul class="list-bottom-box">
                <li v-for="(items2,index) in list4" :key="index">
                <router-link to="">
                    <p class="ptitle2">{{items2.title2}}</p>
                    <p class="ptitle3">{{items2.title3}}</p>
                    <div class="under-list-main1">
                    <span>
                    <img :src="items2.src1" alt="">
                    </span>
                    <span>
                    <img :src="items2.src2" alt="">
                    </span>
                    </div>
                    <div class="popularity-list1">
                        人气榜
                    </div>
                </router-link>
            </li>
            </ul>
        </div>
        </div>
       <div class="guess-you-like">
        <router-link to="">
            <div class="like-background">

            </div>
        </router-link>
        <router-link to="">
              <div class="like-list">
            <ul>
                <li v-for="(items,index) in list5" :key="index">
                    <div class="like-img">
                        <img :src="items.src" alt="">
                    </div>
                    <p class="like-p1">{{items.p1}}</p>
                    <p class="like-p2">
                        <span class="like-s1">{{items.span1}}</span>
                        <span class="like-s1" v-if="items.span5">{{items.span5}}</span>
                    </p>
                    <div class="price">
                        <span class="price-s1">{{items.span2}}</span>
                        <span class="price-s2">{{items.span3}}</span>
                        <span class="comment">{{items.span4}}</span>
                    </div>
                </li>
            </ul>
        </div>
        </router-link>
      
       </div>
    </main>
</template>
<script>
export default{
   data(){
    return{
        list:[
            {
                src:'images/list1.png',
                title:'苏宁家电'
            },
             {
                src:'images/list2.png',
                title:'苏宁超市'
            },
             {
                src:'images/list3.png',
                title:'苏宁宜品'
            },
             {
                src:'images/list4.png',
                title:'手机数码'
            },
             {
                src:'images/list5.png',
                title:'家居家装'
            },
             {
                src:'images/list6.png',
                title:'服饰百货'
            },
             {
                src:'images/list7.png',
                title:'生活家电'
            },
             {
                src:'images/list8.png',
                title:'签到有礼'
            },
             {
                src:'images/list9.png',
                title:'领卷中心'
            },
             {
                src:'images/list10.png',
                title:'更多频道'
            },
        ],
        list1:[
            {
                title:'大聚惠',
                title1:'天天抢好物',
                src1:'images/pic1.jpg',
                p1:'苏宁宜品',
                src2:'images/pic2.jpg',
                p2:'酥田',
            },
            {
                
                title:'Super会员',
                title1:'领专属好券',
                src1:'images/pic3.jpg',
                p1:'',
                src2:'images/pic4.jpg',
                p2:'',
            },
                {
                title:'手机电脑',
                title1:'0元抽888元苏宁卡',
                src1:'images/pic5.jpg',
                p1:'',
                src2:'images/pic6.jpg',
                p2:'',
                },{
                title:'百亿补贴',
                title1:'大牌好货 限量补贴',
                src1:'images/pic7.jpg',
                p1:'',
                src2:'images/pic8.jpg',
                p2:'',
                
            },
        ],
        list2:[
            {
                src:'images/recommend1.png',
                title:'苏宁国际',
            },
            {
                src:'images/recommend2.png',
                title:'苏宁Outlets',
            },
            {
                src:'images/recommend3.png',
                title:'会员抢购',
            },
            {
                src:'images/recommend4.png',
                title:'Super会员',
            },
        ],
        list3:[
            {
                src:'images/under-recommend1-1.png',
                src1:'images/under-recommend1.jpg',
                p:'冰洗钜惠',
                div:'每千减百',
            },
            {
                src:'images/under-recommend2-2.png',
                src1:'images/under-recommend2.jpg',
                p:'奶粉超品',
                div:'低至77折',
            },
            {
                src:'images/under-recommend3-3.png',
                src1:'images/under-recommend3.jpg',
                p:'吸尘除螨',
                div:'直降1000',
            },
            {
                src:'images/under-recommend4-4.png',
                src1:'images/under-recommend4.jpg',
                p:'鞋包家纺',
                div:'爆款1件5折',
            },
        ],
        list4:[
            {
                title2:'健康洗浴燃热榜',
                title3:'卖爆3352件',
                src1:'images/t1.jpg',
                src2:'images/t2.jpg',
            },
            {
                title2:'必备手机配件榜',
                title3:'卖爆1381件',
                src1:'images/t3.jpg',
                src2:'images/t4.jpg',
            },
            {
                title2:'家用电饭煲榜',
                title3:'卖爆4374件',
                src1:'images/t5.jpg',
                src2:'images/t6.jpg',
            },
            {
                title2:'居家学习台灯榜',
                title3:'卖爆653件',
                src1:'images/t7.jpg',
                src2:'images/t8.jpg',
            },
        ],
        list5:[
            {
                src:'images/like-list1.jpg',
                p1:'安徽天方茶叶 50g六安瓜片绿茶 齐头山瓜片',
                span1:'领券20-20',
                span2:'￥',
                span3:'55',
                span4:'100+评价',
            },
              {
                src:'images/like-list2.jpg',
                p1:'20双丝袜短袜肉袜短款水晶女士黑色袜子肉色皮肤薄款短筒透肉 FISH BASKET丝袜',
                span1:'满69减1',
                span5:'领券99-2',
                span2:'￥',
                span3:'15',
                span4:'10+评价',
            },
              {
                src:'images/like-list1.jpg',
                p1:'安徽天方茶叶 50g六安瓜片绿茶 齐头山瓜片',
                span1:'领券20-20',
                span2:'￥',
                span3:'55',
                span4:'100+评价',
            },
        ]
    }
   }
}
</script>

<style >
    .autoplay-back .van-swipe__indicators {
    bottom: 17vw;
    }


</style>
<style scoped>

main{
    margin-bottom: 60vw;
    background: #F7F7F7;
}
.index{
    width: 100%;
    margin: 0px auto;
}
.header-img{
    width: 100%;
    background: url(../img/818.jpg) center no-repeat;
    background-size: cover;
    margin: 0px auto;
}

.header-nav{
    width: 92%;
    margin: 0vw auto;
    display: flex;
    justify-content: space-between; 
    padding-top: 2vw;
}
.header-nav img{
    width: 5vw;
}
.header-nav-center{
    display: flex;
    align-items: center; 
    width: 58%;
}
.header-nav-center img{
    width: 50vw;
}

.search{
    /* background: red; */
    width: 100%;
    margin: 0 auto;
    height: 11vw;
    margin-top: 1vw;
    position: relative;
}
.search input{
    width: 96%;
    border: none;
    border-radius: 20px;
    display: flex;
    align-self: auto;
    margin: 0px auto;
    height: 9vw;
}
::placeholder{
    padding-left: 10vw;
    font-size: 3.5vw;
}
.search-btn{
    position: absolute;
    left: 6vw;
    top: 2vw;
}
.search-btn img{
    width: 5.5vw;
}
.autoplay{
    width: 100%;
    margin: 0px auto;
    background: url(../img/under-nav.jpg) no-repeat;
    background-size: 100%;
}
.autoplay-back{
    border-radius: 10px;
    width: 93%;
    margin: 0px auto;
    overflow: hidden;
    height: 30vw;
}

.my-swipe .van-swipe-item {
    color: #fff;
  }
  .autoplay .van-swipe-item img{
    width: 100%;
    border-radius: 10px;
    position: relative;
    top: -20%;
    border-radius: 20px;
    transform: translateY(-13vw);   
  }
  .van-swipe{
    border-radius: 3vw;
  }

  .center-img{
    width: 100%;
    margin: 0 auto;
  }
  .center-img img{
    width: 100%;
    height: 25vw;
  }

  .list{
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    background: url(../img/list-background.png);
    background-size: 100%;
  }
  .list li{
    width: 20%;
    text-align: center;
    color: #666;
    margin-top: 10px;
    font-size: 3vw;
  }
  .list img{
    width: 54%;
  }
  .under-list{
    width: 96%;
    margin: 0 auto;
    margin-top: 5vw;
  }
  .under-list ul{
    display: flex;
    flex-wrap: wrap;
  }
  .under-list ul>li{
    width: 48%;
    background:#fff;
    margin-left: 1vw;
  }
  .under-list ul>li img{
    width: 80%;
    margin-left: 3vw;
  }
  .under-list-main{
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0px auto;
  }
 
  .under-list-main span{
   width: 50% ;
  }
  .under-list-main span>p{
   text-align: center;
  }
  .ptitle{
    margin-left: 3.5vw;
    margin-top: 3vw;
    font-size: 4vw;
    color: black;
    font-weight: bold;
  }
  .ptitle1{
    margin-left: 3.5vw;
    font-size: 3vw;
    color: #999;
  }
  .pdetail{
    font-size: 3vw;
    color: black;
  }
  .recommend{
    background: #fff;
    width: 93.5%;
    margin: 0 auto;
    height: 23vw;
    margin-top: 1vw;
    display: flex;
    flex-direction: row;
  }
  .recommend-left{
    width: 20%;
    margin-left: 2vw;
  }
  .recommend-p1{
    color: black;
    font-size: 4vw;
    font-weight: bold;
    margin-top: 5vw;
  }
  .recommend-p2{
    color: #999;
    font-size: 3vw;
    font-weight: bold;
  }
  .recommend-list{
    display: flex;
    flex-direction: row;
    width: 80%;
    text-align: center;
  }
  .recommend-list a{
    font-size: 2vw;
    color: black;
  }
  .recommend-list img{
   width: 100%;
   margin-top: 2vw;
  }
  .recommend-list li{
    width: 20%;
    margin-left: 3vw;
  }
  .under-recommend{
    width: 96%;
    margin: 0 auto;
    /* background: red; */
    /* height: 32vw; */
    margin-top: 1vw;
  }
    .recommend-box{
        width: 100%;
        display: flex;
        align-content: row;
    }
    .recommend-box li{
        width: 25%;
        /* margin-left: 2vw; */
        padding: 1vw;
        position: relative;
        padding-bottom: 0;
    }
    .recommend-box li>img{
        width: 100%;
    }
    .s1 img{
    width: 75%;
    position: absolute;
    left: 3vw;
    top: 2vw;
    }
    .recommend-box-p{
        position: absolute;
        left: 6vw;
        top: 22vw;
        color: white;
        font-size: 3vw;
    }
    .recommend-div{
    color: #4BA093;
    position: absolute;
    left: 4vw;
    top: 27vw;
    width: 65%;
    text-align: center;
    font-size: 2.5vw;
    height: 4vw;
    border-radius: 2vw;
    background: white;
    }
    .recommend-box li:nth-of-type(2) div{
    color: #E244AA;
    }
    .recommend-box li:nth-of-type(3) div{
    color: #A42AE0;
    }
    .recommend-box li:nth-of-type(4) div{
    color: #fba600;
    }

    .top-list{
    width: 96%;
    margin: 0 auto;
    }
    .top-list-title{
    width: 100%;
    background: url(../img/top-list.png) no-repeat;
    background-size: 100%;
    height: 6vw;
    transform: translateX(-2vw);
    }
    .top-list-center{
        width: 100%;
        /* height: 32vw; */
        /* background: red; */
        margin-top: 2vw;
    }
    .top-list-box{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .top-list-box li{
        width: 34%;
        margin: 0 1vw;
        position: relative;
        background: white;
        border-radius: 2vw;
        text-align: center;
    }
 
    .li-img1 img{
        width: 65%;
        border-radius: 2vw;
        margin-bottom: 1vw;
    }
    .top-list-box li:nth-of-type(2) .popularity-list{
        color: #FB7F0A;
        border: 1px solid #FB7F0A;
    }
     .top-list-box li:nth-of-type(1) .li-bottom{
       padding-left: 0;
    }
    .li-bottom{
        width: 100%;
        border-radius: 0;
        position: absolute;
        left: 0;
        bottom: -12vw;
        padding-right: 0;
    }
    .li-bottom img{
        width: 100%;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    .popularity-list{
        width: 40%;
        color: #D9A87A;
       border: 1px solid #D9A87A;
       font-size: 3vw;
       position: absolute;
       left: 9vw;
       top: 19vw;
       text-align: center;
       border-radius: 2vw;
       background: white;
    }
    .top-list-p1{
        font-size: 3.4vw;
        position: absolute;
        left: 0vw;
        top: 23.5vw;
        color: white;
        width: 100%;
    }
    .top-list-p2{
        color: white;
        font-size: 3.2vw;
        position: absolute;
        left: 0vw;
        top: 27.5vw;
        width: 100%;
        text-align: center;
    }
    .top-list-bottom{
        width: 99%;
        margin: 0 auto;
        /* height: 30vw; */
        margin-top: 13vw;
        /* background: red; */
    }
    .list-bottom-box{
        display: flex;
    flex-wrap: wrap;
    }
  .list-bottom-box li{
    width: 49%;
    background:#fff;
    margin-left: 0.5vw;
    padding: 0.5vw;
    margin-top: 0.5vw;
    position: relative;
  }
  .list-bottom-box>li img{
    width: 80%;
    margin-left: 3vw;
  }
  .under-list-main1{
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: 0px auto;
  }
 
  .under-list-main1 span{
   width: 50% ;
  }
  .under-list-main1 span>p{
   text-align: center;
  }
  .ptitle2{
    margin-left: 3.5vw;
    margin-top: 3vw;
    font-size: 3.2vw;
    color: black;
    font-weight: bold;
  }
  .ptitle3{
    margin-left: 3.5vw;
    font-size: 3vw;
    color: #999;
  }
  .list-bottom-box li:nth-of-type(1){
    border-top-left-radius: 2vw;
  }
   .list-bottom-box li:nth-of-type(2){
    border-top-right-radius: 2vw;
  }
   .list-bottom-box li:nth-of-type(3){
    border-bottom-left-radius: 2vw;
  }
   .list-bottom-box li:nth-of-type(4){
    border-bottom-right-radius: 2vw;
  }
  .popularity-list1{
    color: #AB813A;
    font-size: 3vw;
    background: #F9F5EE;
    width: 25%;
    border-radius: 2vw;
    text-align: center;
    position: absolute;
    left: 29vw;
    top: 4vw;
  }
  .guess-you-like{
    width: 96%;
    margin: 0 auto;
    /* height: 30vw; */
    /* background: greenyellow; */
    margin-top: 5vw;
  }
  .like-background{
    width: 100%;
    background: url(../img/like.jpg) no-repeat;
    background-size: 100%;
    height: 6vw;
    }
    .like-list{
        width: 100%;
        margin-top: 1.5vw;
    }
    .like-list ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .like-list ul>li{
        width: 47%;
        background: #fff;
        text-align: center;
        padding: 1vw;
        margin-left: 2vw;
        border-radius: 2vw;
        margin-top: 2vw;
    }
    .like-img img{
        width: 100%;
    }
    .like-p1{
        width: 100%;
        color: black;
        font-size: 3.4vw;   
        height: 9vw;
        font-weight: bold;
        text-align: left;
        margin-top: 0.5vw;
        margin-left: 1vw;
        /* 让文字超出第二行后显示... */
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .like-p2{
        display: flex;
        flex-wrap: wrap;
        margin-top: 1vw;
    }
    .like-s1{
        width: 40%;
        color: black;
        background: #FEFBEE;
        font-size: 2vw;
        border: 1px solid #FFBB00;
        border-radius: 1vw;
        margin-left: 0.5vw;
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
        font-size: 3.5vw;
        font-weight: bold;
    }
    .price-s2{
        color: red;
        font-size: 4.5vw;
        font-weight: bold;
    }
    .comment{
        margin-left: 2vw;
        font-size: 3vw;
        color: #999999;
        line-height: 6vw;
    }
</style>