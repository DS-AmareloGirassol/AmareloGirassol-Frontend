<template>
    <div>
      <HeaderComponent/>
      <section class="disciplina-descricao-page">
        <div class="disciplina-descricao-page-title">Matéria</div>
        <div class="disciplina-descricao">
          <div class="div-disciplina-conteudo">
            <div>
              <span>Disciplina</span>: {{ materia.materia}}
            </div>
            <div>
              <span>Semestre de oferta</span>: {{ materia.semestre }}
            </div>
            <div>
              <span>Codigo</span>: {{ materia.codigo }}
            </div>
            <div>
              <span>Carga horaria</span>: {{ materia.carga }}
            </div>
          </div>
        </div>
      </section>
      <FooterComponent/>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  import MateriaComponent from '../components/MateriaComponent.vue';
  import HeaderComponent from '../components/HeaderComponent.vue';
  import FooterComponent from '../components/FooterComponent.vue';
  
  export default defineComponent({
    components: {
      HeaderComponent,
      FooterComponent
    },
    data() {
      return {
        disciplina: {
          id: '1',
          nome: 'Método de Desenvolvimento de Software',
          semestreDeOferta: '5',
          codigo: '12345',
          cargaHoraria: '60h'
        }
      };
    }
  });
  </script>
  
  <style scoped>
  .disciplina-descricao-page {
    padding: 20px;
  }
  
  .disciplina-descricao-page-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  .div-disciplina-conteudo {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  