<template>
    <section>
        <h2>Postagem</h2>

        <div>Titulo: {{ title }}</div>
        <div>Descrição: {{ description }}</div>
        <div>Link: {{ link }}</div>
    </section>
</template>

<script>
import { ref, defineComponent } from 'vue';

export default defineComponent({
    props: {
        title: String,
        description: String,
        link: String
    },
});
</script>

<style scoped>

</style>