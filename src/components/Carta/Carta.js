import { URL_API } from '../URL_API'
import './carta.css'

export const carta = (element) => {
        
    return `<div class="carta">
            
        <div class="user-name">
        <img src="${element.user.profile_image.large}" alt="Profile Picture" class="profile-img">
        <p>${element.user.name}</p>
        </div>
        
        <div class="image-container">
            <img class="imgCarta" src=${element.urls.regular} alt="Imagen Subida">
        </div>

        <div class="button-container">
            <div class="add-container">
                <button id="heartButton" class="button fa-solid fa-heart"></button>
                <button id="add-button" class="button fa-solid fa-plus"></button>
            </div>
            
            <div class="button-download">
                <button id="download" class="button">Descargar</button>
                <button id="down-arrow" class="button fa-solid fa-chevron-down"></button>
            </div>
        </div>
    </div>`


}


export const cartaEscritorio =  (element) => {
    return `    <div class="card">
    <img src="${element.urls.regular}" alt="Imagen" class="card-image">
    <div class="overlay">
        <div class="up-buttons">
            <button id="heartButton" class="button fa-solid fa-heart"></button>
            <button id="add-button" class="button fa-solid fa-plus"></button>
        </div>
      <div class="profile-info">
        <div class="profile-details">
        <img src="${element.user.profile_image.large}" alt="Perfil" class="profile-image">
        <p class="profile-name">${element.user.name}</p>
        </div>
        <button id="down-arrow" class="button fa-solid fa-chevron-down"></button>
      </div>
    </div>
  </div>
    `
}


export const pintarCarta = async (data) => {
    const anchoVentana = window.innerWidth
    const divApp = document.querySelector("#app");
    const divContainer = document.createElement('div')
    divApp.append(divContainer)
    divContainer.classList = 'container'
      data.results.forEach(element => {
        if(anchoVentana >= 900){
          divContainer.innerHTML += cartaEscritorio(element)
        }else{
          divContainer.innerHTML += carta(element)
        }
        const heartButtons = document.querySelectorAll('.fa-heart');
        heartButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });

    });
      return divApp
    }

