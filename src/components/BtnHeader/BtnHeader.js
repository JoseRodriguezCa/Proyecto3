import './BtnHeader.css'

export const crearBoton = (texto) => {
    const boton = document.createElement('button');
    const aBoton = document.createElement('a')
  aBoton.href = "/"
    boton.textContent = texto;
    boton.classList.add('btnHeader');
    aBoton.append(boton)
    return aBoton;
  }



export const containerBoton = () => {
  const btnContainerIzq = document.createElement('div')
  const btnIzquierda1 = crearBoton('Inicio')
  const btnIzquierda2 = crearBoton('Explorar')
  const btnContainerDrc = document.createElement('div')
  const btnDerecha1 = crearBoton('Iniciar Sesion')
  const btnDerecha2 = crearBoton('Registrarse')
  btnContainerIzq.classList = 'btnContainerIzq'
  btnContainerDrc.classList = 'btnContainerDrc'
  btnContainerDrc.append(btnDerecha1,btnDerecha2)
  btnContainerIzq.append(btnIzquierda1,btnIzquierda2)
  return {
    btnContainerIzq: btnContainerIzq,
    btnContainerDrc: btnContainerDrc
  }

}