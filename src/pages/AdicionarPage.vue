<template>
  <section>
    <HeaderComponent/>

    <div class="criar-postagem-page">
      <form class="wrapper" @submit.prevent="handleSubmit">
        <h3 class="criar-postagem-title">Adicionar uma postagem</h3>

        <p>Nome</p>
        <div class="input-box">
          <input type="text" placeholder="Digite o nome da postagem" v-model="forumName">
        </div>

        <p>Descrição</p>
        <div class="comentario">
          <textarea v-model="description" cols="30" rows="5" placeholder="Deixe um comentário..."></textarea>
        </div>

        <p>Link</p>
        <div class="input-box">
          <input type="url" placeholder="Link" v-model="forumLink">
        </div>

        <div class="criar-postagem-buttons">
          <button type="submit" class="btn">Enviar</button>
          <button type="button" class="btn1" @click="handleCancel">Cancelar</button>
        </div>
      </form>
    </div>

    <SuccessMessageModal
      v-if="isModalVisible"
      :show="isModalVisible"
      message="Postagem efetuada com sucesso!!"
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
  name: 'AdicionarPost',
  components: {
        HeaderComponent,
        FooterComponent,
        SuccessMessageModal
    },
  data() {
    return {
      isModalVisible: false,
      forumName: '',
      description: '',
      forumLink: ''
    };
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },

    async handleSubmit() {
      // Adicione lógica para o envio do formulário
      console.log('Formulário enviado', this.forumName, this.description, this.forumLink);

      const token = localStorage.getItem('token')

      await axios.post('http://localhost:8000/api/post/', {
        title: this.forumName,
        description: this.description,
        link: this.forumLink,
        user: localStorage.getItem('user_id')
      }, { headers: { authorization:`Token ${token}` } });

      this.isModalVisible = true
      await this.sleep(2000);

      this.$router.push({ name: 'Forum' });
    },

    handleCancel() {
      this.$router.push({ name: 'Forum' });
    }
  }
};
</script>

<style scoped>

.criar-postagem-title {
  color: #12017D;
}

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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.wrapper h3 {
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper p {
  color: #000;
  font-size: 14px;
}

.input-box {
  width: 100%;
  height: 40px;
  background: #fff;
  margin-bottom: 20px;
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
  border: 1px solid #e3e4e8;
  border-radius: 10px;
  padding: 5px 10px;
}

.input-box input::placeholder {
  color: #7c7c8a;
}

.comentario {
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #e3e4e8;
  border-radius: 10px;
  outline: none;
  resize: none;
  height: 100px;
}

.criar-postagem-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
</style>