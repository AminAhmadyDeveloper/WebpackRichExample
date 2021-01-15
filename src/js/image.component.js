/**
 * * Import A Sass Style Sheet
 * * This Is Image Box Style
 * ! This Will Will Be Loaded By Web Pack Loaders
 * ! And As You Know Import Is Es6 Syntax So Babel Loader Comes Up Here
 */
import './../sass/image-style.sass'

/**
 * * Making A Class
 * ! This Will Translate To Browser Known JS Language (COMMON JS) By Babel
 */

class ImageComponent {
    createImageTag(imageAlt = 'My Image', imageUrl) {
        const image = document.createElement('img')
        image.alt = imageAlt
        image.classList.add('image')
        image.src = imageUrl

        return image
    }

    render(imageAlt = 'My Image', imageUrl) {
        const element = document.createElement('div')
        element.classList.add('image-box')

        element.appendChild(this.createImageTag(imageAlt, imageUrl))

        return element
    }
}

/**
 * ! Also Export Is A (Es6) Syntax To This Will Be Translated By Babel Too
 */
export default new ImageComponent()
