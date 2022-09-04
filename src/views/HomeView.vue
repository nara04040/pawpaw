<template>
  <div class="warp">
    <HeaderPart></HeaderPart>
    <VisualPart></VisualPart>
    <SliderPart></SliderPart>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPart from '@/components/HeaderPart.vue'
import VisualPart from '@/components/VisualPart.vue'
import SliderPart from '@/components/SliderPart.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderPart,
    VisualPart,
    SliderPart
  }
}
</script>
<style scoped>
.wrap {
  display: block;
  position: relative;
}
</style>
