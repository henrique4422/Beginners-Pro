import buscarRepositorio from "./scripts";
import templateRepositorio from "./templateRepositorios.js";


var repositorios_container = document.getElementById('repositorios')
buscarRepositorio(usuario, listarRepositorios);

function listarRepositorios(repos) {
  repos.forEach(repos => {
    console.log(repos)
  });
}

export default function mostraUsuario(repositorio) {
  repositorio.forEach(repositorio => {
    console.log(repositorio.full_name)
    repositorios_container += templateRepositorio(repositorio)
  })
  console.log(usuario)
}