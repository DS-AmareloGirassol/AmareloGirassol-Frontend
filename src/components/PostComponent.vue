<template> <!--HTML-->
    <div class="post-component">
        <h2 class="title">Título</h2>

        <div class="description">Descrição: {{ description }}</div>
        <div class="link">Link: {{ link }}</div>


    <div class="post">
    <img :src="imgSrc" alt="Post Image">

    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/143897458/335917258-1b9d28fc-b7e0-493d-a814-1569575152e1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240603%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240603T020206Z&X-Amz-Expires=300&X-Amz-Signature=745a195aee46b4ac88cc4301c82e44ddaecd5a58cf1037f04a22c8090ebb528a&X-Amz-SignedHeaders=host&actor_id=152661076&key_id=0&repo_id=776870228" alt="Descrição da imagem para melhorar a acessibilidade"></img  {{ icone }}>
 
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




<style scoped> /*CSS*/
    .post-component {
        margin-left: 235px;
        margin-right: 235px;
        background-color: #B6D9B2;
        border-radius: 10px;
    }
    
    .description {
        display: flex;
        position: relative;
        margin-left: 300px;
    }

    .link {
        display: flex;
        position: relative;
        margin-left: 300px;
        padding: 0 1px 10px;
    }

    .title {
        display: flex;
        position: relative;
        margin-left: 290px;
        padding: 10px;
    }


    .post img {
    width: 108px;
    height: 79px;
    top: 28px;
    right: 100px;
    left: 100px;
    opacity: 0px;
    }
    
    .icone{
    width: 40px;
    height: 43px;
    top: 45px;
    left: 734px;
    opacity: 0px;
    }
    

</style>



