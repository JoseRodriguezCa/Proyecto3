import './style.css'
import { header } from './src/components/Header/Header';
import { pintarCarta } from './src/components/Carta/Carta'
import { buscar } from './src/components/Buscador/Buscador';
import { URL_API } from './src/components/URL_API';
import { handleZoom } from './src/components/ClicksCarta/ClicksCarta';

let solicitud = false;
let sumPage = 1;
const h = header();
document.body.append(h);
const buscador = document.querySelector('.buscador');
buscar(sumPage);

const terminoBusquedaPredeterminado = 'landscape';
URL_API(terminoBusquedaPredeterminado, sumPage).then((data) => {
pintarCarta(data);
})

const cargarContenido = async () => {
if (!solicitud) {
solicitud = true;
sumPage++;
if(!buscador.value){
const data = await URL_API(terminoBusquedaPredeterminado, sumPage)
pintarCarta(data);
solicitud = false;
}else{
    console.log("estoy aca",buscador.value)
const data = await URL_API(buscador.value, sumPage);
pintarCarta(data);
solicitud = false;
}
}
}

const handleScroll = () => {
if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
cargarContenido();
handleZoom()
}
}

document.addEventListener('scroll', handleScroll);





