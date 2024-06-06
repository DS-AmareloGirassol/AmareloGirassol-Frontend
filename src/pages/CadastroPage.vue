<template>
<body>
    <div id="container">
        <div class="right"><h1>UnB<span>Connect</span></h1></div>
        <div class="left">
            <header class="title">Crie sua conta</header>
            <form action="">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email">
                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="senha">
                <label for="confirme-senha">Confirme sua senha:</label>
                <input type="password" id="confirme-senha" name="confirme-senha">
                <label for="semestre">Semestre:</label>
                <select id="semestre" name="semestre" required>
                    <option value="" disabled selected>Selecione um semestre</option>
                    <option value="1">1º Semestre</option>
                    <option value="2">2º Semestre</option>
                    <option value="3">3º Semestre</option>
                    <option value="4">4º Semestre</option>
                    <option value="5">5º Semestre</option>
                    <option value="6">6º Semestre</option>
                    <option value="7">7º Semestre</option>
                    <option value="8">8º Semestre</option>
                    <option value="9">9º Semestre</option>
                    <option value="10">10º Semestre</option>
                </select>
                <button type="submit">Cadastrar</button>
            </form>
            <div id="cadastro"><p>Já possui uma conta? <a href="#">Faça Login</a></p></div>
        </div>
    </div>
</body>
</template>

<script>
export default {
  name: 'RegisterForm'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');


  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    font-size: 14px;
    font-family: 'Jost', sans-serif;
    background-color: #f0f0f0;
}

#container {
  width: 900px;
  display: flex;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.title {
  text-align: center;
  font-family: 'Inter', sans-serif;    
}
.right, .left {
  margin: 10px;
  flex: 1;
}
.right {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px; /* Adiciona a margem à esquerda */
}
.right h1 {
  font-size: 40px;
  color: #001f4d;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.right span {
  color: #28a745;
  font-family: "Plus Jakarta Sans", sans-serif;
}
.left {
  background-color: #001f4d;
  border-radius: 8px;
  padding: 20px;
  color: #fff;
}
.left header {
  font-size: 20px;
  margin-bottom: 10px;
}
.left form {
  display: flex;
  flex-direction: column;
}
.left label {
  margin: 5px 0 2px;
}
.left input, .left select, .left button {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ffffff;
  border-radius: 4px;
}
.left input, .left select {
  background-color: #fff;
  color: #000;

}


.left button {
  background-color: #19bd34;
  font-weight: bold;
  color: #ffffff;
  border: none;
  cursor: pointer;

}
.left button:hover {
  background-color: rgb(22, 216, 55);
}
#cadastro {
  display: flex;
  justify-content: center;
}
#cadastro a {
  color: #19bd34;
  text-decoration: none;
}
#cadastro a:hover {
  text-decoration: underline;
}

</style>
