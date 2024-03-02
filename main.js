import { URL_API } from './src/components/URL_API'
import './style.css'
import { carta } from './src/components/Carta/Carta'



const divApp = document.querySelector("#app");
// const section = document.createElement('section');
// const article = document.createElement('article');
// section.append(article)
// divApp.append(section)

const nose = async () => {
  const data = await URL_API()
  data.results.forEach(element => {
    divApp.innerHTML += carta(element)
    
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