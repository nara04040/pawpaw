<template>
  <div class="header">
    <h1>logo</h1>
    <div id="main-logo">mainlogo</div>
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
.header {
  width: 100%;
  height: 130px;
  background-color: yellowgreen;
}
h1 {
  position: absolute;
  top: 10px;
  left: 30px;
  background-color: blue;
}
#main-logo {
  display: inline-block;
  width: 50px;
  height: 30px;
  margin: 0 auto;
  background-color: green;
}
</style>
