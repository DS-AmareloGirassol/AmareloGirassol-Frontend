<template>
  <div class="container">
    <div class="left-panel">
      <h1 class="titulo">
        <span class="text-UnB">UnB</span><span class="text-Connect">Connect</span>
      </h1>
    </div>
    <div class="right-panel">
      <h3 class="form-title">Recuperar E-mail</h3>
      <form class="recuperar-form" @submit.prevent="recoverEmail">
        <label for="email" class="white-text">E-mail</label>
        <input type="email" id="email" v-model="form.email" placeholder="Digite seu e-mail" class="form-element">
        <button type="submit" class="btn-recuperar form-element">Recuperar Login</button>
        <div class="separator"></div>
        <p class="Login-page">Já lembrou sua conta? 
          <router-link to="/login" class="entrar-link">Entrar</router-link>
        </p>
      </form>
      <img src="/src/assets/unb-logo.png" alt="Logo UnB" class="unb-logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        nomecompleto: '',
        email: '',
        password: '',
        confirm_password: '',
        semestre: ''
      },
      semestres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },

}
</script>

<style>

/* Importação das fontes */
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');

/* Estilos gerais */
body {
  font-family: 'Jost', sans-serif;
  background-color: #EAEAEA;
  color: white;
}

.container {
  display: flex;
  height: 100vh;
}

/* Painel Esquerdo */
.left-panel {
  flex: 3;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.left-panel h1 {
  color: #008137;
  font-size: 100px;
}

.text-UnB {
  color: #001f4d;
}

.left-panel p {
  color: #f0edf3;
  font-size: 14px;
}

.unb-logo {
  width: 50px;
  height: auto;
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10%;
}

/* Painel Direito */
.right-panel {
  flex: 1;
  background-color: #021565;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
}

.right-panel h3 {
  color: white;
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 24px;
  text-align: center;
}

.recuperar-form {
  width: 75%;
  max-width: 400px;
}

/* Estilo comum para inputs, select e botão */
.recuperar-form .form-element {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
}

.recuperar-form input::placeholder {
  color: #666;
}


/* Estilo para botões */
.recuperar-form button {
  background-color: #1e7e34;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.recuperar-form button::after {
  content: '>';
  position: absolute;
  right: 20px;
  transform: translateX(0);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.recuperar-form button:active {
  background-color: #0f551e;
  transform: translateX(5px);
}

.recuperar-form button:active::after {
  transform: translateX(5px);
  opacity: 1;
}

/* Separador */
.separator {
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 20px 0;
}

/* Estilo para links de registro */
.Login-page{
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: white;
  font-family: 'Inter', sans-serif;
}

/* Estilo específico para o link 'Entrar' */
.entrar-page-link{
  color: #28a745; /* Verde */
  text-decoration: none;
}

/* Linha vertical no painel direito */
.right-panel::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 5px;
  background-color: white;
}

/* Responsividade */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-panel, .right-panel {
    flex: none;
    width: 100%;
    height: auto;
  }

  .right-panel {
    padding: 20px;
  }
}
</style>