<template>
  <section>
    <HeaderComponent/>

    <div class="feedback-page">
      <div class="aval">
        <h2 class="titulo-page">
          <span class="text-avaliacao">Feedback Geral Disciplina</span>
        </h2>
        <!-- <div class="professor">
          <p>Professor(a): <input type="text" placeholder="Professor"></p>
        </div> -->
        <p>Metodologia</p>
        <div class="numb-container">
          <div v-for="rating in 5" :key="'metodologia-' + rating" 
               :class="['numb', metodologiaRating === rating ? 'active' : '']"
               @click="setRating('metodologiaRating', rating)">
            <img :src="`/src/assets/number-${rating}.png`" :alt="`nota ${rating}`">
          </div>
        </div>
        <p>Trabalhos</p>
        <div class="numb-container">
          <div v-for="rating in 5" :key="'trabalhos-' + rating" 
               :class="['numb', trabalhosRating === rating ? 'active' : '']"
               @click="setRating('trabalhosRating', rating)">
            <img :src="`/src/assets/number-${rating}.png`" :alt="`nota ${rating}`">
          </div>
        </div>
        <p>Provas</p>
        <div class="numb-container">
          <div v-for="rating in 5" :key="'provas-' + rating" 
               :class="['numb', provasRating === rating ? 'active' : '']"
               @click="setRating('provasRating', rating)">
            <img :src="`/src/assets/number-${rating}.png`" :alt="`nota ${rating}`">
          </div>
        </div>
        <p>Material de Estudo</p>
        <div class="numb-container">
          <div v-for="rating in 5" :key="'materialEstudo-' + rating" 
               :class="['numb', materialEstudoRating === rating ? 'active' : '']"
               @click="setRating('materialEstudoRating', rating)">
            <img :src="`/src/assets/number-${rating}.png`" :alt="`nota ${rating}`">
          </div>
        </div>
        <p>Facilidade</p>
        <div class="numb-container">
          <div v-for="rating in 5" :key="'facilidade-' + rating" 
               :class="['numb', facilidadeRating === rating ? 'active' : '']"
               @click="setRating('facilidadeRating', rating)">
            <img :src="`/src/assets/number-${rating}.png`" :alt="`nota ${rating}`">
          </div>
        </div>
      </div>
      
      <div class="feedback">
        <!-- <h3>Faça seu Comentário</h3> -->
        <!-- <div class="icons-container">
          <div class="icons">
            <img src="/src/assets/sad.png" alt="terrível">
            <small>Emoção</small>
          </div>
          <div class="icons">
            <img src="/src/assets/cansado.png" alt="ruim">
            <small>Emoção</small>
          </div>
          <div class="icons">
            <img src="/src/assets/happy.png" alt="bom">
            <small>Emoção</small>
          </div>
          <div class="icons active">
            <img src="/src/assets/lol.png" alt="perfeito">
            <small>Emoção</small>
          </div>
        </div> -->
        <!-- <div class="comentario">
          <p>Caso queira adicionar um comentário, utilize a caixa de comentários abaixo:</p>
          <textarea name="opinion" cols="30" rows="10" placeholder="Deixe um comentário..."></textarea>
        </div> -->
      </div>

      <div class="criar-postagem-buttons">
          <div type="submit" class="btn" @click="createFeedback">Enviar</div>
          <div type="button" class="btn1" @click="handleCancel">Cancelar</div>
        </div>
    </div>

    <SuccessMessageModal
      v-if="isModalVisible"
      :show="isModalVisible"
      message="Avaliação efetuada com sucesso!!"
      @close="isModalVisible = false"
    />

    <FooterComponent/>
  </section>
</template>

<script>
import axios from 'axios';

import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import SuccessMessageModal from '../components/SuccessMessageModal.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SuccessMessageModal
  },

  data() {
    return {
      isModalVisible: false,
      searchQuery: '',
      professor: '',
      metodologiaRating: null,
      trabalhosRating: null,
      provasRating: null,
      materialEstudoRating: null,
      facilidadeRating: null,
      form: {
        semestre: ''
      },
      semestres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    setRating(category, rating) {
      this[category] = rating;
    },

    async createFeedback() {
      const disciplina_id = this.$route.params.disciplina_id;
      const token = localStorage.getItem('token'); // Certifique-se de ter o token

      try {
        await axios.post('http://localhost:8000/api/feedback/', {
          metodologia: this.metodologiaRating,
          trabalho: this.trabalhosRating,
          provas: this.provasRating,
          material: this.materialEstudoRating,
          facilidade: this.facilidadeRating,
          user: localStorage.getItem('user_id'),
          subject: disciplina_id
        }, { headers: { authorization: `Token ${token}` } });

        this.isModalVisible = true;
        await this.sleep(2000);

        this.$router.push({ name: 'Disciplina' });
      } catch (error) {
        console.error("Erro ao enviar feedback:", error);
      }
    },

    handleCancel() {
      this.$router.push({ name: 'Disciplina' });
    },
  }
};
</script>

