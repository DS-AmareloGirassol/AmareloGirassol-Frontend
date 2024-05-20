  
    <template>
      <section>
      <header>
        <nav>
          <h1><\UnbConnect></h1>
          <ul>
            <li>Fórum</li>
            <li>Início</li>
            <li>Nosso Impacto</li>
            <li>Serviços</li>
            <li>Somos</li>
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
        voluptas asperiores libero mollitia distin
      </footer>
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
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
}

body {
background-color: brown;
}

header {
  background-color: #008137;
}

header > h1 {
  padding: 15px;
}

.content {
  flex: 1; /* Ocupa o espaço disponível, empurrando o footer para o fim */
}

ul {
  display: flex;
  flex-direction: row;
  gap: 70px;
}

footer {
  background-color: blue;
  padding: 10px;
  text-align: center;
}
</style>
