<template>
    <HeaderComponent/>

    <div id="informacao">
        <div id="sobre">
            <h2 class="center-text">Monitore sua <span class="azul">jornada acadêmica</span> em um único lugar!</h2>
        </div>
        <div id="foto">
            <img src="../assets/tela.png">
        </div>
    </div>
        
    <div id="servico">
        <div class="container">
            <h1> Nossos serviços </h1>

            <div class="content">
                <div class="card">
                    <h2>Avaliação de matéria</h2>
                    <p>
                        Avaliação de matéria com feedback, aprovação, indicação e semestre.
                        Para que você consiga ter uma noção sobre a matéria
                    </p>
                </div>
                <div class="card">
                    <h2>Ver sua posição no fluxo</h2>
                    <p>Visualize sua posição no fluxo e insira as matérias já feitas para se organizar melhor</p>
                    </div>
                <div class="card">
                    <h2>Fóruns</h2>
                    <p>
                        Lista de postagens com atividades diversas, cada uma contendo nome, descrição, proprietário e link.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div id="comunidade">
        <h1 class="titulo">Comunidade única. Você vai adorar!</h1>
        <div id="habilidades">
            <div class="cartao">
                <h1>“Que projeto incrível vocês desenvolveram! É tão bom ver algo que realmente facilita a vida acadêmica. Vocês conseguiram captar as necessidades reais dos estudantes e transformaram isso em soluções práticas. Estou impressionado com a forma como vocês estão tornando a jornada educacional mais suave e eficiente. Parabéns por fazerem uma diferença tão positiva na vida de tantas pessoas!”</h1>
            </div>
            <div class="cartao">
                <h1>“O site reúne diversas funcionalidades em um só lugar, facilitando a vida do estudante. Além disso, a Avaliação de professores e disciplinas fornece informações valiosas para os alunos.”</h1>
            </div>
            <div class="cartao">
                <h1>“Gostei muito da funcionalidade do Fórum, que cria um espaço para os alunos interagirem, trocarem ideias e informações, e até se ajudarem nos estudos.”</h1>
            </div>
            <div class="cartao">
                <h1>“O site é fácil de navegar, mesmo para quem não está familiarizado com a plataforma. Os menus e botões estão bem organizados e são fáceis de encontrar. Isso facilita a navegação e o uso das funcionalidades.”</h1>
            </div>
        
        </div>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
name: 'HomePage',

components: {
    HeaderComponent,
},
data() {
    return {};
},
}
</script>

<style>
.container {
    width: 100%;
    padding: 100px 0;
    background-color: #10162F;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .wave {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-size: 200% 100%;
  }
  
  .content {
    display: flex;
    flex-wrap: wrap;
  }
  
  .card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 6px #545558;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    width: 300px;
    align-items: center;
    margin: 0px 50px;
    }
  
  .card h2 {
    margin-top: 12px;

  }
  
  .card p {
    margin-top: 10px;
    margin-bottom: 2px;
    
  }

.container h1{
    font-size: 45px;
    font-weight: 150px;
    color: #ffffff;
    text-align: center;
    line-height: 45px;
    margin-bottom: 80px;
    

}
.card button {
    background-color: #067133;
    border: none;
    color: white;
    padding: 1px 75px;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center; /* Alinha verticalmente os itens */
    justify-content: center;
    font-size: 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    align-self: center;
    margin-top: 20px; /* Empurra o botão para a parte inferior */
    display: flex; /* Enable flexbox layout */
    margin-right: -1px;


}

.card button:hover {
    background-color: #010e06
    
}

#informacao{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}

#sobre h2{
    margin-top: -350px;
    width: 1158px;
    height: 300px;
    flex-shrink: 0;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    margin-left: 85px;
    color: #000; /* Cor padrão do texto */
  .azul {
    color: #067133; /* Cor da palavra "texto" */
  }
}

#foto {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 700px;
}
#foto img {
    height: auto;
    margin-bottom: -150px;
    margin-left: -1200px;
}

#comunidade{
    padding-top: 50px;
    height: 50px;
}
#comunidade h1.titulo{
    font-size: 45px;
    font-weight: 150px;
    color: #000000;
    text-align: center;
    line-height: 45px;
    margin-top: 60px;
    margin-bottom: 80px;
}

#habilidades{
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;    
}

.cartao{
    margin: 0 30px;
    background-color: #e3e4e8;
    border-radius: 10px;
    padding: 30px;
    text-align: justify;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 250px;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    border-color: #ffffff
    }

.cartao h1{
    color: #161C2D;
    font-size: 16.336px;
    font-style: normal;
    line-height: 17px;
    font-weight: 400;
    padding-top:20px;
}

.cartao h2{
    padding-top: 25px;
}

#msg{
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #ffffff;
}

#msg xmp{
    line-height: 39px;
    font-size: 26px;
    letter-spacing: 3px;
}

#msg h2{
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
}

#contatos{
    display: flex;
    flex-direction: column;
    width: auto;
    gap: 20px;
    padding: 30px;
}

#contatos h1{
    font-weight: 700;
    font-size: 30px;
    line-height: 34px;
    color: #0a0500;
}

#contatos ul{
    display: flex;
    justify-content: space-between;
    flex-flow: column wrap;
    list-style-type: none;
    gap: 20px;
}

#contatos li{
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: pink
}

#contatos a{
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #10162F;
}

#contatos a:hover{
    text-decoration: underline;
}

#contatos img{
    Width: 27px;
    Height: 25px;
}

</style>