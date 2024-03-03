import './style.css'
import { header } from './src/components/Header/Header';
import { pintarCarta } from './src/components/Carta/Carta'
import { buscar } from './src/components/Buscador/Buscador';


let sumPage = 1;
const h = header()
document.body.append(h)
const buscador = document.querySelector('.buscador')
const busca = buscar(sumPage)
const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        sumPage ++;
        pintarCarta(sumPage)
        console.log(buscador.value)
    }
}
window.addEventListener('scroll', handleScroll);
const carta = await pintarCarta(sumPage)
document.body.append(carta);








