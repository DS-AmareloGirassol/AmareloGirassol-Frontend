<template> <!--HTML-->
    <section class="post-component">
        <div class="post-div-imagem">
            <img src="../assets/download.jpeg" class="post-imagem">
        </div>

        <div class="post-conteudo">
            <div class="post-title">Título</div>

            <div class="post-description">{{ description }}</div>
            <div class="post-link">
                <a :href="link">Link</a>
            </div>
        </div>
    </section>
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




<style scoped> /*CSS*/
    .post-component {
        display: flex;
        width: 800px;
        padding: 20px;
        background-color: #B6D9B2;
        border-radius: 10px;
        margin-bottom: 50px;
    }

    .post-conteudo {
        margin-left: 10px;
    }

    .post-title {
        font-size: 20px;
        font-weight: 900;
        margin-bottom: 20px;
    }
    
    .post-description {
        font-size: 12px;
    }

    .post-link {
        font-size: 12px;
        margin-top: 10px;
    }

    .post-imagem {
        width: 150px;
        padding: 20px;
        border-radius: 30px;
    }
    
    .icone{
        width: 40px;
        height: 43px;
        top: 45px;
        opacity: 0px;
    }
</style>



