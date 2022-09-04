<template>
  <div class="slider">
    <ul class="slider-list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      sampleDate: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
<style scoped>
.slider {
  height: 180px;
  background-color: yellow;
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

.slider > ul > li {
  float: left;
  width: 100px;
  height: 50px;
  background-color: red;
  margin-right: 20px;
}
</style>
