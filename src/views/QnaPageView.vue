<template>
  <div>
    <ul class="qna-list">
      <li>물어보세요</li>
      <li>물어보세요</li>
      <li>물어보세요</li>
      <li>물어보세요</li>
    </ul>
    <button>입력</button>
    <button>입력</button>
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
.qna-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}
.qna-list > li {
  width: 200px;
  height: 100px;
  margin-bottom: 20px;
  background-color: skyblue;
}
button {
  padding: 20px;
  margin-right: 40px;
  margin-left: 40px;
}
</style>
