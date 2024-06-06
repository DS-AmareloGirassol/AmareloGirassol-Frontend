<template> 
  <header>
    <section>
      <h1><\UnbConnect></h1>

      <nav>
        <ul>
          <li>Início</li>
          <li>Nosso Impacto</li>
          <li>Serviços</li>
          <li>Quem Somos</li>
        </ul>
      </nav>
    </section>
  </header>
</template>

<script>
</script>

<style scoped> 
  header {
  /* cabeçalho */
  background-color: #008137;
  padding: 11px 0; 
  color: #FFFFFF;
  width: 100%;
  bottom: 0;
  left: 0;
}

nav {
  display: flex;
  margin-right: 250px;
  justify-content: end; /* Alinha os itens do nav para a direita */
  align-items: center; /* Centraliza verticalmente os itens */
}

ul {
  display: flex;
  flex-direction: row;
  gap: 50px; /* Ajusta a separação entre cada item da barra de navegação */
  list-style-type: none; /* Remove os marcadores de lista padrão */
  margin: 0;
  padding: 0;
}

</style> 
