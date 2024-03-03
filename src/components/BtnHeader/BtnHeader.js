import './BtnHeader.css'

export const crearBoton = (texto,clase) => {
    const boton = document.createElement('button');
    boton.textContent = texto;
    boton.classList.add('btnHeader');
    boton.classList.add('fa-solid')
    boton.classList.add(clase)
    return boton;
  }