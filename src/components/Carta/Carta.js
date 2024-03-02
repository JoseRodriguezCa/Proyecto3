import './carta.css'

export const carta = (element) => {
        
    return `<div class="container">
            
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