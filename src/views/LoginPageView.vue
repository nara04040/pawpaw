<template>
  <div class="login-form">
    <div>
      <label for="userid">아이디 </label>
      <input type="text" id="userid" />
    </div>
    <div>
      <label for="password">비밀번호 </label>
      <input type="text" />
    </div>
    <button @click="correctLogin">입력</button>
    <button>
      <router-link to="/signuppage">회원가입</router-link>
    </button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      example: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    correctLogin() {
      alert('로그인되었습니다!')
    }
  }
}
</script>
<style scoped>
input {
  margin: 0 8px 30px 10px;
}
.login-form {
  margin-top: 150px;
}
</style>
