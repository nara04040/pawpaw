<template>
  <div class="login-page">
    <div class="kakao-login">
      <a id="custom-login-btn" @click="kakaoLogin()">
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="300"
          alt=""
        />
      </a>
    </div>
    <div class="input-box">
      <input type="text" id="userid" placeholder="아이디" />
      <input type="text" id="password" placeholder="비밀번호" />
    </div>
    <button @click="correctLogin" id="login-btn">로그인</button>
    <router-link to="/signuppage" id="signup-btn" class="clearfix">회원가입</router-link>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      example: '',
      userName: 'nara'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    correctLogin() {
      alert(`환영합니다 ${this.userName}님`)
      location.href = 'http://localhost:8080/'
    },
    kakaoLogin() {
      console.log(window.Kakao)
      window.Kakao.Auth.login({
        scope: 'profile_nickname, account_email',
        success: this.getKakaoAccount
      })
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: (res) => {
          const kakaoAccount = res.kakaoAccount
          const nickname = kakaoAccount.nickname
          const email = kakaoAccount.email
          console.log('nickname', nickname)
          console.log('email', email)

          alert('로그인 성공!')
        },
        fail: (error) => {
          console.log(error)
        }
      })
    }
  }
}
</script>
<style scoped>
.login-page {
  position: relative;
}
.kakao-login {
  position: relative;
  padding: 30px 0;
  /* background-color: #f9e000; */
  margin-bottom: 24px;
}
.kakao-login::after {
  position: absolute;
  top: 100px;
  left: 50%;
  content: '또는';
  margin: 0 auto;
  padding: 0 10px;
  background: #fff;
  font-size: 12px;
  color: #b2b2b2;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
}
.login-page {
  padding: 50px 100px;
  /* background-color: antiquewhite; */
}
.input-box {
  padding: 30px 0;
  border-top: 1px dot #f5f5f5;
}
#userid {
  padding: 0 15px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: none;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
}
#password {
  padding: 0 15px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  border: none;
  font-size: 14px;
  color: #000;
  box-sizing: border-box;
}
#login-btn {
  padding: 0;
  display: inline-block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border: 1px;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
#signup-btn {
  display: block;
  float: left;
  border-style: none;
  width: 70px;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  margin-top: 10px;
}
</style>
