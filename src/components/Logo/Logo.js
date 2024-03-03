import './Logo.css'



export const logo = () => {
    const logoContainer = document.createElement('div')
    const imgLogo = document.createElement('img')
    const aLogo = document.createElement('a')
    aLogo.href = '/'
    imgLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png'
    logoContainer.classList = 'logo'
    aLogo.append(imgLogo)
    logoContainer.append(aLogo)
    return logoContainer
}