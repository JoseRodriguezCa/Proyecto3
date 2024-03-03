import { containerBoton, crearBoton } from '../BtnHeader/BtnHeader'
import { buscador } from '../Buscador/Buscador'
import { logo } from '../Logo/Logo'
import './Header.css'


export const header = () => {
    const header = document.createElement('header')
    const divContainer = document.createElement('div')
    const b = buscador()
    const l = logo()
    const { btnContainerIzq, btnContainerDrc } = containerBoton();
    divContainer.classList = 'divContainer'
    divContainer.append(l,btnContainerIzq,b,btnContainerDrc)
    header.append(divContainer)
    return header
}