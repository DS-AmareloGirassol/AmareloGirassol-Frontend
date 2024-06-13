
<template>
    <div id="app">
      <header class="header">
        <div class="logo"> 
        </div>
        <nav>
          <ul>
            <li><a href="#">Início</a></li>
            <li><a href="#">Início</a></li>
            <li><a href="#">Avaliações</a></li>
            <li><a href="#">Fóruns</a></li>
            <li><a href="#"></a></li>
          </ul>
        </nav>
        <input type="text" placeholder="Search..." class="search-bar">
        <label id="pages" name="pages" required>
                <select id="pages" name="pages" required>
                    <option value="" disabled selected>xxxxxx</option>
                    <option value="1">1º </option>
                    <option value="2">2º </option>
                    <option value="3">3º </option>
                    <option value="4">4º </option>
                    <option value="5">5º </option>
                    <option value="6">6º </option>
                    <option value="7">7º </option>
                    <option value="8">8º </option>
                    <option value="9">9º </option>
                    <option value="10">10º </option>
                </select>
        </label>
        <button class="login-btn">Entrar</button>
        <button class="register-btn">Cadastre-se</button>
      </header>
      <div class="content">
        <div class="main-content">
          <div class="info">
            <h2>Semestre de Oferta</h2>
            <h1>Nome do Professor</h1>
            <h3><a href="#">Nome da Disciplina</a></h3>
            <button class="general-review-btn">Ver avaliação Geral</button>
          </div>
          <div class="filters">
            <button class="dropdown-btn">Selecione o Período</button>
            <button class="dropdown-btn">Selecione XXXX</button>
          </div>
          <div class="rating">
            <span>Indicação Geral</span>
            <div class="stars">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
  
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: #fff;
  }
  
  .logo img {
    height: 40px;
  }
  
  nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #000;
  }
  
  .search-bar {
    flex: 1;
    margin: 0 20px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .user-info {
    margin-right: 20px;
  }
  
  .login-btn, .register-btn {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .register-btn {
    background-color: #00008b;
    color: #fff;
  }
  
  .main-content {
    padding: 20px;
  }
  
  .info {
    text-align: left;
  }
  
  .info h2 {
    font-size: 20px;
    margin: 0;
  }
  
  .info h1 {
    font-size: 28px;
    margin: 5px 0;
  }
  
  .info h3 a {
    color: #00008b;
    text-decoration: none;
  }
  
  .general-review-btn {
    background-color: #00a859;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .filters {
    display: flex;
    gap: 10px;
    margin: 20px 0;
  }
  
  .dropdown-btn {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
  }
  
  .rating {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .stars {
    font-size: 20px;
    color: #ffc107;
  }
  </style>
  