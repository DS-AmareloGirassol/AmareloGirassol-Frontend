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
    <div class="container">
      <!-- Container da barra de pesquisa e seletor de período -->
      <div class="search-filter-container">
        <input 
          type="text" 
          class="form-control search-bar" 
          placeholder="Pesquise aqui..." 
        />
        <select class="form-control select-period">
        <option>Selecione o Período</option>
        <option>2023/1</option>
        <option>2023/2</option>
        <option>2024/1</option>
        <option>2023/2</option>
        </select>
      </div>
  
      <!-- Conteúdo do site com múltiplas disciplinas -->
      <div class="content">
        <div 
          v-for="(professor, index) in professores" 
          :key="index" 
          class="row align-items-center justify-content-between mb-4"
        >
          <!-- Seção de informações do professor e botão -->
          <div class="col-auto info-section">
            <p class="code">{{ professor.code }}</p>
            <div class="info-header">
              <h2 class="discipline-name">{{ professor.nome_do_professor }}</h2>
              <button class="btn btn-view-evaluation">Ver avaliação Geral</button>
            </div>
            <p class="professor-name">{{ professor.disciplina }}</p>
          </div>
  
          <!-- Seção de avaliação -->
          <div class="col-auto rating-section">
            <p class="rating-label">Indicação Geral</p>
            <div class="star-rating">
              <span class="star" v-for="star in professor.rating" :key="star">&#9733;</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <footer>
          <p>©2024, UnBConnect.</p>
          <p>Amarelo Girassol - Desenvolvimento de Software, 2024/1.</p>
      </footer>
  </template>
  
  <script>
  export default {
  
    name: 'Disciplinas',
    data() {
      return {
        professores: [
          {
            nome_do_professor: 'Professor 1',
            disciplina: 'Disciplina 1',
            rating: 5
          },
          {
            nome_do_professor: 'Professor 2',
            disciplina: 'Disciplina 2',
            rating: 4
          },
          {
            nome_do_professor: 'Professor 3',
            disciplina: 'Disciplina 3',
            rating: 3
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  header {
    background-color: #ffffff;
    padding: 10px 50px;
    color: #0b0fdb;
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
  
  .container {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 1100px;
    margin: 20px auto;
  }
  
  .search-filter-container {
    display: flex;
    justify-content: center; /* Centraliza os elementos horizontalmente */
    align-items: center; /* Centraliza os elementos verticalmente */
    gap: 10px; /* Espaçamento entre a barra de pesquisa e o seletor */
    margin-bottom: 20px; /* Espaçamento abaixo da barra de pesquisa */
  }
  
  .search-bar {
    width: 70%; /* Ajusta a largura da barra de pesquisa */
    padding: 15px; /* Ajusta o padding para uma aparência mais robusta */
    font-family: 'Arial', sans-serif;
    font-size: 16px; /* Aumenta o tamanho da fonte */
    border-radius: 10px;
    border: 1px solid #11067a;
  }
  
  .select-period {
    width: 25%; /* Ajusta a largura do seletor */
    padding: 10px; /* Ajusta o padding para uma aparência consistente */
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  
  .content {
    margin-top: 20px; /* Espaçamento entre a barra de pesquisa e o conteúdo */
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0; /* Linha divisória entre itens */
    padding-bottom: 15px; /* Espaçamento inferior para cada item */
    margin-bottom: 15px; /* Espaçamento inferior para a linha */
  }
  
  .info-section {
    display: flex;
    flex-direction: column;
  }
  
  .info-header {
    display: flex;
    align-items: center;
  }
  
  .code {
    font-family: 'Arial', sans-serif;
    font-size: 12px;
    color: #888;
    margin-bottom: 5px;
  }
  
  .discipline-name {
    font-family: 'Arial Black', sans-serif;
    font-size: 24px;
    color: #333;
    margin-right: 20px;
  }
  
  .professor-name {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #0066cc;
    margin-top: 5px;
  }
  
  .btn-view-evaluation {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    border-radius: 5px;
  }
  
  .rating-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .star-rating {
    font-size: 24px;
    color: #ffc107; /* Cor amarela para estrelas */
  }
  
  .star-rating .star {
    margin-right: 2px;
  }
  
  .rating-label {
    font-family: 'Arial', sans-serif;
  }
  footer {
    width: 100%;
    text-align: center;
    background-color: #12017D;
    padding: 26px 0;
    color:#FFFFFF;
  }
  </style>
  