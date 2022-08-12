<template>
    <main>
        <header>
            <div class="search">
            <span class="back">
                <router-link to="/index">
                <img src="../img/back.png" alt="">
                </router-link>
                </span>
            <input type="text" placeholder="请搜索商品、店铺">
            <span class="cut">
                <router-link to="">
                <img src="../img/grid.png" alt="">
                </router-link>
                </span>
                <span class="search-btn">
                    <img src="../img/search-icon.png" alt="">
                </span>
            </div>
           <div class="goods-img">
            <img src="../img/a.jpg" alt="">
           </div>
           <!-- <ul class="section-box">
                <li class="current" v-on:click="change">
                        综合
                </li>
                <li v-on:click="change">    
                        销量
                </li>
                <li v-on:click="change">
                        价格
                        <span class="up-down">
                            <img src="../img/up-down.png" alt="">
                        </span>
                </li>
                <li v-on:click="change">
                        筛选
                </li>
           </ul> -->
      
        </header>  
             <van-tabs v-model="active" sticky>
            <van-tab v-for="(items,index) in list" :title="items.a" :key="index">
             <ul class="section-box">
                <li v-for="(items,index) in items.lis" :key="index">
                    <div class="li-section">
                        <span class="li-img">
                            <img :src="items.src" alt="">
                        </span>
                        <div class="img-right">
                            <p class="p1">{{items.p1}}</p>
                            <p class="p2">{{items.p2}}</p>
                             <div class="price">
                            <span class="price-s1">{{items.s1}}</span>
                            <span class="price-s2">{{items.s2}}</span>
                            <span class="price-s3">{{items.s3}}</span>
                        </div>
                        <span class="right-s1">{{items.new}}</span>
                        <p class="p3">
                            <span class="right-s2">{{items.s4}}</span>
                            <span class="right-s3">{{items.s5}}</span>
                        </p>
                        <p class="p4">
                            <span class="right-s4">{{items.s6}}</span>
                            <span class="right-s5"><img :src="items.src1" alt=""></span>
                            <span class="right-s6">{{items.s7}}</span>
                            <span class="right-s7">{{items.s8}}</span>
                        </p>
                        </div>
                    </div>
                </li>
             </ul>
            </van-tab>
            </van-tabs> 
    </main>
</template>
<script>
export default {
    // methods:{
    //     change:function(){
    //         var num=0;
    //         var list=document.getElementsByClassName('section-box')[0].children;
    //         for(var i=0;i<list.length;i++){
    //             list[i].setAttribute('index',i);
    //             for(var t=0;t<list.length;t++){
    //                 num=this.getAttribute('index');
    //                 list[t].removeAttribute('class','current');
    //             }
    //             list[num].setAttribute('class','current')
    //         }
    //     }
    // },
   data(){
    return{
    list:[
        {
            a:'综合',
            lis:[
                {
                    src:'images/section1.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
                {
                    src:'images/section1.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
                {
                    src:'images/section1.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
            ]
        },
         {
            a:'销量',
            lis:[
                {
                    src:'images/section2.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
                {
                    src:'images/section2.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
                {
                    src:'images/section2.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
            ]
        },
         {
            a:'价格',
            lis:[
                {
                    src:'images/section1.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
                {
                    src:'images/section1.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
                {
                    src:'images/section1.jpg',
                    p1:'格力空调天丽新一级节能大1匹壁挂式家用卧室空调专卖店同款KFR-26GW (26530)FNhAk-B1',
                    p2:'56度净菌自洁',
                    s1:'￥',
                    s2:'2799',
                    s3:'.00',
                    new:'新品',
                    s4:'300+条评价',
                    s5:'好评率100%',
                    s6:'格力广州专卖店',
                    src1:'images/good.png',
                    s7:'进店>',
                    s8:'广告'
                },
            ]
        },
         {
            a:'筛选'
        },
    ]
    }
   }
}
</script>

<style scoped>
main{
    background: #f2f2f2;
}
header{
    background: #fff;
}
    .search{
        width: 100%;
        margin-top: 2vw;
        display: flex;
        justify-content: space-around;
        position: relative;
    }
    .search input{
        width: 75%;
        background: #f2f2f2;
        border: none;
        border-radius: 1vw;
    }
    ::placeholder{
        font-size: 3.5vw;
        padding-left: 7vw;
        
    }
    .search-btn{
        position: absolute;
        left: 14vw;
        top: 1vw;
    }
    .search-btn img{
        width: 5vw;
    }
    .back img{
        width: 6vw;
    }
    .cut img{
        width: 6vw;
    }
    .goods-img{
        width: 100%;
        margin-top: 2vw;
    }
    .goods-img img{
        width: 100%;
    }
    .section-box{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
        /* text-align: left; */
    }
    .section-box li{
        width: 98%;
        margin: 0 auto;
        margin-top: 1vw;
        background: #fff;
        padding: 2vw;
    }
    .li-section{
        display: flex;
        flex-direction: row;
    }
    .li-img img{
        width: 90%; 
    }
    .li-img{
        width: 30%;
    }
    .img-right{
        width: 70%;
    }
    .p1{
        width: 100%;
        color: black;
        font-size: 3.5vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .p2{
        color: #999;
        font-size: 3vw;
    }
     .price{
        width: 100%;
        text-align: left;
        margin-top: 2vw;
        display: flex;
        align-items: flex-end;
    }
        .price-s1{
        color: red;
        font-size: 3vw;
    }
    .price-s2{
        color: red;
        font-size: 4vw;
    }
    .price-s3{
        color: red;
        font-size: 3vw;
    }
    .right-s1{
        background: #f60;
        color: white;
        font-size: 2vw;
        border-radius: 0.5vw;
    }
    .p3{
        color: #999;
        font-size: 3.8vw;
        margin-top: 2vw;
    }
    .right-s3{
        padding-left: 3vw;
    }
    .right-s4{
        color: #999;
        font-size: 3.8vw;
    }
    .right-s5 img{
        width: 4vw;
        vertical-align: middle;
    }
    .right-s5{
        padding-left: 2vw;
    }
    .right-s6{
        font-size: 3vw;
        color: #999;
        padding-left: 2vw;
    }
    .right-s7{
        font-size: 3.2vw;
        color: #ccc;
        padding-left: 15vw;
    }
</style>