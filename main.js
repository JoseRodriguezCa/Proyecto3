import './style.css'
import { header } from './src/components/Header/Header';
import { pintarCarta } from './src/components/Carta/Carta'
import { buscar } from './src/components/Buscador/Buscador';

let solicitud = false;
let sumPage = 1;
const h = header();
document.body.append(h);
const buscador = document.querySelector('.buscador');
buscar(sumPage);

const terminoBusquedaPredeterminado = 'landscape';
pintarCarta(terminoBusquedaPredeterminado,sumPage);

const cargarContenido = () => {
    if (!solicitud && (window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        sumPage++;
        if(!buscador.value){
            pintarCarta(terminoBusquedaPredeterminado,sumPage);
        }else{
            pintarCarta(buscador.value, sumPage);
            console.log(buscador.value);
            solicitud = true;
        }
    }
}

const handleScroll = () => {
    cargarContenido();
    setTimeout(() => {
        solicitud = false;
    }, 2000);
}

window.addEventListener('scroll', handleScroll);







