<template>
   <div class="containerLogin">
    <div class="left-panel">
      <h1 class="titulo">
        <span class="text-UnB">UnB</span><span class="text-Connect">Connect</span>
      </h1>
    </div>
    <div class="right-panel">
      <h3 class="form-title">Acesse sua Conta</h3>
      <form class="login-form" @submit.prevent="submitForm">
        <label for="email">E-mail</label>
        <input type="email" v-model="email" id="email" name="email" placeholder="Email" class="form-element">
        
        <label for="password">Senha</label>
        <input type="password" v-model="password" id="password" name="password" placeholder="Senha" class="form-element">
        
        <router-link to="/recuperar" class="forgot-password">Esqueci minha senha</router-link>
        
        <button type="submit" class="btn-entrar form-element">ENTRAR</button>
        <div class="spacer"></div>
        
        <div class="separator"></div>
        <p class="cadastro-page">Ainda não é cadastrado?
          <router-link to="/cadastro" class="entrar-link">Cadastre-se</router-link>
        </p>
      </form>
      <img src="/src/assets/unb-logo.png" alt="Logo UnB" class="unb-logo">
    </div>
  </div>

  <SuccessMessageModal
    v-if="isModalVisible"
    :show="isModalVisible"
    message="Login efetuado com sucesso!!"
    @close="isModalVisible = false"
  />
</template>

<script>
import axios from 'axios';
import SuccessMessageModal from '../components/SuccessMessageModal.vue';

export default {
  name: 'LoginComponent',

  components: {
    SuccessMessageModal
  },

  data() {
    return {
      isModalVisible: false,
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async submitForm() {
      try {
        const response = await axios.post('http://localhost:8000/api/token/', {
          username: this.email,
          password: this.password
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user_id', response.data.user.id);
        localStorage.setItem('user_name', response.data.user.name);
        localStorage.setItem('user_email', response.data.user.email);

        this.isModalVisible = true
        await this.sleep(2000);

        this.$router.push({ name: 'Meu Fluxo' });
      } catch (err) {
        this.error = 'Invalid credentials';
      }
    }
  }
};
</script>

<style scoped>

.containerLogin {
  display: flex;
  height: 100vh;
  color: white;
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

.login-form {
  width: 75%;
  max-width: 400px;
}

/* Estilo comum para inputs, select e botão */
.login-form .form-element {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  box-sizing: border-box;
}

.login-form input::placeholder {
  color: #666;
}

/* Estilo do botão "Entrar" */
.login-form .btn-entrar {
  background-color: #28a745; /* Verde */
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
}
.login-form button::after {
  position: absolute;
  right: 20px;
  transform: translateX(0);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.login-form .btn-entrar:active {
  background-color: #0f551e;
  transform: translateX(5px);
}

/* Estilo específico para o link "Esqueci minha senha" */
.forgot-password {
  display: block;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  text-align: left;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #7cfc70; /* Verde escuro */
}


/* Estilo para o link "Cadastre-se" */
.cadastro-page {
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  color: white;
}

.cadastro-page a {
  color: #7cfc70;
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
