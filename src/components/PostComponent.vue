<template> <!--HTML-->
    <div class="post-component">
        <h2>Postagem</h2>

        <div>Titulo: {{ title }}</div>
        <div>Descrição: {{ description }}</div>
        <div>Link: {{ link }}</div>
    </div>
</template>



<script> //jascript
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: String,
        description: String,
        link: String
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

</style>
