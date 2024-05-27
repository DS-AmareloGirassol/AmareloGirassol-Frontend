  
<template>
  <html>
    <section>
      <!-- <HeaderComponent/> -->
      <header>
      <section>
      <h1><\UnbConnect></h1>
      <nav>
        <ul>
          <li>Início</li>
          <li>Nosso Impacto</li>
          <li>Serviços</li>
          <li>Quem Somos</li>
        </ul>
    </nav>
      </section>
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
          link: 'aaaaaaaaaaaa',
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
        },
        {
        id: '4',
          title: 'aaaaaaaa',
          description: 'aaaaaaaaa',
          link: 'aaaaaaaaaaaa'
        },
        {
          id: '5',
          title: 'bbbbbbbbbbbbb',
          description: 'bbbbbbbbbbbb',
          link: 'bbbbbbbbb'
        },
        {
          id: '6',
          title: 'cccccccccc',
          description: 'cccccccccc',
          link: 'cccccccccc'
        },
        {
          id: '5',
          title: 'bbbbbbbbbbbbb',
          description: 'bbbbbbbbbbbb',
          link: 'bbbbbbbbb'
        },
        {
          id: '6',
          title: 'cccccccccc',
          description: 'cccccccccc',
          link: 'cccccccccc'
        },
      ]
    };
  },

  components: {
    PostComponent,
    // HeaderComponent
  }
});

// import { ref, defineComponent } from 'vue';
// import HeaderComponent from '../components/HeaderComponent.vue';

// export default defineComponent({
//   data() {
//     return {
//       UnBConnect: [
//         {
//         Fórum,
//         Quem somos
//       }
//       ]     
//     };
//   },

//   components: {
//     HeaderComponent,
//   }
// });
</script>

<style scoped>

*  {
  /* defini todas as tags de "espaçamentos" */
  padding: 5;
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

nav {
  display: flex;
  margin-right: 250px;
  justify-content: end; /* Alinha os itens do nav para a direita */
  align-items: center; /* Centraliza verticalmente os itens */
}

ul {
  display: flex;
  flex-direction: row;
  gap: 50px; /* Ajusta a separação entre cada item da barra de navegação */
  list-style-type: none; /* Remove os marcadores de lista padrão */
  margin: 0;
  padding: 0;
}


footer {
  /* rodapé */
  background-color: #12017D;
  padding: 26px 0;
  margin-top: 20px;
  text-align: center;
  color:#FFFFFF;
  position: relative;
  width: 100%;
  top: 57px;
  left: 0;

  
}
</style>
