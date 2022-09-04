<template>
  <div class="a">댕댕이 멍멍~</div>

  <div class="item">
    <ul class="item-list clearfix">
      <li>아이템 1</li>
      <li>아이템 1</li>
      <li>아이템 1</li>
      <li>아이템 1</li>
    </ul>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="item">
    <ul class="item-list clearfix">
      <li>아이템 1</li>
      <li>아이템 1</li>
      <li>아이템 1</li>
      <li>아이템 1</li>
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
.a {
  margin-top: 80px;
  margin-bottom: 150px;
}
.item-list > li {
  float: left;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin-right: 50px;
}
</style>
