/**
 * * Making A Class
 * ! This Will Translate To Browser Known JS Language (COMMON JS) By Babel
 */

class ParagraphComponent {
    render(textValue = 'Text') {
        const element = document.createElement('p')
        element.textContent = textValue
        return element
    }
}
/**
 * ! Also Export Is A (Es6) Syntax To This Will Be Translated By Babel Too
 */
export default new ParagraphComponent()
