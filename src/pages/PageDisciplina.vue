<template>
  <HeaderComponent/>

  <div class="container">
    <!-- Container da barra de pesquisa e botão de pesquisa -->
    <div class="search-filter-container">
      <input 
        type="text" 
        class="form-control search-bar" 
        placeholder="Pesquise aqui..." 
        v-model="searchQuery"
        list="disciplinasList"
      />
      <datalist id="disciplinasList">
        <option 
          v-for="disciplina in disciplinasMock" 
          :key="disciplina.code" 
          :value="disciplina.name"
        ></option>
      </datalist>
      <button class="search-button" @click="performSearch">
        <img src="../assets/search-icon.png" alt="Search Icon" />
      </button>
    </div>

    <!-- Conteúdo do site com múltiplas disciplinas -->
    <div class="content">
      <div 
        v-for="(disciplina, index) in filteredDisciplinas" 
        :key="index" 
        class="row align-items-center justify-content-between mb-4"
      >
        <!-- Seção de informações da disciplina e botão -->
        <div class="col-auto info-section">
          <div class="info-header">
            <p class="code">{{ disciplina.code }}</p>
            <h2 class="discipline-name">{{ disciplina.name }}</h2>
            <p class="professor-name">{{ disciplina.professor }}</p>
          </div>
        </div>

        <button class="btn btn-view-evaluation">Ver avaliação Geral</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponet from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponet
  },

  name: 'Disciplinas',
  data() {
    return {
      searchQuery: '',
      disciplinasList: [],
      disciplinasMock: [
        {
          name: 'Matemática Discreta 1',
          rating: 5,
          code: 'MATH101'
        },
        {
          name: 'Física Experimental',
          rating: 4,
          code: 'PHYS102'
        },
        {
          name: 'Desenvolvimento de Software',
          rating: 3,
          code: 'CHEM103'
        },
        {
          name: 'Desenvolvimento de Software',
          rating: 3,
          code: 'CHEM103'
        },
      ]
    }
  },
  computed: {
    filteredDisciplinas() {
      return this.disciplinasMock.filter(disciplina => 
        disciplina.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
        disciplina.professor.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        disciplina.code.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },

  async mounted () {
    await this.getDisciplinaList()
  },

  methods: {
    performSearch() {
      // Ação para realizar a pesquisa
      // Aqui não precisamos de lógica adicional já que usamos o computed
      console.log(`Pesquisa realizada: ${this.searchQuery}`);
    },

    async getDisciplinaList() {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get('http://localhost:8000/api/subject/', { headers: { authorization:`Token ${token}` } });

        this.disciplinasList = response.data

      } catch (err) {}
    }
  }
}
</script>

<style scoped>
header {
  background-color: #ffffff;
  padding: 2px 50px;
  color: #0b0fdb;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-logo {}

.header-nav {
  display: flex;
  justify-content: end;
  align-items: center;
}

ul {
  display: flex;
  flex-direction: row;
  gap: 50px;
  list-style-type: none;
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
  background-color: #160094;
  border-radius: 10px;
}

.header-logout {
  display: flex;
}

.header-logout-img {
  height: 40px;
  padding: 10px;
  cursor: pointer;
  background-color: #009942;
  border-radius: 10px;
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
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.search-bar {
  width: 70%;
  padding: 15px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  border-radius: 10px;
  border: 1px solid #11067a;
}

.search-button {
  background-color: #11067a;
  border: none;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.search-button img {
  width: 20px;
  height: 20px;
}

.content {
  margin-top: 20px;
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 15px;
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
  margin-right: 20px;
}

.discipline-name {
  font-family: 'Arial Black', sans-serif;
  font-size: 24px;
  color: #333;
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
  align-self: flex-end; /* Move the button to the right */
  cursor: pointer
}

.rating-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.star-rating {
  font-size: 24px;
  color: #a1a09b;
}

.star-rating .star {
  margin-right: 2px;
}

.rating-label {
  font-family: 'Arial', sans-serif;
  font-size: 14px;
  color: #666;
  text-align: center;
  margin-bottom: 5px;
}

footer {
  width: 100%;
  text-align: center;
  background-color: #12017D;
  padding: 8px 0;
  color: #FFFFFF;
}
</style>
