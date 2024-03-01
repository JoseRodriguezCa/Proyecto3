

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
        <button class="button fa-solid fa-heart"></button>
            <button class="button ">Descargar</button>
        </div>
    </div>`


}