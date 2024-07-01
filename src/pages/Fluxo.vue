<template>
  <section>
    <HeaderComponent/>
    <div class="kanban-container">
      <div class="kanban">
        <div class="column" v-for="(column, index) in columns" :key="index">
          <h2 class="column-title">{{ column.title }}</h2>
          <div class="item" v-for="(item, idx) in column.items" :key="idx" draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">{{ item }}</div>
        </div>
      </div>
      <div class="button-container">
        <button class="click-button">
          <span>Salvar</span>
          <div class="plus-icon"></div>
        </button>
      </div>
    </div>
    <FooterComponent/>
  </section>
</template>

<script>
import { ref, defineComponent } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      columns: [
        { title: "1º Semestre", items: ["MAT0025 - Cálculo 1", "CIC0004 - Algoritmos e Programação de Computadores", "FGA0168 - Desenho Industrial por Computador", "FGA0161 - Engenharia Ambiente", "FGA0163 - Introdução a Engenharia"] },
        { title: "2º Semestre", items: ["MAT0026 - Cálculo 2", "IFD0171 - Física", "IFD0173 - Física Experimental", "MAT0031 - Introdução a Álgebra Linear", "FGA0157 - Probabilidade e Estatística Aplicado à Engenharia", "FGA0084 - Desenvolvimento de Software"] },
        { title: "3º Semestre", items: ["FGA0133 - Métodos Numéricos para Engenharia", "FGA0164 - Engenharia Econômica", "FGA0073 - Humanidades e Cidadania", "FGA0071 - Teoria de Eletrônica Digital 1", "FGA0158 - Prática de Eletrônica Digital 1", "FGA0085 - Orientação a Objetos", "FGA0158 - Matemática Discreta 1"] },
        { title: "4º Semestre", items: ["Card 07", "Card 08"] },
      ],
      dragging: null,
    };
  },
  methods: {
    async fetchColumns() {
      try {
        // Substitua pela URL do seu backend
        const response = await fetch('URL_DO_SEU_BACKEND');
        const data = await response.json();
        this.columns = data;
      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    },
    onDragStart(event) {
      event.target.classList.add("dragging");
      this.dragging = event.target;
    },
    onDragEnd(event) {
      event.target.classList.remove("dragging");
      this.dragging = null;
    },
    getNewPosition(column, posY) {
      const cards = column.querySelectorAll(".item:not(.dragging)");
      let result = null;

      for (let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
      }

      return result;
    },
  },
  mounted() {
    const columns = this.$el.querySelectorAll(".column");

    columns.forEach((column) => {
      column.addEventListener("dragover", (e) => {
        e.preventDefault();
        const applyAfter = this.getNewPosition(column, e.clientY);

        if (applyAfter && !applyAfter.classList.contains('column-title')) {
          applyAfter.insertAdjacentElement("afterend", this.dragging);
        } else {
          const itemsContainer = column.querySelector(".item:not(.dragging)");
          if (itemsContainer) {
            itemsContainer.insertAdjacentElement("afterend", this.dragging);
          }
        }
      });
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
}

.kanban-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.kanban {
  display: flex;
  justify-content: center;
  min-height: 400px;
  gap: 10px;
  padding: 10px;
  margin-top: 70px; 
  margin-bottom: 20%; /* Adicione esta linha para mover o quadro Kanban para baixo */
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: #314ec0;
  min-width: 200px;
  border-radius: 5px;
}

.column h2 {
  text-align: center;
  color: white;
}

.item {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.dragging {
  opacity: 0.5;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
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
  margin-right: 10px;
}

.click-button:hover {
  box-shadow: 0 0 20px rgba(0, 0, 255, 0.4);
}
</style>
