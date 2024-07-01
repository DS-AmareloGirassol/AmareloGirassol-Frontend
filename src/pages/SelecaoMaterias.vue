<template>
    <div>
      <HeaderComponent />
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
            <option>1º semestre</option>
            <option>2º semestre</option>
            <option>3º semestre</option>
            <option>4º semestre</option>
            <option>5º semestre</option>
            <option>6º semestre</option>
            <option>7º semestre</option>
            <option>8º semestre</option>
            <option>9º semestre</option>
            <option>10º semestre</option>
          </select>
        </div>
        <!-- Conteúdo do site com múltiplas disciplinas -->
        <div class="content">
          <div
            v-for="(disciplina, index) in subjectsList"
            :key="index"
            class="row align-items-center justify-content-between mb-4"
          >
            <!-- Seção de informações da disciplina e botão -->
            <div class="col-auto info-section">
              <div class="info-header">
                <input type="checkbox" v-model="disciplina.checked" />
                <p class="code">{{ disciplina.code }}</p>
                <h2 :class="{ 'highlighted': disciplina.checked }" class="discipline-name">{{ disciplina.name }}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- Botão "Concluído" -->
        <div class="button-container">
     <button class="click-button">
       <span>Concluído</span>
       <div class="plus-icon"></div>
     </button>
   </div>
       
      </div>

     


      <FooterComponent />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, defineComponent } from 'vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  
  export default defineComponent({
    components: {
      HeaderComponent,
      FooterComponent,
    },
    name: 'Disciplinas',
    data() {
      return {
        user_name: 'Nome do Usuário', // Adicione o nome do usuário aqui
        disciplinas: [
          {
            code: 'XXXX',
            name: 'Nome da disciplina 1',
            professor: 'Nome do professor 1',
            rating: 5,
            checked: false
          },
          {
            code: 'XXXX',
            name: 'Nome da disciplina 2',
            professor: 'Nome do professor 2',
            rating: 4,
            checked: false
          },
          {
            code: 'XXXX',
            name: 'Nome da disciplina 3',
            professor: 'Nome do professor 3',
            rating: 3,
            checked: false
          },
        ],
        subjectsList: []
      }
    },

    async mounted () {
      await this.getSubjectList()
      console.log(this.subjectsList.length)
    },

    methods: {
      goToFluxo() {
        this.$router.push('/fluxo.vue'); 
      },
      
      async getSubjectList() {
        try {
          const token = localStorage.getItem('token')
          const response = await axios.get('http://localhost:8000/api/subject/', { headers: { authorization:`Token ${token}` } });

          this.subjectsList = response.data

        } catch (err) {
          this.error = 'erro'
        }
      }
    }
  });
  </script>
  
  <style scoped>
  
  .header-logo {}
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
    margin-right: 10px; /* Espaçamento à direita da checkbox */
  }
  .discipline-name {
    font-family: 'Arial Black', sans-serif;
    font-size: 24px;
    color: #333;
    margin-right: 20px;
  }
  .highlighted {
    background-color: rgba(211, 211, 211, 0.7); /* Cor de marca-texto */
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
  .rating-label {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-bottom: 5px;
  }

  .button-container {
 display: flex;
 justify-content: center;
 margin: 20px;
}

.click-button {
 display: flex;
 align-items: center;
 padding: 20px 40px;
 border: none;
 border-radius: 50px;
 background-color: #ffffff;
 box-shadow: 0 0 10px rgba(0, 0, 255, 0.2);
 cursor: pointer;
 transition: box-shadow 0.3s ease;
 position: relative;
}

.plus-icon {
 width: 24px;
 height: 24px;
 position: relative;
}
</style>
  