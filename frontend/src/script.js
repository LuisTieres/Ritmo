const estados = [
    "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MG","MS",
    "MT","PA","PB","PE","PI","PR","RJ","RN","RO","RR","RS","SC",
    "SE","SP","TO"
    ];

const mes = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho",
    "Agosto","Setembro","Outubro","Novembro","Dezembro"
    ];

const distancia = [
    "5K","10K","15K","21K","42K","Ultramaratona"
    ];

const modalidade = [
    "Corrida de Rua","Corrida de Montanha","Trail Run",
    "Revezamento","Corrida de Aventura"
    ];

const races = [
  { title: "Maratona Internacional de São Paulo 2026", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop", local: "São Paulo, SP", data: "15 de Março de 2026", distancias: ["5K", "10K", "21K", "42K"], modalidade: "Maratona", preco: "R$ 89,90" },
  { title: "Corrida Trail do Pão de Açúcar", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop", local: "Rio de Janeiro, RJ", data: "22 de Abril de 2026", distancias: ["10K", "21K"], modalidade: "Trilha", preco: "R$ 120,00" },
  { title: "Corrida Trail do Pão de Açúcar", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop", local: "Rio de Janeiro, RJ", data: "22 de Abril de 2026", distancias: ["10K", "21K"], modalidade: "Trilha", preco: "R$ 120,00" },
  { title: "Corrida Trail do Pão de Açúcar", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop", local: "Rio de Janeiro, RJ", data: "22 de Abril de 2026", distancias: ["10K", "21K"], modalidade: "Trilha", preco: "R$ 120,00" },
  { title: "Corrida Trail do Pão de Açúcar", image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=800&h=400&fit=crop", local: "Rio de Janeiro, RJ", data: "22 de Abril de 2026", distancias: ["10K", "21K"], modalidade: "Trilha", preco: "R$ 120,00" },

];

function carregaCombox(lista, tipo) {
    const select = document.getElementById(tipo);

    lista.forEach(uf => {
        const option = document.createElement("option");
        option.value = uf;
        option.textContent = uf;
        select.appendChild(option);
    });
}

function criarCorridas(race){;

    const container = document.getElementById("races-container");
    container.innerHTML = ""; 

    race.forEach(corrida => {

    const frame = document.createElement("div");
    frame.classList.add("frame-races");

    const img = document.createElement("img");
    img.src = corrida.image;
    img.alt = corrida.title;
    img.classList.add("race-image");

    const modalidade = document.createElement("span");
    modalidade.textContent = corrida.modalidade;
    modalidade.classList.add("modalidade-race");

    const containerImagem = document.createElement("div");
    containerImagem.classList.add("image-container");

    containerImagem.appendChild(img);
    containerImagem.appendChild(modalidade);

    const titulo = document.createElement("h2");
    titulo.textContent = corrida.title;
    titulo.classList.add("titulo-race");

    const local = document.createElement("p");
    local.textContent = corrida.local;
    local.classList.add("local-race");

    const data = document.createElement("p");
    data.textContent = corrida.data;
    data.classList.add("data-race");  
    
    const distancialinha = document.createElement("div");
    distancialinha.classList.add("distancia-linha-race");

    corrida.distancias.forEach(distancia => {
        const distanciaElem = document.createElement("p");
        distanciaElem.textContent = distancia;
        distanciaElem.classList.add("distancias-race");
        distancialinha.appendChild(distanciaElem);
    });

    const container_vercorrida = document.createElement("div");
    container_vercorrida.classList.add("container-ver-corrida");

    const container_preco = document.createElement("div");
    container_preco.classList.add("container-preco-race");
    
    const text_preco = document.createElement("p");
    text_preco.classList.add("text-preco-race");
    text_preco.textContent  = "A partir de";
    container_preco.appendChild(text_preco);

    const preco = document.createElement("p");
    preco.classList.add("preco-race");
    preco.textContent  = corrida.preco;
    container_preco.appendChild(preco);

    container_vercorrida.appendChild(container_preco);

    const botao_vercorrida = document.createElement("button");
    botao_vercorrida.classList.add("botao-ver-corrida");
    botao_vercorrida.textContent = "Ver Corrida";
    container_vercorrida.appendChild(botao_vercorrida);

    frame.appendChild(containerImagem);
    frame.appendChild(titulo);
    frame.appendChild(local);
    frame.appendChild(data);
    frame.appendChild(distancialinha);
    frame.appendChild(container_vercorrida);


    container.appendChild(frame);

    frame.style.cursor = "pointer";
    frame.onclick = function() {
      window.location.href = "race.html";
    };
  });
}

function irParaOutraPagina(){
      window.location.href = 'race.html';
}


window.onload = carregaCombox(estados, "estado");
window.onload = carregaCombox(mes, "mes");
window.onload = carregaCombox(distancia, "distancia");
window.onload = carregaCombox(modalidade, "modalidade");

window.onload = criarCorridas(races);