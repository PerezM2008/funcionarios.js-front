'use strict'
import funcionarios from './funcionarios.json' with {type:'json'}

function mostrarFuncionarios (funcionarios){

    const funcionariosContainer = document.getElementById('funcionarios')
    const cards = document.getElementById('div')

    const img = document.getElementById('img')
    img.src = `./img/${funcionarios}`
    img.classList.add('card-funcionario')

    const nome = document.getElementById('h2')

    
    const cargo = document.getElementById('p')
    


}

funcionarios.forEach(mostrarFuncionarios)

