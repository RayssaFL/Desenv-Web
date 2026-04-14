import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
document.querySelector("#app").innerHTML = /*html*/ `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#navbarNav"><i class="bi bi-cpu"></i> Meu Portfólio</a>

    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#intro"><i class="bi bi-house-door"></i> Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projetos"><i class="bi bi-folder"></i> Projetos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sobre"><i class="bi bi-file-person"></i> Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#rodape"><i class="bi bi-telephone"></i> Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Seção de Introdução -->
<section id="intro" class="intro text-white py-5" style="background: url('https://t3.ftcdn.net/jpg/04/25/65/24/360_F_425652429_A311W0NFAGrxzsTtmOQEkczAl3d3GlYG.jpg') center/cover no-repeat;">
  <div class="container">
    <h1>Bem-vindo ao Meu Portfólio</h1>
    <p>Sou técnica em Redes de Computadores pelo IFCE e, atualmente, graduanda na Universidade de Fortaleza (Unifor) em Ciência da Computação, possuo conhecimentos em Linguagens de Programação como Java, Javascript e Python, assim como possuo conhecimentos em Banco de Dados com SQL, utilizando o MySQL. Estou sempre buscando aprender coisas novas, atualmente estou aprofundando meus estudos na área de Dados. Explore meus projetos e trabalhos.</p>
  </div>
</section>

<!-- Seção de Projetos -->
<div id="projetos" class="container my-5">
  <h2 class="text-center mb-4">Meus Projetos</h2>

  <div class="row">
    <div class="col-md-4 d-flex">
      <div class="card h-500">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6UKnGu5AFXPFdTUdJBmUy35cUTmKZWZhdQ&s" class="card-img-top" alt="Passagem para ilustrar o sistema de gerenciamento de viagens">
        <div class="card-body shadow">
          <h5 class="card-title">Sistema de Gestão de Viagens</h5>
          <p class="card-text">
            No desenvolvimento deste projeto da Agência de Viagens, utilizei MySQL para modelar e gerenciar o banco de dados, garantindo o armazenamento das informações de clientes, destinos e reservas de forma estruturada. A integração foi feita em Python, que permitiu criar funcionalidades para consultas, cadastros e manipulação dos dados da agência.
          </p>
          <a href="https://github.com/RayssaFL/Agencia-de-Viagens" class="btn btn-primary">Saiba Mais</a>
        </div>
      </div>
    </div>

    <div class="col-md-4 d-flex">
      <div class="card h-500">
        <img src="https://pt.smartsheet.com/sites/default/files/ic-line-charts-excel-two-line-example.png"
          class="card-img-top" alt="Grafico de ocorrencias de CVLI mensais">
        <div class="card-body shadow">
          <h5 class="card-title">CVLI Ceará – Análise Estatística Descritiva (2024–2025)</h5>
          <p class="card-text">
            Análise exploratória e descritiva de dados sobre Crimes Violentos Intencionais com Lesões Letais (CVIL) no Ceará, Brasil, utilizando o software R para análise estatística e visualização de dados. 
          </p>
          <a href="https://github.com/RayssaFL/cvli-ceara-descriptive-analysis" class="btn btn-primary">Saiba Mais</a>
        </div>
      </div>
    </div>

    <div class="col-md-4 d-flex">
      <div class="card h-500">
        <img src="https://thumbs.dreamstime.com/b/um-desenho-vetorial-simples-preto-e-branco-de-uma-coruja-fofa-s%C3%A1bia-com-%C3%B3culos-ler-livro-aberto-419557586.jpg"
          class="card-img-top" alt="Logo do aplicativo scientia">
        <div class="card-body shadow">
          <h5 class="card-title">Scientia</h5>
          <p class="card-text">
            Aplicativo para gestão e controle de empréstimos em uma biblioteca.
          </p>
          <a href="https://github.com/RayssaFL/ScientiaBack" class="btn btn-primary">Saiba Mais</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!--Sobre-->
<section id="sobre" class="sobre text-green py-5" style="background: url('https://www.nintendo-insider.com/wp-content/uploads/2016/09/master-sword-breath-of-the-wild-image.jpg') center/cover no-repeat;">
  <div class="container">
  <h1>Sobre</h1>
    <div class="card">
      <div class="card-body">
      Além da vida acadêmica, eu sou uma pessoa bastante competitiva, gosto de jogar The Legend of Zelda, Animal Crossing, Stardew Valley e Gears of War no Nintendo Switch e Steam Deck. Tenho conhecimento B2 em inglês e pretendo aprender francês, italiano, alemão e espanhol. Além disso, gosto bastante de ir para a fazenda dos meus pais para pescar, cuidar dos animais e plantar.
      </div>
    </div>
  </div>
</section>

<!-- Rodapé -->
<footer id="rodape" class="bg-dark text-white text-center py-4">
  <div class="container">
    <p>&copy; 2024 Portfólio de Rayssa. Todos os direitos reservados.</p>
    <p>
      Entre em contato:
      <a href="mailto:exemplo@email.com" class="text-white">
        rayssafl@edu.unifor.br
      </a>
    </p>

    <div class="mt-2">
      <a href="https://github.com/RayssaFL" class="text-white mx-2">GitHub</a>
    </div>
  </div>
</footer>
`;
