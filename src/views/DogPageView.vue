<template>
  <div class="a"></div>

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
      <li>도비 어덜트</li>
      <li>도비 시니어</li>
      <li>도비 다이어트</li>
      <li>도비 프로페셔널</li>
    </ul>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="item">
    <ul class="item-list clearfix">
      <li>도비 퍼피</li>
      <li>도비 스페셜</li>
      <li>도비 골드</li>
      <li>도비 올라이프</li>
    </ul>
  </div>

  <div class="food">
    <ul class="food-list clearfix">
      <li>도비 어덜트</li>
      <li>도비 시니어</li>
      <li>도비 다이어트</li>
      <li>도비 프로페셔널</li>
    </ul>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <div class="food">
    <ul class="food-list clearfix">
      <li>도비 퍼피</li>
      <li>도비 스페셜</li>
      <li>도비 골드</li>
      <li>도비 올라이프</li>
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

.item-top{
  position: relative;
  display: block;
  width: 100px;
  height: 100px;
}

.item-top > ul {

  display: block;
  width: 150px;
  height: 150px;

}

.item-top > ul > li{
  /* display: block;
  right:730px;
  white-space: nowrap;
  width:100px;
  height: 100px;
  /* transform: translate(%); */
  /* top: 0px;
  margin-left: 20px; */

  display: inline;

    width: 200px;
    height: 200px;
    white-space: nowrap;
    margin-left: 10px;

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
  padding-top:100px;

}

.food{
  position: relative;
  display: block;
  padding-top:100px;
}
.food-list{
  position: relative;
  display: block;
 padding-bottom: 100px;
}
/* .food{
  position: relative;
  display: block;
  width: 200px;
  height: 150px;
}
.food-list{
  position: relative;
  display: block;
} */
.food-list> li{
float: left;
widows: 100px;
height: 100px;
margin-right:50px;
padding-top:100px;
background: url('../assets/images/dog-treats-on-white-background_23-2148181697.jpg')no-repeat center;
background-size:cover;
}
</style>
