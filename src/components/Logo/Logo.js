import './Logo.css'



export const logo = () => {
    const logoContainer = document.createElement('div')
    const imgLogo = document.createElement('img')
    imgLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
    logoContainer.classList = 'logo'
    logoContainer.append(imgLogo)
    return logoContainer
}