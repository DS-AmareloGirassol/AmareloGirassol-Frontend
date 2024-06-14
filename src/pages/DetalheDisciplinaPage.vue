<template>
    <HeaderComponent/>
    <section class="disciplina-descricao-page">
        <div class="disciplina-descricao-page-title">Avaliação Geral da Disciplina
        </div>

        <div class="disciplina-descricao">
            <div class="div-disciplina-conteudo">
                <div>
                    <span><b>Disciplina</b></span>: {{ disciplina.nome }}
                </div>
                <div>
                    <span><b>Semeste de oferta</b></span>: {{ disciplina.semesteDeOferta }}
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
                    <!-- <span>Metodologia de Avaliação</span>: {{ converterNotaEmAvaliacao(avaliacaoDisciplina.metodologia) }} -->
                    <span><b>Metodologia de Avaliação</b></span>: {{ avaliacaoDisciplina.metodologia }}
                </div>
                <div>
                    <span><b>Didática do Professor</b></span>: {{ avaliacaoDisciplina.didatica }}
                </div>
                <div>
                    <span><b>Suporte do Professor e Monitores</b></span>: {{ avaliacaoDisciplina.suporte }}
                </div>
                <div>
                    <span><b>Índice de Recomendação</b></span>: {{ avaliacaoDisciplina.recomendacao }}
                </div>
                <div class="div-disciplina-avaliacao">
                    <ul class="avaliacao">
                    <li class="star-icon ativo" data-avaliacao="1"></li>
                    <li class="star-icon" data-avaliacao="2"></li>
                    <li class="star-icon" data-avaliacao="3"></li>
                    <li class="star-icon" data-avaliacao="4"></li>
                    <li class="star-icon" data-avaliacao="5"></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div class="div-disciplina-botoes"> -->
            <div class="disciplina-botoes">
                <div class="botao-avaliar">
                    Avaliar Disciplina
                </div>

                <div class="botao-voltar">
                    Voltar
                </div>
            </div>
        <!-- </div> -->
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
                metodologia: 3,
                didatica: 2,
                suporte: 4,
                recomendacao: 2
            }
        };
    }
});
</script>

<style>
.disciplina-descricao-page {
    margin-top: 20px;
    margin-left: 10%;
    line-height: 2.5;
}

.disciplina-descricao-page-title {/*title*/
    margin-bottom: 50px;
    margin-left: 30px;
    margin-right: 70px;
    font-weight: bold;
    font-size: 28px;
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    color:#067133;
    text-align: center;

}

.disciplina-descricao {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;

}

.div-disciplina-conteudo{ /*descrição*/
    display: flex;
    flex-direction: column;
    flex: 1;
}

.div-disciplina-avaliacao {
    flex: 1;

}

/* .div-disciplina-botoes {
    margin-top: 50px;
    display: flex;
    align-items: center;
} */

.disciplina-botoes {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px ;
}

.botao-avaliar, .botao-voltar{
    padding: 5px 0;
    width: 200px;
    margin-right: 20px;
    color: #ffffff;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    display: flex;
    justify-content: center; /*Centraliza horizontalmente */
    align-items: center; /*Centraliza verticalmente */
    height: 25px;
}

.botao-avaliar {
    background-color: #067133;
}

.botao-voltar{
    background-color: #2710B9;
}

/* Adicionando efeito de hover que vai mudar a cor ao passar o mouse */
.botao-avaliar:hover {
    background-color: #045d29; /* Cor ao passar o mouse */
}

.botao-voltar:hover {
    background-color: #1a0a85; /* Cor ao passar o mouse */
}

.avaliacao{
    display: flex;
}
.star-icon{
    list-style-type: none;
    border: 1px solid #fff;
    cursor: pointer;
    color: #ffe500;
    font-size: 40px;/* alterar o tamanho das estrelas */
}
.star-icon::before{
    content: "\2605";
}
.star-icon.ativo ~ .star-icon::before{
    content: "\2606";
}
.avaliacao:hover .star-icon::before{
    content: "\2605";
}
.star-icon:hover ~ .star-icon::before{
    content: "\2606";
}


</style>