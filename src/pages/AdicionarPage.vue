<template>
  <section>
    <HeaderComponent/>

    <div class="criar-postagem-page">
      <form class="wrapper" @submit.prevent="handleSubmit">
        <h3>Adicionar uma postagem</h3>

        <p>Nome</p>
        <div class="input-box">
          <input type="text" placeholder="Digite o nome do fórum" v-model="forumName">
        </div>

        <p>Descrição</p>
        <div class="comentario">
          <textarea v-model="description" cols="30" rows="5" placeholder="Deixe um comentário sobre o fórum..."></textarea>
        </div>

        <p>Link</p>
        <div class="input-box">
          <input type="url" placeholder="Link do fórum" v-model="forumLink">
        </div>

        <div class="buttons">
          <button type="submit" class="btn">Enviar</button>
          <button type="button" class="btn1" @click="handleCancel">Cancelar</button>
        </div>
      </form>
    </div>

    <FooterComponent/>
  </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'AdicionarPost',
  components: {
        HeaderComponent,
        FooterComponent
    },
  data() {
    return {
      forumName: '',
      description: '',
      forumLink: ''
    };
  },
  methods: {
    handleSubmit() {
      // Adicione lógica para o envio do formulário
      console.log('Formulário enviado', this.forumName, this.description, this.forumLink);
    },
    handleCancel() {
      // Adicione lógica para cancelar o formulário
      this.forumName = '';
      this.description = '';
      this.forumLink = '';
      this.$router.push({ name: 'Forum' });
    }
  }
};
</script>

<style scoped>

.criar-postagem-page {
  padding: 50px;
  display: flex;
  flex: 1;
}

.wrapper {
  margin: auto;
  width: 500px;
  background: #ffffff;
  color: #000;
  border-radius: 10px;
  padding: 30px 40px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #12017D;
}

.wrapper h3 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper p {
  color: #12017D;
  font-size: 14px;
}

.input-box {
  width: 100%;
  height: 40px;
  background: #fff;
  margin: 30px 0;
}

.input-box input {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  width: 100%;
  height: 100%;
  outline: none;
  background: #fff;
  border: 2px solid rgba(255, 255, 255, .2);
  border-radius: 5px;
  cursor: pointer;
}

.input-box input::placeholder {
  color: #7c7c8a;
}

.comentario {
  margin-top: 10px;
}

textarea {
  width: 400px;
  padding: 1rem;
  border-radius: .4rem;
  border: 1;
  outline: none;
  resize: none;
  height: 100px;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.buttons {
  justify-content: center;
}

.btn {
  background-color: #008137;
  color: #fff;
  height: 40px;
  width: 150px;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
}

.btn1 {
  background-color: #7c7c8a;
  color: #fff;
  height: 40px;
  width: 150px;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
}
</style>