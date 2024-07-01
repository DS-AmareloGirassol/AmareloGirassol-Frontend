<template>
  <div class="container">
    <div class="left-panel">
      <h1 class="titulo">
        <span class="text-UnB">UnB</span><span class="text-Connect">Connect</span>
      </h1>
    </div>
    <div class="right-panel">
      <h3 class="form-title">Registre-se</h3>
      <form class="cadastro-form" @submit.prevent="submitForm">
        <label for="nomecompleto">Nome completo</label>
        <input type="text" id="nomecompleto" v-model="form.nomeCompleto" placeholder="Nome completo" class="form-element">

        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="form.email" placeholder="Seu e-mail" class="form-element">

        <label for="password">Digite sua senha</label>
        <input type="password" id="password" v-model="form.password" placeholder="Digite sua senha" class="form-element">

        <label for="confirm_password">Confirme sua senha</label>
        <input type="password" id="confirm_password" v-model="form.confirmPassword" placeholder="Confirme sua senha" class="form-element">

        <label for="semestre">Selecione o Semestre</label>
        <select id="semestre" v-model="form.semestre" class="form-element">
          <option value="" disabled>Selecione um semestre</option>
          <option v-for="semestre in semestres" :key="semestre" :value="semestre">{{ semestre }}º Semestre</option>
        </select>


        <button type="submit" class="btn-cadastrar form-element">Cadastrar</button>

        <div class="separator"></div>
        <p class="Login-page">Já tem uma conta? 
          <router-link to="/login" class="entrar-link">Entrar</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterForm',
  data() {
    return {
      form: {
        nomeCompleto: '',
        email: '',
        password: '',
        confirmPassword: '',
        semestre: ''
      },
      semestres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
  },
  methods: {
    async submitForm() {
      if (this.form.password !== this.form.confirmPassword) {
        alert("As senhas não coincidem!");
        return;
      }
      console.log("Formulário enviado:", this.form);
      try {
        const response = await axios.post('http://localhost:8000/api/users/', {
          name: this.form.nomeCompleto,
          email: this.form.email,
          password: this.form.password
        });
        
        alert("Login feito com sucesso!");
        this.$router.push({ name: 'Login' });
      } catch (err) {
        this.error = 'Invalid credentials';
      }
    }
  }
}
</script>

<style>
/* Importação das fontes */


/* Estilos gerais */
body {
  background-color: #EAEAEA;
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
  color: #4B0082;
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

.cadastro-form {
  width: 75%;
  max-width: 400px;
}

/* Estilo comum para inputs, select e botão */
.cadastro-form .form-element {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.cadastro-form input::placeholder {
  color: #666;
}

/* Estilo dos labels */
.cadastro-form label {
  color: white;
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
}

/* Botão Cadastrar */
.cadastro-form .btn-cadastrar {
  background-color: #28a745; /* Verde */
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cadastro-form .btn-cadastrar:hover {
  background-color: #0f551e; /* Verde mais escuro ao passar o mouse */
}

.cadastro-form .btn-cadastrar:active {
  background-color: #1e7e34; /* Verde ainda mais escuro ao clicar */
  transform: translateY(2px); /* Efeito de clique */
}

/* Separador */
.separator {
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 20px 0;
}

/* Estilo para links de registro */
.Login-page {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: white;
}

.Login-page a {
  color: #7cfc70;
  text-decoration: none;
}

/* Estilo específico para o link 'Entrar' */
.entrar-link {
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