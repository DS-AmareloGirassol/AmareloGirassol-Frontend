<template>
    <div class="post-component">
        <div class="post-div-imagem">
            <img src="../assets/download.jpeg" class="post-imagem">
        </div>

        <div class="post-conteudo">
            <div class="post-title">{{ title }}</div>

            <div class="post-description">{{ description }}</div>
            <div class="post-link">
                <a :href="link">Link</a>
            </div>
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
        imgSrc: String
    },
});
</script>

<style scoped>
    .post-component {
        display: flex;
        width: 800px;
        padding: 20px;
        background-color: rgba(211, 211, 211, 0.7);
        border-radius: 10px;
        margin-bottom: 50px;
    }

    .post-conteudo {
        margin-left: 20px;
    }

    .post-title {
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 20px;
        color: rgba(0, 0, 0, 0.7);
    }
    
    .post-description {
        font-size: 18px;
    }

    .post-link {
        font-size: 16px;
        margin-top: 10px;
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



