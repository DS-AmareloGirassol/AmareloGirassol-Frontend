<template>
  <selection>
    <HeaderComponent/>

    <div class="wrapper">
      <form @submit.prevent="handleSubmit">
        <h3>Fórum</h3>
        <p>Nome do Fórum</p>
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
    <footer>
      <p>©2024, UnBConnect.</p>
      <p>Amarelo Girassol - Desenvolvimento de Software, 2024/1.</p>
    </footer>
  </selection>
</template>

<script>
export default {
  name: 'UnbConnect',
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
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1.200..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1.200..800&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  width: 100%;
  height: 50px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #2710b2;
}

.logo {
  color: #029e46;
  font-size: 20px;
  margin-left: 15px;
  align-self: center;
  font-family: 'Jost', sans-serif;
}

span {
  color: #12017D;
}

input {
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

.links {
  display: block;
  color: #029e46;
  margin-top: 15px;
  font-size: 17.5px;
  font-family: 'Jost', sans-serif;
}

.links a {
  text-decoration: none;
  color: inherit;
  padding: 15px;
}

.icones {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
}

.icone_u {
  height: 10px;
}

.icone_l {
  height: 38px;
  width: 38px;
  padding-left: 10px;
  padding-top: 5px;
}

.wrapper {
  width: 500px;
  background: #12017D;
  color: #fff;
  border-radius: 10px;
  padding: 30px 40px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(450px);
}

.wrapper h3 {
  font-family: 'Jost', sans-serif;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}

.wrapper p {
  color: #fff;
  font-family: 'Jost', sans-serif;
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
  font-family: 'Jost', sans-serif;
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
  font-family: 'Jost', sans-serif;
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn {
  background-color: #008137;
  color: #fff;
  height: 40px;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Jost', sans-serif;
}

.btn1 {
  background-color: #7c7c8a;
  color: #fff;
  height: 40px;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  margin: 10px;
  cursor: pointer;
  font-size: 16px;
  font-family: 'Jost', sans-serif;
}

footer {
  background-color: #12017D;
  padding: 26px 0;
  margin-top: 20px;
  text-align: center;
  position: relative;
  width: 100%;
  top: 57px;
  left: 0;
}

footer p {
  color: #fff;
}
</style>