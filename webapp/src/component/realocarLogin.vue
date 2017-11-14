<template>
  <div class="realocar-login">
    <div class="base-container">
      <div class="realocar-login__form">
        <div class="realocar-login__form__label">
          <label for="username">Usuário</label>
        </div>
        <div class="realocar-login__form__input">
          <input name="username" type="text" v-model="login.username">
        </div>
        <div class="realocar-login__form__label">
          <label for="password">Senha</label>
        </div>
        <div class="realocar-login__form__input">
          <input name="password" type="password" v-model="login.password">
        </div>
        <div class="realocar-login__form__submit">
          <button @click.stop="submit()" type="submit">
            Entrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'realocarLogin',
  data() {
    return {
      login: new Object()
    }
  },
  methods: {
    submit() {
      var url = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:5000/api'
      this.$http.post(`${url}/login`, {login: this.login}).then( (response) => {
        console.log('response: ', response.data)
      }, (error) => {
        console.log('error: ', error)
      })
    },
  }
}
</script>

<style lang="scss" src="../style/realocarLogin.scss"></style>
