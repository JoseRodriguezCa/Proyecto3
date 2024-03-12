export const handleHeart = () => {
  const heartButtons = document.querySelectorAll(".fa-heart");
  heartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      button.classList.toggle("active");
    });
  });
};
export const donwloadImage = () => {
    const anchoVentana = window.innerWidth
    let downloadButtons;
    if(anchoVentana >= 900){
        downloadButtons = document.querySelectorAll("#down-arrow");
      }else{
        downloadButtons = document.querySelectorAll("#download");
      }
  downloadButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      let downloadURL = button.dataset.downloadUrl;
      const aDownload = document.createElement("a");
      aDownload.href = downloadURL;
      aDownload.click();
    });
  });
};

let cartaConZoom = null;

const handleOverlayClick = (event) => {
    const cartaActual = event.currentTarget.closest('.card');

    if (cartaConZoom !== cartaActual) {
        if (cartaConZoom) {
            cartaConZoom.classList.remove('zoomed');
        }
        cartaConZoom = cartaActual;
        cartaConZoom.classList.add('zoomed');
    } else {
        cartaConZoom.classList.remove('zoomed');
        cartaConZoom = null;
    }
};

export const handleZoom = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const overlay = card.querySelector('.overlay');
        overlay.addEventListener('click', handleOverlayClick);
    });
};

export const removeZoom = () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.classList.contains('zoomed')) {
            card.classList.remove('zoomed');
        }
    });
}

document.addEventListener('scroll', removeZoom);