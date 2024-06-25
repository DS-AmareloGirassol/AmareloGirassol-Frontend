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
</script>

<style scoped> 
header {
    background-color: #F0F0F0;
    padding: 10px 50px;
    color: #0b0fdb;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  /* .header-logo{
  }
   */
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
    background-color: #d7d7d8;
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
    background-color: #160094; /* Background azul */
    border-radius: 10px; /* Border radius para fazer cantos arredondados */
  }
  
  .header-logout {
    display: flex;
  }
  
  .header-logout-img {
    height: 40px;
    padding: 10px;
    cursor: pointer;
    background-color: #009942; /* Background azul */
    border-radius: 10px; /* Border radius para fazer cantos arredondados */
  }
</style> 
