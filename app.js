'use strict'

import funcionarios from './funcionarios.json' with {type:'json'}

function mostrarFuncionarios (funcionario){

    const funcionariosContainer = document.getElementById('funcionarios')
    const cards = document.createElement('div')

    const img = document.createElement('img')
    img.src = `./img/${funcionario.img}`
    img.alt = funcionario.nome
    img.classList.add('funcionarios')

    const nome = document.createElement('h2')
    nome.textContent = funcionario.nome

    
    const cargo = document.createElement('p')
    cargo.textContent = funcionario.cargo

    cards.appendChild(img)
    nome.appendChild(nome)
    cargo.appendChild(cargo)
    funcionariosContainer.appendChild(cards)
}


funcionarios.forEach(mostrarFuncionarios)
console.log(funcionarios)

