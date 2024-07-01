<template>
  <section>
    <HeaderComponent/>

    <div class="feedback-page">
      <div class="aval">
        <h2 class="titulo-page">
          <span class="text-avaliacao">Feedback Geral Disciplina</span>
        </h2>
        <div class="professor">
          <p>Professor(a): <input type="text" placeholder="Professor"></p>
        </div>
        <p>Metodologia</p>
        <div class="numb-container">
          <div class="numb">
            <img src="/src/assets/number-1.png" alt="um">
          </div>
          <div class="numb">
            <img src="/src/assets/number-2.png" alt="dois">
          </div>
          <div class="numb">
            <img src="/src/assets/number-3.png" alt="três">
          </div>
          <div class="numb">
            <img src="/src/assets/number-4.png" alt="quatro">
          </div>
          <div class="numb active">
            <img src="/src/assets/number-5.png" alt="cinco">
          </div>
        </div>
        <p>Trabalhos</p>
        <div class="numb-container">
          <div class="numb">
            <img src="/src/assets/number-1.png" alt="um">
          </div>
          <div class="numb">
            <img src="/src/assets/number-2.png" alt="dois">
          </div>
          <div class="numb">
            <img src="/src/assets/number-3.png" alt="três">
          </div>
          <div class="numb">
            <img src="/src/assets/number-4.png" alt="quatro">
          </div>
          <div class="numb active">
            <img src="/src/assets/number-5.png" alt="cinco">
          </div>
        </div>
        <p>Provas</p>
        <div class="numb-container">
          <div class="numb">
            <img src="/src/assets/number-1.png" alt="um">
          </div>
          <div class="numb">
            <img src="/src/assets/number-2.png" alt="dois">
          </div>
          <div class="numb">
            <img src="/src/assets/number-3.png" alt="três">
          </div>
          <div class="numb">
            <img src="/src/assets/number-4.png" alt="quatro">
          </div>
          <div class="numb active">
            <img src="/src/assets/number-5.png" alt="cinco">
          </div>
        </div>
        <p>Material de Estudo</p>
        <div class="numb-container">
          <div class="numb">
            <img src="/src/assets/number-1.png" alt="um">
          </div>
          <div class="numb">
            <img src="/src/assets/number-2.png" alt="dois">
          </div>
          <div class="numb">
            <img src="/src/assets/number-3.png" alt="três">
          </div>
          <div class="numb">
            <img src="/src/assets/number-4.png" alt="quatro">
          </div>
          <div class="numb active">
            <img src="/src/assets/number-5.png" alt="cinco">
          </div>
        </div>
        <p>Facilidade</p>
        <div class="numb-container">
          <div class="numb">
            <img src="/src/assets/number-1.png" alt="um">
          </div>
          <div class="numb">
            <img src="/src/assets/number-2.png" alt="dois">
          </div>
          <div class="numb">
            <img src="/src/assets/number-3.png" alt="três">
          </div>
          <div class="numb">
            <img src="/src/assets/number-4.png" alt="quatro">
          </div>
          <div class="numb active">
            <img src="/src/assets/number-5.png" alt="cinco">
          </div>
        </div>
        <div class="semestre">
          <p>Qual semestre cursou esta disciplina</p>
        </div>
        <select id="semestre" v-model="form.semestre" class="form-element">
          <option value="" disabled>Selecione um semestre</option>
          <option v-for="semestre in semestres" :key="semestre" :value="semestre">{{ semestre }}º Semestre</option>
        </select>
      </div>
      <div class="feedback">
        <h3>Dê seu feedback</h3>
        <p>Sinta-se à vontade para compartilhar sua opinião sobre a disciplina ou professor</p>
        <div class="icons-container">
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
        </div>
        <div class="comentario">
          <p>Caso queira adicionar um comentário sobre o tópico acima, utilize a caixa de comentários abaixo:</p>
          <textarea name="opinion" cols="30" rows="10" placeholder="Deixe um comentário..."></textarea>
        </div>
        <form @submit.prevent="submitFeedback">
          <button type="submit" class="btn">Enviar</button>
          <button type="button" class="btn1" @click="cancelFeedback">Cancelar</button>
        </form>
      </div>
    </div>
    <FooterComponent/>
  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },

  data() {
    return {
      searchQuery: '',
      professor: '',
      metodologiaRating: 5,
      trabalhosRating: 5,
      provasRating: 5,
      materialEstudoRating: 5,
      facilidadeRating: 5,
      form: {
        semestre: ''
      },
      semestres: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
  methods: {
    submitFeedback() {
      console.log(this.metodologiaRating)
      alert('Feedback enviado com sucesso!');
    },
    cancelFeedback() {
      // Aqui você pode adicionar a lógica para cancelar o feedback
    }
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
    font-family: "Jost", sans-serif normal;
   
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
    font-family: "Plus Jakarta Sans", sans-serif normal;
}

h2 {
    color: #2710b9;
    font-size: 30px;
    font-family: "Plus Jakarta Sans", sans-serif, normal;
}

h2 span1 {
    margin: 10px;
    color: #067133;
}



.professor p {
    color: #111;
    font-size: 16px;
    font-weight: normal;
    font-family: "Jost", sans-serif, normal;
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



form {
    display: flex;
    margin-top: 20px;
    width: 100%;
}



.btn{
   background-color: #12017D;
   color: #fff;
   height: 40px;
   border: 0;
   padding: 10px;
   border-radius: 4px;
   margin: 10px;
   cursor: pointer;
   font-size: 16px;
   font-family: "Jost", sans-serif, normal;
   
}

.btn1 {
    background-color: #008137;
    color: #fff;
    height: 40px;
    border: 0;
    padding: 10px;
    border-radius: 4px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    font-family: "Jost", sans-serif, normal;
}

</style>
