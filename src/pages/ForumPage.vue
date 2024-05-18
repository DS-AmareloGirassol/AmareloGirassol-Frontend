<template>
  <section>
    <h1>Forum Page</h1>

    <div v-for="postagem in postagens" :key="postagem.id">
      <PostComponent :title="postagem.title" :description="postagem.description" :link="postagem.link"/>
    </div>
  </section>
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

</style>
