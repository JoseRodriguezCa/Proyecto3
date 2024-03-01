import { URL_API } from './src/components/URL_API'
import './style.css'



const divApp = document.querySelector("#app");
const section = document.createElement('section');
const article = document.createElement('article');

section.append(article)
divApp.append(section)

const nose = async () => {
  const data = await URL_API()
  data.results.forEach(element => {
    const img = document.createElement('img');
  article.append(img)
    console.log(element.links.html)
    img.src=element.urls.regular
});
}

nose()