let items = [
    {
        image: "./assets/img/actions/animewoman.jpg",
        name: "Anime Girl",
        price: 35.00,
        type: "actions",

    },
    {
        image: "./assets/img/actions/dragonballpersonagem.jpg",
        name: "Dragon Ball",
        price: 50.00,
        type: "actions",

    },
    {
        image: "./assets/img/actions/starwarspersonagem.jpg",
        name: "Star Wars",
        price: 20.00,
        type: "actions",

    },
    {
        image: "./assets/img/painting/clock.jpg",
        name: "Clock",
        price: 15.00,
        type: "painting",

    },
    {
        image: "./assets/img/painting/gamepad.jpg",
        name: "GamePad",
        price: 18.00,
        type: "painting",

    },
    {
        image: "./assets/img/painting/personagem.jpg",
        name: "C3PO",
        price: 22.00,
        type: "painting",

    },
]

let listActions = []
let listPaintings = []

function separeteItems(list){
    for (let i = 0; i < list.length; i++) {
        if(list[i].type === "actions"){
            listActions.push(list[i])
        } else if (list[i].type === "painting"){
            listPaintings.push(list[i])
        }
    }
}
separeteItems(items)
// console.log(listActions, listPaintings)

let secaoPainting = document.getElementsByClassName("paintingCardsRow")[0]

let secaoAction = document.getElementsByClassName("actionCardsRow")[0]

for (let i = 0; i < listActions.length; i++) {
    let elementoLista = document.createElement('li')
    elementoLista.classList.add("cardContainer")


    let quadroImagem = document.createElement('div')
    quadroImagem.classList.add("imageContainer")
    let imagem = document.createElement('img')
    imagem.classList.add("cardImage")
    imagem.setAttribute("src", `${listActions[i].image}`)
    imagem.setAttribute("alt", `Imagem: ${listActions[i].name}`)
    quadroImagem.appendChild(imagem)
    elementoLista.appendChild(quadroImagem)

    let nome = document.createElement('h3')
    nome.innerText = `${listActions[i].name}`
    elementoLista.appendChild(nome)
    
    let preco = document.createElement('h4')
    preco.innerText = `R$${listActions[i].price},00`
    elementoLista.appendChild(preco)

    secaoAction.appendChild(elementoLista)
}

for (let i = 0; i < listPaintings.length; i++) {
    let elementoLista = document.createElement('li')
    elementoLista.classList.add("cardContainer")


    let quadroImagem = document.createElement('div')
    quadroImagem.classList.add("imageContainer")
    let imagem = document.createElement('img')
    imagem.classList.add("cardImage")
    imagem.setAttribute("src", `${listPaintings[i].image}`)
    imagem.setAttribute("alt", `Imagem: ${listPaintings[i].name}`)
    quadroImagem.appendChild(imagem)
    elementoLista.appendChild(quadroImagem)

    let nome = document.createElement('h3')
    nome.innerText = `${listPaintings[i].name}`
    elementoLista.appendChild(nome)
    
    let preco = document.createElement('h4')
    preco.innerText = `R$${listPaintings[i].price},00`
    elementoLista.appendChild(preco)

    secaoPainting.appendChild(elementoLista)
}