<template>
    <main>
        <header>
           <span>商品分类</span> 
            <input type="text" name="" id="" placeholder="搜索商品或店铺">
            <div class="search-btn"><img src="../img/search-icon.png" alt=""></div>
        </header>
        
        <van-tree-select class="box" height="82vh" :items="items" :main-active-index.sync="active">
        
        <template #content>
            <div v-if="active===0">
              <div v-for="(items,index) in list" :key="index">
                  <p class="type-list-title">{{items.p}}</p>
            <ul class="type-list"  >
        
        <li v-for="(items,index) in items.lis" :key="index">
          <router-link to="/list">
            <img :src="items.src" alt="">
            <p class="type-list-p1">{{items.p1}}</p>
              </router-link>
        </li>
      
        </ul>
              </div>
            </div>
        
        <!-- 手机 -->
         <div v-if="active===1">
              <div v-for="(items,index) in list1" :key="index">
                  <p class="type-list-title">{{items.p}}</p>
            <ul class="type-list"  >
        <li v-for="(items,index) in items.lis1" :key="index">
            <img :src="items.src" alt="">
            <p class="type-list-p1">{{items.p1}}</p>
        </li>
        </ul>
              </div>
            </div>
        
        </template>
        </van-tree-select> 
    </main>
</template>
<script>

