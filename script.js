let listaCarros = [
    {
        "nome": "Aspark Owl",
        "img": "./img/Aspark Owl.jpg",
        "descricao": "O carro na imagem é o Aspark Owl, um hipercarro elétrico japonês. Ele é conhecido por seu design futurista e por ser um dos carros elétricos mais rápidos do mundo. O Owl se destaca pelo visual aerodinâmico e minimalista, com linhas suaves e uma cabine em formato de bolha. Além disso, ele é famoso por sua impressionante aceleração, indo de 0 a 100 km/h em menos de 2 segundos."
    },

    {
        "nome": "Farnova Othello",
        "img": "./img/Farnova Othello.jpg",
        "descricao": "O Farnova Othello é produzido pela empresa chinesa Farnova Automotive e foi projetado para competir no segmento de hipercarros elétricos, focando em alta performance e velocidade. Ele é conhecido por sua aceleração rápida e tecnologia avançada."
    },

    {
        "nome": "Apollo-IE",
        "img": "./img/Apollo-IE.jpg",
        "descricao": "O Apollo Intensa Emozione (IE) é um hipercarro de produção limitada, desenhado para proporcionar uma experiência de condução pura e intensa. Com um design que parece saído de um carro de corrida, ele combina potência brutal com aerodinâmica de alta eficiência."
    },

    {
        "nome": "Xenon",
        "img": "./img/Xenon.jpg",
        "descricao": "O Xenon é um carro que combina a tradição e a inovação, oferecendo uma experiência de condução única e emocionante. Ele é um carro que pode ser facilmente reconhecido por qualquer pessoa que tenha um gosto por carros de luxo e design futurista."
    },

    {
        "nome": "TAURO 2050",
        "img": "./img/TAURO-2050.jpg",
        "descricao": "Tauro 2050 é uma era onde a tecnologia e a inteligência artificial atingiram níveis de desenvolvimento sem precedentes, transformando todos os aspectos da vida humana. As cidades estão completamente automatizadas, operando de forma autônoma com inteligência artificial e robôs que gerenciam os sistemas de transporte, saúde, segurança e energia sustentável."
    },

    {
        "nome": "Tauro EOD",
        "img": "./img/Tauro-EOD.jpg",
        "descricao": "Tauro EOD é uma unidade ou empresa especializada em tecnologias de desativação de explosivos, utilizando robótica avançada, inteligência artificial e sistemas autônomos. Focada em missões de alta precisão, a Tauro EOD oferece soluções de última geração para forças militares, policiais e indústrias de mineração. Com equipamentos resistentes e de alta performance, suas máquinas e dispositivos são capazes de operar em condições extremas, protegendo vidas e minimizando os riscos associados ao manejo de artefatos explosivos."
    }

];


listaCarros.map((carro, posicao) => {
    let cardCarro = document.getElementById("cards");
    cardCarro.innerHTML += `
     <div class="col-md-4 d-flex justify-content-center mb-5">
        <div class="card" style="width: 18rem;">
            <img src="${carro.img}" class="card-img-top" alt="${carro.nome}">
            <div class="card-body">
                <h5 class="card-title">${carro.nome}</h5>
                <a href="#" class="btn btn-secondary" onclick="zoomImg(${posicao})"><i class="bi bi-zoom-in"></i></a>
            </div>
        </div>
    </div>
    
    `
})

function zoomImg(posicao){
    let carroSelecionado = listaCarros[posicao];

    document.getElementById("nomeCarro").innerHTML = carroSelecionado.nome;
    document.getElementById("descricaoCarro").innerHTML = carroSelecionado.descricao;
    document.getElementById("imgModal").src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTemaSite() {
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }else{
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterarTemaSite").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    }
}