// import mostraUsuario from "./busca-repositorio.js";

import templateRepositorio from "./templateRepositorios.js";

var usuario = document.getElementById('user');
var botao = document.getElementById('procurar');


var repositorios_container = document.getElementById('repositorios')

var myHeaders = new Headers();
var myInit = {
  method: 'GET',
  headers: myHeaders,
};

export default async function buscarRepositorio(usuario, sucesso) {
  var url = `https://api.github.com/users/${usuario}/repos`;

  try {
    const dados = await fetch(url, myInit)
    const repositorioDados = await dados.json()
      .then(repositorioDados => sucesso(repositorioDados))
      .finally(function () {

        var openModal = document.getElementById('openModal');
        openModal.addEventListener('click', (e) => {
          $('#exampleModal').modal('show')

        })

      })
  } catch (erro) {
    console.log(`Ocorreu um erro: ${erro.message}`);
  }

}

function mostraRepositorio(repositorio) {
  console.log(repositorio)
  repositorios_container.innerHTML = '';
  repositorio.forEach(repositorio => {
    repositorios_container.innerHTML += templateRepositorio(repositorio);
  })
}


botao.addEventListener('click', (e) => {
  usuario = usuario.value
  console.log(usuario)
  e.preventDefault();
  buscarRepositorio(usuario, mostraRepositorio);

})




