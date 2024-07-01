<template>
  <section>
    <HeaderComponent/>

    <div class="meu-fluxo-page">
      <div class="meu-fluxo-infos">
        <div class="meu-fluxo-infos-1">
          <span class="progress-text">Sua posição no Fluxo esperada: {{ expected_fluxo_position_percentage }}%</span>
          
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: expected_fluxo_position_percentage + '%' }"></div>
          </div>
        </div>

        <div class="meu-fluxo-infos-2">
          <span class="progress-text">Sua posição no Fluxo atual: {{ current_fluxo_position_percentage }}%</span>
          
          <div class="progress-container">
            <div class="progress-bar" :style="{ width: current_fluxo_position_percentage + '%' }"></div>
          </div>
        </div>        
      </div>

      <div class="meu-fluxo-disciplinas-titulo">Minhas Disciplinas</div>

      <div
        v-for="(disciplina, index) in subjectsList"
        :key="index"
        class="row align-items-center justify-content-between mb-4"
      >
        <!-- Seção de informações da disciplina e botão -->
        <div class="col-auto info-section">
          <div class="info-header">
            <p class="code">{{ disciplina.code }}</p>
            <div :class="{ 'highlighted': disciplina.checked }" class="discipline-name">{{ disciplina.name }}</div>
          </div>
          <hr class="meu-fluxo-hr"/>
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
  font-size: 20px;
}

.info-header {
  display: flex;
  align-items: center;
  margin: 5px 0;
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
  font-size: 20px;
  color: #333;
  margin-right: 20px;
}

.meu-fluxo-hr {
  border: 0,5px solid #000;
}

</style>
