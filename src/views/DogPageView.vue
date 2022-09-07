<template>
  <div class="a">댕댕이 멍멍~</div>

  <div class="item-top">
    <ul>
      <li>사료</li>
      <li>간식</li>
      <li></li>
      <li></li>
    </ul>
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
.a {
  margin-top: 80px;
  margin-bottom: 150px;
}

.item-top > ul > li{
  position: relative;
  display: inline-block;
  right:780px;
  /* transform: translate(%); */
  top: -50px;
  margin-left: 20px;

}

.item-top >ul >li:hover{
color: #FC8675;
}
.item-list > li {
  float: left;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  margin-right: 50px;
  background: url('../assets/images/KakaoTalk_20220907_224506287.png')no-repeat center;
  background-size: cover;
}
</style>
