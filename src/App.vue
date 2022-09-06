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
</style>
