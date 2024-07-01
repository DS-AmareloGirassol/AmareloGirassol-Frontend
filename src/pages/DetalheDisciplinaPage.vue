<template>
    <HeaderComponent/>
    <section class="disciplina-descricao-page">
        <div class="disciplina-descricao-page-title">Avaliação Geral da Disciplina</div>
<section class="avaliacao-fundo">
        <div class="disciplina-descricao">
            <div class="div-disciplina-conteudo">
                <div>
                    <span><b>Disciplina</b></span>: {{ disciplina.nome }}
                </div>
                <div>
                    <span><b>Semestre de oferta</b></span>: {{ disciplina.semestreDeOferta }}
                </div>
                <div>
                    <span><b>Código</b></span>: {{ disciplina.codigo }}
                </div>
                <div>
                    <span><b>Carga horária</b></span>: {{ disciplina.cargaHoraria }}
                </div>
            </div>

            <div class="div-disciplina-avaliacao">
                <div>
                    <span><b>Metodologia de Avaliação</b></span>: 
                    <span v-for="n in 5" :key="'metodologia' + n" class="star-icon" :class="{ ativo: n <= avaliacaoDisciplina.metodologia }"></span>
                </div>
                <div>
                    <span><b>Didática do Professor</b></span>: 
                    <span v-for="n in 5" :key="'didatica' + n" class="star-icon" :class="{ ativo: n <= avaliacaoDisciplina.didatica }"></span>
                </div>
                <div>
                    <span><b>Suporte do Professor e Monitores</b></span>: 
                    <span v-for="n in 5" :key="'suporte' + n" class="star-icon" :class="{ ativo: n <= avaliacaoDisciplina.suporte }"></span>
                </div>
                <div>
                    <span><b>Índice de Recomendação</b></span>: 
                    <span v-for="n in 5" :key="'recomendacao' + n" class="star-icon" :class="{ ativo: n <= avaliacaoDisciplina.recomendacao }"></span>
                </div>
            </div>
        </div>
    </section>
        <div class="disciplina-botoes">
            <div class="botao-avaliar">
                Avaliar Disciplina
            </div>

            <div class="botao-voltar">
                Voltar
            </div>
        </div>
    </section>
</template>

<script>
import { ref, defineComponent } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

export default defineComponent({
    components: {
        HeaderComponent,
        FooterComponent
    },

    data() {
        return {
            disciplina: {
                id: '1',
                nome: 'Método de Desenvolvimento de Software',
                semestreDeOferta: '5',
                codigo: '12345',
                cargaHoraria: '60h'
            },
            avaliacaoDisciplina: {
                metodologia: 1,
                didatica: 5,
                suporte: 3,
                recomendacao: 2
            }
        };
    }
});
</script>

<style>
.disciplina-descricao-page {
    margin-top: 20px;
    padding: 0px 100px;
    line-height: 2.5;
}

.disciplina-descricao-page-title {
    margin-bottom: 50px;
    margin-left: 30px;
    margin-right: 70px;
    font-weight: bold;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #067133;
    text-align: center;
}

.disciplina-descricao {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    font-size: 22px;
    color: rgba(0, 0, 0, 0.7);
}

.div-disciplina-conteudo {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.div-disciplina-avaliacao {
    flex: 1;
}

.disciplina-botoes {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
}

.botao-avaliar, .botao-voltar {
    padding: 5px 0;
    width: 200px;
    margin-right: 20px;
    color: #ffffff;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25px;
}

.botao-avaliar {
    background-color: #067133;
}

.botao-voltar {
    background-color: #2710B9;
}

.botao-avaliar:hover {
    background-color: #045d29;
}

.botao-voltar:hover {
    background-color: #1a0a85;
}

.star-icon {
    list-style-type: none;
    cursor: pointer;
    color: #2710B9;
    font-size: 30px;
    margin-right: 2px;
}

.star-icon::before {
    content: "\2606"; /* Unicode character for hollow star */
}

.star-icon.ativo::before {
    content: "\2605"; /* Unicode character for filled star */
}

/* .avaliacao-fundo {
        display: flex;
        width: 1300px;
        padding: 20px;
        background-color: rgba(211, 211, 211, 0.2);
        border-radius: 10px;
        margin-bottom: 50px;

    } */
</style>
