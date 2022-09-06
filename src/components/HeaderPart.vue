<template>
  <div>
    <header class="header">
      <div class="inner">
        <router-link to="/" class="logo"></router-link>
      </div>
      <nav>
      <router-link to="/">Home</router-link> | <router-link to="/dogpage">DogPage</router-link> |
      <router-link to="/catpage">Cat Page</router-link> |
      <router-link to="/toypage">Toy</router-link> |
      <router-link to="/qnapage">Q&A</router-link>
    </nav>
    <div class="login">
      <router-link to="/loginpage">Login</router-link>
    </div>
    </header>
  </div>
</template>

<script>
export default {
  setup() {}
}
</script>

<style>
.inner{
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
}

.logo{
  display: block;
  width: 100px;
  height: 100px;
  background: url('@/assets/images/logo.png') no-repeat center;
}

a {
  text-decoration: none;
  color: inherit;
}
ul,
li {
  list-style: none;
}
.clearfix::after {
  content: '';
  position: relative;
  display: block;
  width: 100%;
  clear: both;
}
.inner {
  width: 1400px;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 20px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.login {
  display: block;
  position: absolute;
  top: 10px;
  right: 100px;
}
</style>
