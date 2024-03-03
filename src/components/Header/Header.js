import { crearBoton } from '../BtnHeader/BtnHeader'
import './Header.css'


export const header = () => {
    const divContainer = document.createElement('div')
    const logoContainer = document.createElement('div')
    const imgLogo = document.createElement('img')
    imgLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
    const btnContainerIzq = document.createElement('div')
    const btnIzquierda1 = crearBoton('Inicio')
    const btnIzquierda2 = crearBoton('Explorar')
    const btnIzquierda3 = crearBoton('Crear')
    const divBuscador = document.createElement('div')
    const buscador = document.createElement('input')
    const btnContainerDrc = document.createElement('div')
    const btnDerecha1 = crearBoton('', "fa-bell")
    const btnDerecha2 = crearBoton('', "fa-comment-dots")
    const btnDerecha3 = crearBoton('Usuario')
    buscador.type = 'text'
    buscador.placeholder = 'Buscar'
    buscador.classList = 'buscador'
    btnContainerIzq.classList = 'btnContainerIzq'
    btnContainerDrc.classList = 'btnContainerDrc'
    logoContainer.classList = 'logo'
    divContainer.classList = 'divContainer'
    divBuscador.classList = 'divBuscador'
    btnContainerDrc.append(btnDerecha1,btnDerecha2,btnDerecha3)
    btnContainerIzq.append(btnIzquierda1,btnIzquierda2,btnIzquierda3)
    logoContainer.append(imgLogo)
    divBuscador.append(buscador)
    divContainer.append(logoContainer,btnContainerIzq,divBuscador,btnContainerDrc)
    return divContainer
}