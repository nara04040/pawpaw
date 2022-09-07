<template>
  <section class="qna">
    <div class="inner">
      <div class="qna-visual">
        <h2>QnA</h2>
      </div>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
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
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
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
  background-color: rgb(172, 172, 172);
  border-radius: 10px 10px 0 0;
  margin: 25px 0;
  opacity: 0.8;
}

.qna-visual h2 {
  text-align: left;
  text-shadow: 0px 1px 4px rgb(119, 119, 119);
  color: #fff;
}
</style>