<style scoped>

.feedback-page {
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
}

span{
    color: #12017D;

}

.log{
    width: 45px;
    height: 45px;
}


.text-avaliacao{
	color: #2710b9;
	font-size: 35px;
}

.text-disciplina{
	color: #2710b9;
	font-size: 35px;
}

input{
    height: 25px;
    width: 220px;
    align-self: center;
    border: none;
    border-radius: 10px;
    margin-top: 15px;
    text-align: center;
    font-size: 15px;
    background-color: #dbdbdb;
}

.lupa {
    width: 20px;
    border-right: 15px;
    border-top: 20px;
}

.links{
    display: block;
    color: #029e46;
    margin-top: 15px;
    font-size: 17.5px;
   
}

.links a{
    text-decoration: none;
    color: inherit;
    padding: 15px;
}
.icones{
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    justify-content: space-between;

}
.icone.u{
    height: 10px;
   
}

.icone_l{
    height: 38px;
    width: 38px;
    padding-left: 10px;
    padding-top: 5px;
}


body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
 
}


.aval{
    font-size: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 550px;
    margin-top: 40px;
}

.aval h2 {
    line-height: 20px;
    margin-top: 25px;
}

h2 {
    color: #2710b9;
    font-size: 30px;
}

h2 span1 {
    margin: 10px;
    color: #067133;
}



.professor p {
    color: #111;
    font-size: 16px;
    font-weight: normal;
}

.professor input {
    margin: 10px;
    height: 20px;
    width: 180px;
    border: 2px solid rgba(116, 116, 116, 0.2);
    border-radius: 40px;
    outline: none;
    resize: none;
    background: transparent;
    margin-top: 20px;
    margin-bottom: 40px;
    
}

input::placeholder{
    font-size: 12px;

}

p {
    color: #111;
    font-size: 18px;
    font-weight: normal;
    font-family: "Jost", sans-serif, normal;
}

.numb-container {
    display: flex;
    margin: 20px 0;
}

.numb {
    flex: 1;
    cursor: pointer;
    padding: 14px;
    margin: 10px 5px;
    border: 1px solid rgba(95, 216, 71, 0.2);
}

.numb:hover{
    border-radius: 6px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    
}

.numb img {
    width: 20px;
}

.semestre {
    font-size: 16px;
    margin-bottom: 30px;
}

.semestre p {
    font-size: 16px;
}





.feedback{
    background-color: #fff;
    font-size: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 550px;

}

.feedback h3{
    line-height: 20px;
    margin-top: 35px;
    font-family: "Plus Jakarta Sans", sans-serif, normal;
}

h3 {
    color: #2710b9;
    font-size: 30px;
}

h3 span2 {
    margin: 10px;
    color: #067133;
}

.feedback p{
    margin: 25px;
    font-size: 16px;
    font-family: "Jost", sans-serif, normal;
    
}

.icons-container {
    display: flex;
    margin: 20px 0;
}

.icons {
    flex: 1;
    cursor: pointer;
    padding: 20px;
    margin: 10px 5px ;
}

.icons:hover, .icons.active{
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 2px solid  rgba(9, 221, 45, 0.1);

}


.icons img {
    width: 50px;
}

.icons small{
    color: #555;
    display: inline-block;
    margin: 10px 0 0;
}

.icons:hover small, .icons.active small {
    color: #111;
} 

textarea {
    width: 100%;
    padding: 1rem;
    border-radius: .4rem;
    border: 1;
    outline: none;
    resize: none;
    height: 100px;
    font-size: 16px;
    font-family: "Jost", sans-serif, normal;
}

.criar-postagem-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}


.btn {
  background-color: #008137;
  color: #fff;
  height: 50px;
  width: 150px;
  border: 0;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
}

.btn1 {
  background-color: #e3e4e8;
  color: #000;
  height: 50px;
  width: 150px;
  border: 0;
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
}

.numb.active {
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border: 2px solid blue;
}

</style>
