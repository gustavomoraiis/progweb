<template>
  <div class="container">
    <div class="row d-flex align-items-center">
       <div class="col-md-12 col-sm-12 col-lg-4"></div>
      <div class="col-md-12 col-sm-12 col-lg-4  margin">
          <h1>Notes App</h1>
          <p>Informe os dados abaixo para acessar</p>

          <b-form @submit.prevent="login">
            <b-form-group>
              <b-form-input
                v-model="email"
                type="email"
                placeholder="E-mail"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-input
                v-model="senha"
                type="password"
                placeholder="Senha"
                required
              ></b-form-input>
            </b-form-group>

            <b-button block type="submit" variant="primary">Acessar</b-button>
          </b-form>
          <a class="mt-5" href="../registro">Ainda não possui uma conta? Clique aqui para criar!</a>
      </div>
      <div class="col-md-12 col-sm-12 col-lg-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      senha: null
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            senha: this.senha
          }
        });

        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style>
.cover {
  background: url("https://url.gratis/wftZc") center center;
}

.margin{
    margin-top: 25%;
}

body {
  /* background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(24,0,112,1) 100%); */

  background: url("assets/background.jpg");
  background-repeat: no-repeat;
  background-size: auto;
}
</style>
