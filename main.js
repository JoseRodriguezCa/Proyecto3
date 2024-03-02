import { URL_API } from './src/components/URL_API'
import './style.css'
import { carta, cartaEscritorio } from './src/components/Carta/Carta'
const anchoVentana = window.innerWidth


const divApp = document.querySelector("#app");
const divContainer = document.createElement('div')
divApp.append(divContainer)
divContainer.classList = 'container'
// const section = document.createElement('section');
// const article = document.createElement('article');
// section.append(article)
// divApp.append(section)

const nose = async () => {
  const data = await URL_API()
  data.results.forEach(element => {
    if(anchoVentana >= 900){
      divContainer.innerHTML += cartaEscritorio(element)
    }else{
      divContainer.innerHTML += carta(element)
    }
    
    
    // const img = document.createElement('img');
    // article.append(img)
    // console.log(element.links.html)
    // img.src=element.urls.regular
});
}

nose()


window.onload = function() {
  const images = document.querySelectorAll('imgCarta');
  images.forEach(img => {
    img.addEventListener('load', function() {
      const parent = this.parentNode.parentNode;
      const rowHeight = parent.clientHeight / 3 - 10; // Calcula la altura de la fila
      parent.style.gridAutoRows = rowHeight + 'px'; // Aplica la altura calculada a las filas
    });
  });
}