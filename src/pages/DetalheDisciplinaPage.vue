<template>
    <HeaderComponent/>
    <section class="disciplina-descricao-page">
        <div class="disciplina-descricao-page-title">Avaliação Geral da Disciplina</div>
        
        <div class="disciplina-descricao">
            <div class="div-disciplina-conteudo">
                <div>
                    <span>Disciplina</span>: {{ disciplina.nome }}
                </div>
                <div>
                    <span>Semeste de oferta</span>: {{ disciplina.semesteDeOferta }}
                </div>
                <div>
                    <span>Codigo</span>: {{ disciplina.codigo }}
                </div>
                <div>
                    <span>Carga horaria</span>: {{ disciplina.cargaHoraria }}
                </div>
            </div>

            <div class="div-disciplina-avaliacao">
                <div>
                    <!-- <span>Metodologia de Avaliação</span>: {{ converterNotaEmAvaliacao(avaliacaoDisciplina.metodologia) }} -->
                    <span>Metodologia de Avaliação</span>: {{ avaliacaoDisciplina.metodologia }}
                </div>
                <div>
                    <span>Didática do Professor</span>: {{ avaliacaoDisciplina.didatica }}
                </div>
                <div>
                    <span>Suporte do Professor e Monitores</span>: {{ avaliacaoDisciplina.suporte }}
                </div>
                <div>
                    <span>Indice de Recomendação</span>: {{ avaliacaoDisciplina.recomendacao }}
                </div>
            </div>
        </div>

        <div class="div-disciplina-botoes">
            <div class="disciplina-botoes">
                <div class="botao-avaliar">
                    Avaliar Disciplina
                </div>

                <div class="botao-voltar">
                    Voltar
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref, defineComponent } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponet from '../components/FooterComponent.vue';

export default defineComponent({
    components: {
        HeaderComponent,
        FooterComponet
    },

    data() {
        return {
            disciplina: {
                id: '1',
                nome: 'Método de Desenvolvimento de Software',
                semesteDeOferta: '5',
                codigo: '12345',
                cargaHoraria: '60h'
            },
            avaliacaoDisciplina: {
                metodologia: 3,
                didatica: 2,
                suporte: 4,
                recomendacao: 2
            }
        };
    },

    /* converterNotaEmAvaliacao(nota) {
        if nota == '1'{
            return 'Muito Fraco'
        }
    } */
});
</script>

<style>
.disciplina-descricao-page {
    margin: 50px;
}

.disciplina-descricao-page-title {
    margin-bottom: 30px;
}

.disciplina-descricao {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
}

.div-disciplina-conteudo{
    display: flex;
    flex-direction: column;
    flex: 1;
}

.div-disciplina-avaliacao {
    flex: 1;
}

.div-disciplina-botoes {
    margin-top: 50px;
    display: flex;
    align-items: center;
}

.disciplina-botoes {
    display: flex;
}

.botao-avaliar {
    padding: 5px 0;
    width: 200px;
    margin-right: 20px;
    color: #ffffff;
    background-color: #067133;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
}

.botao-voltar {
    padding: 5px 0;
    width: 200px;
    text-align: center;
    color: #ffffff;
    background-color: #2710B9;
    border-radius: 10px;
    cursor: pointer;
}
</style>