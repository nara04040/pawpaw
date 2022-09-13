<template>
  <div>
    <header class="header">
        <div class="header-top">
        <router-link to="/" class="logo"></router-link>
        <p class="title">PawPaw</p>
    <div class="header-right">
      <router-link to="/loginpage">Login</router-link>
    </div>
        </div>
        <div class="asd">
      <ul class="nav">
        <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/dogpage">DogPage</router-link></li>
      <li><router-link to="/catpage">Cat Page</router-link></li>
      <li><router-link to="/toypage">Toy</router-link></li>
      <li><router-link to="/qnapage">Q&A</router-link></li>
      </ul>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  setup() {}
}
</script>

<style scoped>

.header-top{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 25px #D9D9D9;
  max-height: 100px;
}

.logo{
  display: block;
  width: 100px;
  height: 100px;
  background: url('@/assets/images/logo.png') no-repeat center;
  background-size: cover;
  margin-left: 30px;
}

.title{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  display: block;
  width: 60%;
  text-align: center;
  font-size: 40px;
  color: #FC8675;
  font-weight: 700;
}

.header-right{
  display: block;
  width: 200px;
  height: 100px;
  margin-right: 30px;
}
.header-right a {
  line-height: 100px;
  color: #FC8675;
  font-size: 16px;
  font-weight: 600;
}
.asd{
  display: block;
  width: 100%;
  height: 70px;
  line-height: 70px;
}
.nav {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav li{
  position: relative;
  width: 25%;
  text-align: center;
}
.nav li::after{
  content: '';
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 60%;
  background: #000;
  opacity: 0.2;
}
.nav li:last-child::after{
  display: none;
}
.nav a{
  display: block;
  font-weight: bold;
  color: #FFB4AC;
  padding: 0 20px;
  line-height: 70px;
  transition: color 0.5s;
}
.nav a:hover{
  color: #FC8675;
}
.nav a.router-link-exact-active {
  color: #FC8675;

}
</style>
