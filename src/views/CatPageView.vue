<template>
  <div class="a">고먐미 고양고양</div>

  <div class="item-tp">
    <a href="#">전체</a>
    <a href="#">건식</a>
    <a href="#">습식</a>
  </div>
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

  .item-tp{
    display: block;
    width: 150px;
    height: 150px;
    margin-left:25px;

  }

  .item-tp > a{

display:inline;
    width:50px;
    height: 80px;
margin-left:10px;
  }
  .item-tp>a:hover{

    color:#FC8675;
  }
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
  background:url('../assets/images/30edd2ad28c0e2372db45c883c0c2848.jpg')no-repeat center;
  background-size:cover;
}
</style>
