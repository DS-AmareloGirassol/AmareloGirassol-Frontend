<template> 
  <header>
    <h1 class="header-logo"><\UnbConnect></h1>

    <nav class="header-nav">
      <ul>
        <li class="header-nav-li">Meu Fluxo</li>
        <li class="header-nav-li">Disciplinas</li>
        <li class="header-nav-li">Fórum</li>
      </ul>
    </nav>

    <div class="header-account">
      <img class="header-account-view-img" src="../assets/account.png">
      <img class="header-logout-img" src="../assets/logout.png">
    </div>
  </header>
</template>

<script>
export default {
  mounted() {
    document.querySelector('.header-account-view-img').addEventListener('click', () => {
      window.location.href = '/perfil';
    });
  }
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
  padding: 10px;
  font-size: 20px;
}

.header-account {
  height: 60px;
}

.header-account-view-img {
  height: 40px;
  margin-right: 30px;
  padding: 10px;
  cursor: pointer;
}

.header-logout-img {
  height: 40px;
  cursor: pointer;
  padding: 10px;
  cursor: pointer;
}

</style> 
