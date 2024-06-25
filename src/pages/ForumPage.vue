  
<template>
    <section>
      <HeaderComponent/>
      
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

      <FooterComponet/>
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
          title: 'Engenheria de Software Telegram',
          description: 'Grupo formado pelos estudantes de software da FGA.',
          link: 'https://web.telegram.org/a/#-1001383799472',
        },
        {
          id: '3',
          title: '1.24 PIBIC e PIBEX @UnBConnect',
          description: 'Grupo Grupo para informes sobre PIBIC E PIBEX',
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
          description: 'Grupo formado pelos estudantes da FGA, para reinvindicar por melhorias para o campus',
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
          description: 'Esse é o grupo de informes da FGA, aqui vamos postar informes, notícias, vagas de estágio, processos seletivos ou qualquer outra coisa que seja relevante pros alunos!',
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
  margin-bottom: 200px;
}
</style>
