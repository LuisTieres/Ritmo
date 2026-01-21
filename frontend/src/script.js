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
  { title: "Maratona Internacional de São Paulo 2026", image: "assets/saopaulo.jfif", local: "São Paulo, SP", data: "15 de Março de 2026", distancias: ["5K", "10K", "21K", "42K"], modalidade: "Maratona" },
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

    

    frame.appendChild(containerImagem);
    frame.appendChild(titulo);
    frame.appendChild(local);
    frame.appendChild(data);
    frame.appendChild(distancialinha);

    // Adiciona o frame ao container
    container.appendChild(frame);

    // Opcional: adiciona click para ir pra página da corrida
    frame.style.cursor = "pointer";
    frame.onclick = function() {
      window.location.href = "race.html"; // ou outro link específico
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