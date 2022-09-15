<template>
  <form class="signup-wrap">
    <div class="row mb-3">
      <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-10">
        <input type="email" class="form-control" id="inputEmail3" />
      </div>
    </div>
    <div class="row mb-3">
      <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
      <div class="col-sm-10">
        <input type="password" class="form-control" id="inputPassword3" />
      </div>
    </div>
    <fieldset class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0">당신의 반려견은?</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios1"
            value="option1"
            checked
          />
          <label class="form-check-label" for="gridRadios1"> 고양이 🐈</label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="gridRadios"
            id="gridRadios2"
            value="option2"
          />
          <label class="form-check-label" for="gridRadios2"> 강아지 🐕 </label>
        </div>
      </div>
    </fieldset>
    <button type="submit" class="btn btn-primary clearfix">회원가입</button>
  </form>
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
.signup-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 500px;
}
.row {
  flex-wrap: nowrap;
}
.col-sm-2 {
  width: 30%;
}
.col-sm-10 {
  width: 80%;
}
.mb-3 {
  margin-bottom: 100px;
}

.btn-primary {
  float: right;
  margin-top: 20px;
  background-color: #ffb4ac;
  border: none;
  width: 8%;
}
</style>
