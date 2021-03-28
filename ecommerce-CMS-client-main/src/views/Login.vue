<template>
   <main class="container my-5">
        <div class="row" id="row">
          <section class="col login-col">
            <div class="card shadow p-5" id="main-body-login">
              <form @submit.prevent="login">
                <h3 class="text-center text-uppercase mb-4">Login</h3>
                <p style="color: red"> {{ loginError }}</p>
                <hr>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Email" class="form-control" v-model="user.email">
                </div>
                <label for="Password">Password</label>
                <div class="input-group mb-3">
                  <input type="password" name="password" v-model="user.password" class="form-control" placeholder="Enter Password" aria-label="Enter Password" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                  </div>
                </div>
                <div id="button-login">
                    <button class="btn btn-block btn-secondary rounded-pill mt-3 actions">Login</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    }
  },
  computed: {
    loginError () {
      return this.$store.state.loginError
    }
  }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
main .card {
    background-color: #3475;
  }
  body {
    background: #fe8c00; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #98FF98,
      #A7FFA7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #bffcbf,
      #b5dbb5
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: white;
  }
  h3 {
    font-family: Times New Roman;
    font-weight: bold;
  }
  hr {
    border-bottom: solid white 1px;
  }
  #button-login{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
  }
  .actions {
      width: 442px;
      height: 38px;
    background: #0f2027; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #2c5364,
      #203a43,
      #0f2027
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  input {
    background-color: #3475 !important;
    color: white !important;
  }
  ::placeholder {
    color: white !important;
  }
  #main-body-login {
      border-radius: 15px;
  }
  .login-col {
    display: flex;
    justify-content: center;
  }
</style>
