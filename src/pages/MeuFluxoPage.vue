<template>
  <section>
    <HeaderComponent/>

    <div class="meu-fluxo-page"></div>

    <FooterComponent/>
  </section>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      subjectsList: []
    };
  },

  methods: {
    async getSubjectsByUser() {
      try {
        const user_id = localStorage.getItem('user_id')
        const token = localStorage.getItem('token')

        const response = await axios.get('http://localhost:8000/api/users/1/subjects/', { headers: { authorization:`Token ${token}` } });

        this.subjectsList = response.data

      } catch (err) {
        this.error = 'erro'
      }
    }
  },
  
  async mounted() {
    await this.getSubjectsByUser()

    if (this.subjectsList.length > 0) {
      console.log('fefewfwe')
    } else {
      this.$router.push({ name: 'Seleção' });
    }
  }
};

</script>

<style scoped>

.meu-fluxo-page { 
  display: flex;
  flex: 1;
}

</style>
