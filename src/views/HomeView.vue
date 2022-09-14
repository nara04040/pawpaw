<template>
  <div class="warp">
    <VisualPart></VisualPart>
    <SliderPart></SliderPart>
  </div>
</template>

<script>
// @ is an alias to /src
import VisualPart from '@/components/VisualPart.vue'
import SliderPart from '@/components/SliderPart.vue'

export default {
  name: 'HomeView',
  components: {
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
