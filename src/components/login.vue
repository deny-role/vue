<template>
    <main>
        <header>
            <router-link to="">
           联系客服
        </router-link>
        <div class="welcome">
            <img src="../img/login-icon.png" alt="">
            <span>欢迎登录苏宁易购</span>
        </div>
        </header>
        <div class="center">
            <span class="center-s1">
                <input type="text" placeholder="请输入手机号">
            </span>
            <span class="center-s2">
                <input type="text">
                <router-link to="">
                    <div class="cennter-div">
                        获取验证码
                    </div>
                    </router-link>
            </span>
            <div class="center-div1">
                未注册的手机号验证后自动注册
            </div>
            <div class="login-btn">
                <router-link to="/mine">
                    <button>
                        登录
                    </button>
                </router-link>
            </div>
            <div class="center-div2">
                <router-link to="">
                账号密码登录
            </router-link>
            </div>
        </div>

        <div class="footer">
            <span>
                ——————— 其他登录方式 ———————
            </span>
            <div class="footer-img">
                <span class="footer-s1">
                    <router-link to="">
                    <img src="../img/icon_qq.png" alt="">
                </router-link>
                </span>
                 <span class="footer-s2">
                    <router-link to="" >
                    <img src="../img/icon_epp.png" alt="">
                </router-link>
                </span>
            </div>
            <p class="footer-p">
                <span >
                    我同意
                </span>
                <b>《</b>
                <router-link to="">
                    苏宁易购会员章程
                </router-link>
                <b>》</b>
                <b>《</b>
                <router-link to="">
                    易付宝协议
                </router-link>
                <b>》</b>
            </p>
        </div>
    </main>
</template>
<script>

export default{
    
}
</script>

<style scoped>
    header a{
        color: black;
        font-size: 3vw;
        display: flex;
        flex-direction: row-reverse;
        margin-top: 3vw;
        margin-right: 3vw;
    }
    .welcome{
        width: 80%;
        margin: 0 auto;
        margin-top: 10vw;
        display: flex;
        flex-direction: row;
    }
    .welcome img{
        width: 15%;
        /* vertical-align: middle; */
    }
    .welcome span{
        line-height: 12vw;
        margin-left: 5vw;
        font-size: 4.5vw;
    }
    .center{
        width: 80%;
        margin: 0 auto;
    }
    .center-s1{
        width: 100%;
    }
    .center-s1 input{
        width: 100%;
        height: 10vw;
        margin-top: 10vw;
        border: none;
        border-bottom: 1px solid #ccc;
    }
    ::placeholder{
        color: #ccc;
    }
    .center-s2{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .center-s2 input{
        width: 70%;
        margin-top: 10vw;
         border: none;
        border-bottom: 1px solid #ccc;
    }
    .center-s2 a{
        width: 30%;
    }
   .center-s2 div{
    text-align: center;
        width: 100%;
        height: 10vw;
        border: 1px solid #ccc;
        margin-top: 5vw;
        border-radius: 2vw;
        line-height: 10vw;
        color: #ccc;
    }
    .center-div1{
        width: 100%;
        color: #999999;
        font-size: 3vw;
        margin-top: 1vw;
    }
    .login-btn{
        width: 100%;
    }
    .login-btn a{
        width: 100%;
    }
    .login-btn button{
        width: 100%;
        height: 12vw;
        background: #fc0;
        border: none;
        text-align: center;
        border-radius: 3vw;
        margin-top: 10vw;
        color: black;
        font-weight: bold;
        font-size: 4.5vw;
    }
  .center-div2{
    width: 100%;
    text-align: center;
    margin-top: 5vw;
  }
    .center-div2 a{
        width: 100%;
        color: black;
    }
    .footer{
        width: 70%;
        margin: 0 auto;
        position: fixed;
        left: 15vw;
        bottom: 5vw;
        text-align: center;
    }
    .footer span{
        width: 100%;
        color: #999;
        font-size: 3vw;
    }
    .footer-img{
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
    }
    .footer-img img{
        width: 30%;
        margin-top: 2vw;
    }
    .footer-p{
        width: 100%;
        margin-top: 2vw;
        /* margin-bottom: 5vw; */
    }
    .footer b{
        font-size: 3vw;
    }
    .footer-p a{
        color: #101010;
        font-size: 3vw;
        text-decoration: underline;
    }
</style>