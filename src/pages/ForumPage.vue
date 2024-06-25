<template>
  <section>
    <HeaderComponent />

    <div class="forum-page">
      <div class="div-list-posts">
        <div v-for="postagem in postagens" :key="postagem.id">
          <PostComponent 
            :title="postagem.title" 
            :description="postagem.description" 
            :link="postagem.link" 
            :imgSrc="postagem.imgSrc"/>
        </div>
      </div>
    </div>

    <div class="button-container">
      <button class="click-button">
        <span>Nova Postagem</span>
        <div class="plus-icon"></div>
      </button>
    </div>

    <FooterComponet />
  </section>
</template>

<script>
import { ref, defineComponent } from 'vue';
import PostComponent from '../components/PostComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponet from '../components/FooterComponent.vue';

export default defineComponent({
  data() {
    return {
      postagens: [
        {
          id: '2',
          title: 'Engenharia de Software Telegram',
          description: 'Grupo formado pelos estudantes de software da FGA.',
          link: 'https://web.telegram.org/a/#-1001383799472',
        },
        {
          id: '3',
          title: '1.24 PIBIC e PIBEX @UnBConnect',
          description: 'Grupo para informes sobre PIBIC e PIBEX',
          link: 'bbbbbbbbb'
        },
        {
          id: '4',
          title: 'Cardápio RU',
          description: 'Cardápio de Manhã, Tarde e Noite do Restaurante Universitário',
          link: 'cccccccccc'
        },
        {
          id: '5',
          title: 'Reinvindicações FGA',
          description: 'Grupo formado pelos estudantes da FGA para reivindicar melhorias para o campus',
          link: 'aaaaaaaaaaaa'
        },
        {
          id: '6',
          title: 'Guardiões da Saúde',
          description: 'Grupo de Informes da Disciplina',
          link: 'bbbbbbbbb'
        },
        {
          id: '7',
          title: 'UNB - FGA 2024/1',
          description: 'Grupo formado por calouros da FGA 2024.1',
          link: 'cccccccccc'
        },
        {
          id: '8',
          title: 'Mural da FGA',
          description: 'Grupo de informes da FGA, aqui vamos postar notícias, vagas de estágio, processos seletivos ou qualquer outra coisa relevante para os alunos!',
          link: 'bbbbbbbbb'
        },
        {
          id: '9',
          title: 'Comunidade GNU/Linux - UnB',
          description: 'Grupo para trocar informações sobre o sistema operacional Linux',
          link: 'cccccccccc'
        },
      ]
    };
  },
  components: {
    PostComponent,
    HeaderComponent,
    FooterComponet
  }
});
</script>

<style scoped>
.forum-page {
  margin: 100px 0px;
}

.div-list-posts {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
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

.click-button span {
  font-size: 24px;
  font-weight: bold;
  color: #091f77;
  margin-right: 20px;
}

.plus-icon {
  width: 24px;
  height: 24px;
  position: relative;
}

.plus-icon::before,
.plus-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  height: 4px;
  background-color: #091f77;
  border-radius: 50px;
}

.plus-icon::before {
  transform: translate(-50%, -50%) rotate(90deg);
}

.plus-icon::after {
  transform: translate(-50%, -50%);
}

.click-button:hover {
  box-shadow: 0 0 20px rgba(0, 0, 255, 0.4);
}
</style>
