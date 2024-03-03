import { pintarCarta } from '../Carta/Carta'
import './Buscador.css'



export const buscador = () => {
    const divBuscador = document.createElement('div')
    const buscador = document.createElement('input')
    const iBuscador = document.createElement('i')
    iBuscador.classList = 'fa-solid fa-magnifying-glass'
    buscador.type = 'text'
    buscador.placeholder = 'Encuentra lo que buscas'
    buscador.classList = 'buscador'
    divBuscador.classList = 'divBuscador'
    divBuscador.append(iBuscador,buscador)
    return divBuscador
}


export const buscar = (sumPage) => {
    const buscador = document.querySelector('.buscador');
    let valorBusqueda = ''

    buscador.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const divApp = document.querySelector('#app')
            valorBusqueda = buscador.value;
            divApp.innerHTML = ''
            console.log('Búsqueda realizada:', valorBusqueda);
            pintarCarta(valorBusqueda, sumPage);
            
        }
    });
    return valorBusqueda
}