export default {
  data() {
    return {
      active: 0,
      items: [{ text: '热门推荐' },
       { text: '手机' },
      { text: '大家电' }, 
      { text: '生活家电' },
      { text: '电脑办公' },
      { text: '厨卫大电' },
      { text: '智能数码' },
      { text: '食品酒饮' },
      { text: '家装建材' },
      { text: '母婴用品' },
      { text: '个护清洁' },
      { text: '美妆护肤' },
      { text: '家纺' },
      { text: '苏宁粤菜' },
      { text: '苏宁宜品' },
      { text: '苏宁国际' },
      { text: '苏宁超市' },
      { text: '男装' },
      { text: '女装' },
      { text: '女鞋' },
      { text: '运动户外' },
      { text: '珠宝首饰' },
      { text: '宠物鲜花' },
      { text: '滋补保健' },
      { text: '医疗器械' },
      { text: '计生情趣' },
      { text: '厨具水具' },
      { text: '苏宁生鲜' },
      { text: '中西药品' },
      { text: '钟表眼镜' },
      { text: '汽车生活' },
      { text: '童装玩具' },
      { text: '箱包' },
      { text: '内衣配饰' },
      { text: '图书音像' },
      ],
      list:[
        {
          p:'热门推荐',
          lis:[
            {        
            src:'images/phone1.jpg',
            p1:'手机'
        },
        {
           
            src:'images/hot2.jpg',
            p1:'空调'
        },
        {
            src:'images/hot3.jpg',
            p1:'笔记本'
        },
         {
            src:'images/hot4.jpg',
            p1:'平板电脑'
        },
          {
            src:'images/hot5.jpg',
            p1:'热水器'
        },
          {
            src:'images/hot6.jpg',
            p1:'烟灶套餐'
        },
          {
            src:'images/hot7.jpg',
            p1:'电视'
        },
          {
            src:'images/hot8.jpg',
            p1:'冰箱'
        },
          {
            src:'images/hot9.jpg',
            p1:'电风扇'
        },
          {
            src:'images/hot10.jpg',
            p1:'净水器'
        },
          {
            src:'images/hot11.jpg',
            p1:'净水器'
        }
            
          ],
    } 
      ],
      //手机
      list1:[
        {
          p:'手机',
          lis1:[
            {
               src:'images/phone1.jpg',
            p1:'5G手机'
            },
             {
            src:'images/phone2.jpg',
            p1:'苹果手机'
        },
         {
            src:'images/phone3.jpg',
            p1:'游戏手机'
        },
         {
            src:'images/phone4.jpg',
            p1:'拍照手机'
        },
         {
            src:'images/phone5.jpg',
            p1:'曲面屏手机'
        },
         {
            src:'images/phone6.jpg',
            p1:'折叠屏手机'
        },
         {
            src:'images/phone7.jpg',
            p1:'长续航手机'
        },
         {
            src:'images/phone8.jpg',
            p1:'老人机'
        },
         {
            src:'images/phone9.jpg',
            p1:'骁龙手机'
        },
         {
            src:'images/phone10.jpg',
            p1:'以旧换新'
        },
         {
            src:'images/phone11.jpg',
            p1:'二手优品'
        },
          ],
          
        },

        {
          p:'热销大牌',
          lis1:[
            {
               src:'images/brand1.png',
              p1:''
            },
             {
            src:'images/brand2.jpg',
            p1:''
        },
         {
            src:'images/brand3.jpg',
            p1:''
        },
         {
            src:'images/brand4.jpg',
            p1:''
        },
         {
            src:'images/brand5.jpg',
            p1:''
        },
         {
            src:'images/brand6.jpg',
            p1:''
        },
         {
            src:'images/brand7.png',
            p1:''
        },
         {
            src:'images/brand8.jpg',
            p1:''
        },
         {
            src:'images/brand9.jpg',
            p1:''
        },
         {
            src:'images/brand10.png',
            p1:''
        },
        
          ],
          
        },

        {
          p:'手机配件',
          lis1:[
            {
               src:'images/part1.jpg',
              p1:'充电宝'
            },
             {
            src:'images/part2.png',
            p1:'充电器/充电头'
        },
         {
            src:'images/part3.png',
            p1:'充电线'
        },
         {
            src:'images/part4.jpg',
            p1:'手机壳/套'
        },
         {
            src:'images/part5.jpg',
            p1:'手机膜'
        },
         {
            src:'images/part6.png',
            p1:'内存卡'
        },
         {
            src:'images/part7.jpg',
            p1:'手机U盘'
        },
         {
            src:'images/part8.jpg',
            p1:'苹果套餐'
        },
         {
            src:'images/part9.jpg',
            p1:'手机电池'
        },
         {
            src:'images/part10.jpg',
            p1:'无线充'
        },
         {
            src:'images/part11.jpg',
            p1:'手机支架'
        },
        
          ],
          
        },
        {
          p:'运营商',
          lis1:[
            {
               src:'images/operator1.png',
              p1:'运营商网厅'
            },
             {
            src:'images/operator2.png',
            p1:'手机卡'
        },
         {
            src:'images/operator3.png',
            p1:'宽带'
        },
         {
            src:'images/operator4.png',
            p1:'苏宁互联'
        },
         {
            src:'images/operator5.png',
            p1:'视听娱乐'
        },
          ],
          
        },
        {
          p:'只能产品',
          lis1:[
            {
               src:'images/intellectual1.jpg',
              p1:'苹果手表'
            },
             {
            src:'images/intellectual2.jpg',
            p1:'华为手表'
        },
         {
            src:'images/intellectual3.jpg',
            p1:'荣耀手表'
        },
         {
            src:'images/intellectual4.jpg',
            p1:'职能手环'
        },
         {
            src:'images/operator5.jpg',
            p1:'智能手表'
        },
         {
            src:'images/operator6.jpg',
            p1:'儿童手表'
        },
          ],
          
        }
      ]
    };
  },
};
</script>
<style scoped>
main{
    background: white;
}
header{
    margin-top: 3vw;
    position: relative;
}
header span{
 font-size: 5vw;
 margin-left: 5vw;
}
header input{
    margin-left: 7vw;
    background: #f7f7f7;
    border: none;
    outline: none;
    width: 65%;
    height: 8vw;
    border-radius: 5vw;
    font-size: 4vw;
    padding-left: 8vw;
}

.type-list{
    display: flex;
    flex-wrap: wrap;
}
.type-list-title{
    font-size: 3vw;
    margin-left: 2vw;
    font-weight: bold;
    margin-top: 5vw;
}

.box ul>li{
    width: 33%;
    text-align: left;
    margin-top: 5vw;
    text-align: center;
}
.box ul>li a{
  color: black;
}
.box ul>li img{
    width: 70%;
}
.type-list-p1{
    font-size: 3vw;
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* position: fixed;
    left: 0;
    bottom: 0; */
}
.van-tree-select{
    margin-top: 6vw;
}
::placeholder{
    /* padding-left: 8vw; */
    font-size: 4vw;
}
.search-btn>img{
    width: 5%;
    position: absolute;
    top: 1.5vw;
    left: 34vw;
}

</style>