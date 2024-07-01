<template>
    <div>
      <HeaderComponent />
      <div class="containerSelecao">
        <div class="container-selecao-title">Olá!!</div>
        <div class="container-selecao-title-sub">Primeiro passo para visualizar sua posição no fluxo é descrever quais matérias você a cursou na graduação:</div>

        <!-- Container da barra de pesquisa e seletor de período -->
        <!-- <div class="search-filter-container">
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
        </div> -->
        <!-- Conteúdo do site com múltiplas disciplinas -->
        <div class="contentSelecao">
          <div
            v-for="(disciplina, index) in subjectsList"
            :key="index"
            class="row align-items-center justify-content-between mb-4"
          >
            <!-- Seção de informações da disciplina e botão -->
            <div class="col-auto info-section">
              <div class="info-header">
                <input type="checkbox" v-model="disciplina.checked" @change="toggleSelection(disciplina)"/>
                <p class="code">{{ disciplina.code }}</p>
                <h2 :class="{ 'highlighted': disciplina.checked }" class="discipline-name">{{ disciplina.name }}</h2>
              </div>
            </div>
          </div>
        </div>
        <!-- Botão "Concluído" -->
        <div class="button-container">
          <button class="click-button" @click="updateSubjectsUser">
            <span>Concluído</span>
          </button>
        </div>
       
      </div>

      <SuccessMessageModal
        v-if="isModalVisible"
        :show="isModalVisible"
        message="Disciplinas foram salvas com sucesso!!"
        @close="isModalVisible = false"
      />

      <FooterComponent />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { ref, defineComponent } from 'vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  import SuccessMessageModal from '../components/SuccessMessageModal.vue';
  
  export default defineComponent({
    components: {
      HeaderComponent,
      FooterComponent,
      SuccessMessageModal
    },
    name: 'Disciplinas',
    data() {
      return {
        isModalVisible: false,
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
        subjectsList: [],
        selectList: []
      }
    },

    async mounted () {
      await this.getSubjectList()
    },

    methods: {
      sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      },
      goToFluxo() {
        this.$router.push({ name: 'Meu Fluxo' });
      },
      
      async getSubjectList() {
        try {
          const token = localStorage.getItem('token')
          const response = await axios.get('http://localhost:8000/api/subject/', { headers: { authorization:`Token ${token}` } });

          this.subjectsList = response.data

        } catch (err) {
          this.error = 'erro'
        }
      },

      async updateSubjectsUser() {
        try {
          const user_id = localStorage.getItem('user_id')
          const token = localStorage.getItem('token')

          await axios.post(`http://localhost:8000/api/users/${user_id}/add-subject/`, this.selectList, { headers: { authorization:`Token ${token}` } });

          this.isModalVisible = true
          await this.sleep(2000);
          this.goToFluxo()
        } catch (err) {
          this.error = 'erro'
        }
      },

      toggleSelection(disciplina) {
        if (disciplina.checked) {
          this.selectList.push(disciplina.id);
        } else {
          this.selectList = this.selectList.filter(id => id !== disciplina.id);
        }
      }
    }
  });
  </script>
  
  <style scoped>
  .containerSelecao {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    max-width: 1100px;
    margin: 20px auto;
  }

  .container-selecao-title {
    font-size: 24px;
    margin-bottom: 20px;
    color: #11067a;
    font-weight: 600;
  }

  .container-selecao-title-sub {
    font-size: 18px;
    margin-bottom: 50px;
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
    font-size: 16px; /* Aumenta o tamanho da fonte */
    border-radius: 10px;
    border: 1px solid #11067a;
  }
  .select-period {
    width: 25%; /* Ajusta a largura do seletor */
    padding: 10px; /* Ajusta o padding para uma aparência consistente */
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #ccc;
  }
  .contentSelecao {
    margin-top: 20px; /* Espaçamento entre a barra de pesquisa e o conteúdo */
  }
  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0; /* Linha divisória entre itens */
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
    font-size: 12px;
    color: #888;
    min-width: 70px;
    margin: 0 10px; /* Espaçamento à direita da checkbox */
  }
  .discipline-name {
    font-size: 20px;
    color: #333;
    margin-right: 20px;
  }
  .highlighted {
    color: #009942;
  }
  .professor-name {
    font-size: 14px;
    color: #0066cc;
    margin-top: 5px;
  }
  .btn-view-evaluation {
    background-color: #28a745;
    color: #fff;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    border-radius: 5px;
  }
  .rating-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .rating-label {
    font-size: 14px;
    color: #666;
    text-align: center;
    margin-bottom: 5px;
  }

  .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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

.click-button span {
  font-size: 24px;
  font-weight: bold;
  color: #091f77;
}

.click-button:hover {
  box-shadow: 0 0 20px rgba(0, 0, 255, 0.4);
}

.plus-icon {
 width: 24px;
 height: 24px;
 position: relative;
}
</style>
  