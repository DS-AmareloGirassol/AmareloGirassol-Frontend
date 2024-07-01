<template>
    <section>
        <HeaderComponent/>

        <div class="perfil-page">
            <div class="perfil-page-imagem-div">
                <img class="perfil-page-imagem" src="../assets/person.png" alt="">
            </div>

            <div>
                <div class="perfil-nome">{{ name }}</div>

                <div class="perfil-descricao">
                    {{ description }}
                </div>
            </div>
        </div>

        <FooterComponent/>
    </section>
</template>

<script>
import axios from 'axios';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
    name: 'PerfilPage',
    components: {
        HeaderComponent,
        FooterComponent
    },

    data() {
        return {
            name: null,
            description: null,
            semester_being_attended: null,
        }
    },

    async mounted() {
        await this.getInfosUser()
    },

    methods: {
        async getInfosUser() {
            try {
                const user_id = this.$route.params.user_id;
                const token = localStorage.getItem('token')

                const response = await axios.get(`http://localhost:8000/api/users/${user_id}/`, { headers: { authorization:`Token ${token}` } });

                this.name = response.data.name
                this.description = response.data.description
                this.semester_being_attended = response.data.semester_being_attended
            } catch (err) {
                this.error = 'erro'
            }
        },
    }
}
</script>

<style scoped>
.perfil-page {
    padding: 50px;
    display: flex;
    flex: 1;
}

.perfil-page-imagem-div{
    margin-right: 50px;
}

.perfil-page-imagem {
    height: 200px;
    background-color:beige;
    border-radius: 30px;
}

.perfil-nome {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 50px;
}

.perfil-descricao {
    margin-top: 20px;
    font-size: 20px;
    width: 1200px;
}
</style>