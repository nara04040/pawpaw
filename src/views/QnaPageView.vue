<template>
  <section class="qna">
    <div class="inner">
      <div class="qna-visual">
        <p>CUSTOMER CENTER</p>
        <h2>QnA</h2>
        <span>
          PAWPAW에 궁금하신 점이 있으면 <br />
          바로 문의해주세요
        </span>
      </div>
      <div class="qna-content">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Content</th>
              <th scope="col">Name</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </table>
        <div class="qna-bt clearfix">
          <button class="add-bt">글쓰기</button>
          <button class="delete-bt">삭제</button>
        </div>
      </div>
    </div>
  </section>
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
.qna .inner {
  width: 1400px;
  margin: 0 auto;
}

.qna-visual {
  position: relative;
  display: block;
  padding: 30px;
  text-align: left;
  background-color: rgb(172, 172, 172);
  border-radius: 10px 10px 0 0;
  margin: 25px 0;
  opacity: 0.7;
}

.qna-visual h2 {
  text-shadow: 0px 1px 4px rgb(119, 119, 119);
  color: #fff;
}
.qna-content {
  position: relative;
  display: block;
}

.qna-bt {
  position: relative;
  display: block;
  float: right;
  margin-right: 20px;
}

.add-bt {
}
</style>
