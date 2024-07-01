<template>
    <div class="post-component">
        <div class="post-conteudo">
            <div class="post-title">{{ title }}</div>

            <div class="post-description">{{ description }}</div>
            <div class="post-link">
                <a :href="link">Link</a>
            </div>
            <div class="post-user">Criado por: <span @click="goToPerfil" class="post-link-user">{{ user_name }}</span></div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        id: String,
        title: String,
        description: String,
        link: String,
        imgSrc: String,
        user: String,
        user_name: String
    },

    methods: {
        goToPerfil() {
            this.$router.push({ name: 'Perfil', params: { user_id: this.user } });
        },
    }
});
</script>

<style scoped>
    .post-component {
        display: flex;
        width: 800px;
        padding: 20px;
        background-color: #e3e4e8;
        border-radius: 10px;
        margin-bottom: 50px;
    }

    .post-conteudo {
        margin-left: 20px;
    }

    .post-title {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
        color: rgba(0, 0, 0, 0.7);
    }
    
    .post-description {
        font-size: 18px;
    }

    .post-link {
        font-size: 15px;
        margin-top: 10px;
    }

    .post-user {
        margin-top: 20px;
        font-size: 14px;
    }

    .post-link-user {
        color: #160094;
        cursor: pointer;
    }

    .post-imagem {
        width: 150px;
        border-radius: 10px;
    }
    
    .icone{
        width: 40px;
        height: 43px;
        top: 45px;
        opacity: 0px;
    }
</style>



