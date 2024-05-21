  
<template>
  <html>
    <section>
      <header>
        <nav>
          <h1><\UnbConnect></h1>
          <ul>
            <li>Fórum</li>
            <li>Início</li>
            <li>Nosso Impacto</li>
            <li>Serviços</li>
            <li>Quem Somos</li>
            </ul>
          </nav>
      </header>
          <body>
            <div v-for="postagem in postagens" :key="postagem.id">
                  <PostComponent :title="postagem.title" :description="postagem.description" :link="postagem.link"/>
            </div>
          </body>
    </section>
    <footer>
      <p>©2024, UnBConnect.</p>
      <p>Amarelo Girassol - Desenvolvimento de Software, 2024/1.</p>

    </footer>
  </html>
</template>
    

<script>
import { ref, defineComponent } from 'vue';
import PostComponent from '../components/PostComponent.vue';

export default defineComponent({
  data() {
    return {
      postagens: [
        {
          id: '1',
          title: 'aaaaaaaa',
          description: 'aaaaaaaaa',
          link: 'aaaaaaaaaaaa'
        },
        {
          id: '2',
          title: 'bbbbbbbbbbbbb',
          description: 'bbbbbbbbbbbb',
          link: 'bbbbbbbbb'
        },
        {
          id: '3',
          title: 'cccccccccc',
          description: 'cccccccccc',
          link: 'cccccccccc'
        }
      ]
    };
  },

  components: {
    PostComponent
  }
});
</script>

<style scoped>

*  {
  /* defini todas as tags de "espaçamentos" */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  /* corpo */
background-color: #FFFFFF;
font-family: 'Roboto', 'Arial', sans-serif;
}

header {
  /* cabeçalho */
  background-color: #008137;
  padding: 11px 0; 
  color: #FFFFFF;
  width: 100%;
  bottom: 0;
  left: 0;
}


ul {
  display: flex;
  flex-direction: row;
  gap: 100px; 
  /* separação entre cada item da barra de navegação */
}

footer {
  /* rodapé */
  background-color: #12017D;
  padding: 26px 0;
  text-align: center;
  color:#FFFFFF;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;

  
}
</style>
