<template>
    <section>
        <HeaderComponent/>

        <div class="perfil-page">
            <div class="perfil-page-imagem-div">
                <img class="perfil-page-imagem" src="../assets/person.png" alt="">
            </div>

            <div>
                <div class="perfil-nome">Laryssa</div>

                <div class="perfil-descricao">
                    Olá, Sou a Laryssa, estudante de Engenharia de Software na Universidade de Brasília. Estou verdadeiramente fascinada pelo mundo da tecnologia e pelas oportunidades que ela oferece para revolucionar a forma como vivemos. A cada dia, mergulho ainda mais fundo nesse universo de inovações!
                    E a minha paixão por esse campo me impulsiona a buscar conhecimento constantemente!
                    Atualmente, possuo habilidades em algumas linguagens de programação, incluindo C, Python, JavaScript, HTML e CSS.
                </div>
            </div>
        </div>

        <FooterComponent/>
    </section>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue'
export default {
    name: 'PerfilPage',
    components: {
        HeaderComponent,
        FooterComponent
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
    font-size: 20px;
    width: 1200px;
}
</style>