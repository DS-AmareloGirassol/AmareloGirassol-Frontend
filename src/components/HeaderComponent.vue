<template> 
  <header>
    <h1 class="header-logo"><\UnbConnect></h1>

    <nav class="header-nav">
      <ul>
        <li class="header-nav-li" @click="goToFluxo">Meu Fluxo</li>
        <li class="header-nav-li" @click="goToDisciplinas">Disciplinas</li>
        <li class="header-nav-li" @click="goToForum">Fórum</li>
      </ul>
    </nav>

    <div class="header-account-actions">
      <div class="header-account-view">
        <span class="header-account-view-span">{{ user_name }}</span>
        <img class="header-account-view-img" src="../assets/account.png" @click="goToPerfil">
      </div>
      <div class="header-logout">
        <img class="header-logout-img" src="../assets/logout.png" @click="logoutAccount">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      user_name: null
    };
  },
  mounted() {
    this.user_name = localStorage.getItem('user_name')
  },
  methods: {
    goToFluxo() {
      this.$router.push({ name: 'Forum' });
    },
    goToDisciplinas() {
      this.$router.push({ name: 'Forum' });
    },
    goToForum() {
      this.$router.push({ name: 'Forum' });
    },
    goToPerfil() {
      this.$router.push({ name: 'Perfil' });
    },
    async logoutAccount() {
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('user_name');
      localStorage.removeItem('user_email');

      this.$router.push({ name: 'Login' });
    }
  },
}
</script>

<style scoped> 
header {
  background-color: #008137;
  padding: 10px 50px;
  color: #FFFFFF;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo{
}

.header-nav {
  display: flex;
  justify-content: end; /* Alinha os itens do nav para a direita */
  align-items: center; /* Centraliza verticalmente os itens */
}

ul {
  display: flex;
  flex-direction: row;
  gap: 50px; /* Ajusta a separação entre cada item da barra de navegação */
  list-style-type: none; /* Remove os marcadores de lista padrão */
  margin: 0;
  padding: 0;
}

.header-nav-li {
  padding: 15px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
}

.header-nav-li:hover {
  background-color: #009942;
  border-radius: 10px;
}

.header-account-actions {
  display: flex;
  align-items: center;
}

.header-account-view {
  display: flex;
  margin-right: 30px;
}

.header-account-view-span {
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 16px;
}

.header-account-view-img {
  height: 40px;
  padding: 10px;
  cursor: pointer;
}

.header-account-view-img:hover {
  background-color: #009942;
  border-radius: 10px;
}

.header-logout {
  display: flex;
}

.header-logout-img {
  height: 40px;
  padding: 10px;
  cursor: pointer;
}

.header-logout-img:hover {
  background-color: #009942;
  border-radius: 10px;
}

</style> 
