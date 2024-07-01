<template>
  <section>
    <HeaderComponent/>

    <div class="meu-fluxo-page">
      <div class="meu-fluxo-infos">
        <div class="meu-fluxo-infos-1">
          <span class="progress-text">Sua posição no Fluxo esperada: <span class="progress-span-porc">{{ expected_fluxo_position_percentage }}%</span></span>
          
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: expected_fluxo_position_percentage + '%' }"></div>
          </div>
        </div>

        <div class="meu-fluxo-infos-2">
          <span class="progress-text">Sua posição no Fluxo atual: <span class="progress-span-porc">{{ current_fluxo_position_percentage }}%</span></span>
          
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: current_fluxo_position_percentage + '%' }"></div>
          </div>
        </div>        
      </div>

      <div class="meu-fluxo-disciplina-lista">
        <div class="meu-fluxo-disciplinas-titulo">Minhas Disciplinas</div>

        <div
          v-for="(disciplina, index) in subjectsList"
          :key="index"
          class=""
        >
          <!-- Seção de informações da disciplina e botão -->
          <div class="">
            <div class="info-header">
              <p class="code">{{ disciplina.code }}</p>
              <div :class="{ 'highlighted': disciplina.checked }" class="discipline-name">{{ disciplina.name }}</div>
            </div>
          </div>
        </div>

        <div class="button-container">
          <button class="click-button" @click="goToSelecao">
            <span>Alterar minhas disciplinas</span>
          </button>
        </div>
      </div>
    </div>

    <FooterComponent/>
  </section>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      current_fluxo_position_percentage: 0,
      expected_fluxo_position_percentage: 0,
      subjectsList: [],
      semester_being_attended: null,
      current_fluxo_position: null,
      expected_fluxo_position: null
    };
  },

  methods: {
    goToSelecao() {
        this.$router.push({ name: 'Seleção' });
    },

    async getSubjectsByUser() {
      try {
        const user_id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')

        const response = await axios.get('http://localhost:8000/api/users/1/subjects/', { headers: { authorization:`Token ${token}` } });

        this.subjectsList = response.data

      } catch (err) {
        this.error = 'erro'
      }
    },

    async getInfosUser() {
      try {
        const user_id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')

        const response = await axios.get('http://localhost:8000/api/users/1/', { headers: { authorization:`Token ${token}` } });

        this.semester_being_attended = response.data.semester_being_attended
        this.current_fluxo_position = response.data.current_fluxo_position
        this.expected_fluxo_position = response.data.expected_fluxo_position
      } catch (err) {
        this.error = 'erro'
      }
    },
  },
  
  async mounted() {
    await this.getSubjectsByUser()

    if (this.subjectsList.length == 0) {
      this.$router.push({ name: 'Seleção' });
    }

    await this.getInfosUser()

    this.expected_fluxo_position_percentage = this.expected_fluxo_position.toFixed(1);
    this.current_fluxo_position_percentage = this.current_fluxo_position.toFixed(1);
  }
};

</script>

<style scoped>

.meu-fluxo-page { 
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
}

.meu-fluxo-infos{
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
}

.meu-fluxo-infos-1 {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.meu-fluxo-infos-2 {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

.meu-fluxo-disciplinas-titulo {
  font-size: 20px;
  margin-bottom: 30px;
  font-weight: 600;
}

.progress-container {
  width: 500px; /* Diminuindo a largura da barra de progresso */
  background-color: #e0e0e0;
  border-radius: 25px;
  margin: 20px 0;
}

.progress-bar {
  height: 30px;
  background-color: #4caf50;
  border-radius: 25px;
  text-align: right;
  line-height: 30px;
  color: white;
  position: relative;
}

.progress-text {
  font-size: 24px;
}

.info-header {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 2px solid #e0e0e0;
}

.code {
  font-size: 12px;
  color: #888;
  margin-bottom: 5px;
  margin-right: 10px; /* Espaçamento à direita da checkbox */
}

.discipline-name {
  font-size: 20px;
  color: #333;
  margin-right: 20px;
}

.meu-fluxo-disciplina-lista {
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.progress-span-porc {
  font-weight: 500;
  color: #0b0fdb;
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
  font-size: 18px;
  font-weight: bold;
  color: #091f77;
}

.click-button:hover {
  box-shadow: 0 0 20px rgba(0, 0, 255, 0.4);
}
</style>
