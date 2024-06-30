<template> 
    <div class="materia">
      <h2 class="disciplina">Matéria: {{ materia }}</h2>
      <div class="codigo">Código: {{ codigo }}</div>
      <div class="semestre">Semestre: {{ semestre }}</div>
      <div class="carga"> Carga {{ carga }} </div>
    </div>
  </template>
   
  <script>
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'MateriaComponent',
    props: {
        id: String,
        disciplina: String,
        codigo: String,
        semestre: String,
        carga: String
        
    },
  });
  </script>
  
  <style scoped>
  .materia {
    margin: 20px;
    padding: 20px;
    background-color: #f0f0f0;
    border-radius: 8px;
  }
  
  .materia-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .codigo, .semestre {
    margin-bottom: 10px;
  }
  
  </style>
  