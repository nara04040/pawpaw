<template>
  <HeaderPart></HeaderPart>
  <router-view />
  <FooterPart></FooterPart>
</template>

<script>
import HeaderPart from './components/HeaderPart.vue'
import FooterPart from './components/FooterPart.vue'
export default {
  components: { HeaderPart, FooterPart }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

  .inner{
    position: relative;
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    display: block;
  }
</style>
