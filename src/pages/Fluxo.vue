<template>
  <section>
    <HeaderComponent/>
    <div class="kanban">
      <div class="column" v-for="(column, index) in columns" :key="index">
        <div class="item" v-for="(item, idx) in column.items" :key="idx" draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">{{ item }}</div>
      </div>
    </div>
    <FooterComponent/>
  </section>
</template>

<script>
import { ref, defineComponent } from 'vue';
import MateriaComponent from '../components/MateriaComponent.vue';
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
        { items: ["MAT0025 - Cálculo 1", "CIC0004 - Algoritmos e Programação de Computadores", " FGA0168 - Desenho Industrial por Computador", "FGA0161 - Engenharia Ambiente", "FGA0163 - Introdução a Egenharia"] },
        { items: ["MAT0026 - Cálculo 2", "IFD0171 - Física", "IFD0173 - Física Experimental", "MAT0031 - Introdução a Álgebra Linear", "FGA0157 - Probabilidade e Estatística Aplicado à Engenharia", "FGA0084 - Desenvolvimento de Software"] },
        { items: ["FGA0133 - Métodos Numéricos para Engenharia", "FGA0164 - Engenharia Econômica", "FGA0073 - Humanidades e Cidadania","FGA0071 - Teoria de Eletrônica Digital 1","FGA0158 - Prática de Eletrônica Digital 1","FGA0085 - Orientação a Objetos", "FGA0158 - Matemática Discreta 1"] },
        { items: ["Card 07", "Card 08"] },
      ],
      dragging: null,
    };
  },
  methods: {
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

        if (applyAfter) {
          applyAfter.insertAdjacentElement("afterend", this.dragging);
        } else {
          column.prepend(this.dragging);
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

.kanban {
  display: flex;
  justify-content: center;
  min-height: 400px;
  gap: 10px;
  padding: 10px;
}

.column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: cadetblue;
  min-width: 200px;
  border-radius: 5px;
}

.item {
  background-color: white;
  padding: 10px;
  border-radius: 5px;
}

.dragging {
  opacity: 0.5;
}
</style>
