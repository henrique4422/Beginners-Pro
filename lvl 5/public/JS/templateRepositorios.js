const modal = document.getElementById('modal');

export default function templateRepositorio(repositorio, modal) {
  return `
    <div class="repositorios card">
    <div class="card-body">
    <h1 class="card-text">${repositorio.full_name}</h1>
        <a class="btn btn-primary" href="${repositorio.html_url}" target="_blank">
          Acessar repositorio
        </a>
        <button class="btn btn-primary" id="openModal"> 
          Mais informações
        </button>   
      </div>  

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">${repositorio.name}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Estrelas ${repositorio.stargazers_count} | Forks ${repositorio.forks_count} </p>
        <h1>${repositorio.created_at}<h1>
        <a class="btn btn-primary" href="${repositorio.html_url}" target="_blank">
          Acessar repositorio
        </a>
      <input value="${repositorio.clone_url}"
      <a href="${repositorio.clone_url}" download="${repositorio.clone_url}" >Clonar</a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  `;
}

