<template>
    <div class="post-component">
        <h2>Postagem {{ id }}</h2>

        <div>Titulo: {{ title }}</div>
        <div>Descrição: {{ description }}</div>
        <div>Link: {{ link }}</div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        id: String,
        title: String,
        description: String,
        link: String
    },
});
</script>

<style scoped>
    .post-component {
        background-color: red;
    }
</style>