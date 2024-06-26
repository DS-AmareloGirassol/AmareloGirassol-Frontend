<template>
    <section>
      <HeaderComponent />
      <div class="kanban">
        <div class="column" v-for="(column, index) in columns" :key="index">
          <div class="item" v-for="(item, idx) in column.items" :key="idx" draggable="true" @dragstart="onDragStart" @dragend="onDragEnd">{{ item }}</div>
        </div>
      </div>
      <FooterComponent />
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        columns: [
          { items: ["Card 01", "Card 02"] },
          { items: ["Card 03", "Card 04"] },
          { items: ["Card 05", "Card 06"] },
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
  