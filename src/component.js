/**
 * * Imports First
 * ! Import Is Es6 Syntax So Webpack Comes Up Here
 */

import './sass/main.sass'

import ImageComponent from './js/image.component'
import ParagraphComponent from './js/paragraph.component'
import webpackLogo from './images/webpack.png'

/**
 * * Add Elements Imported To Out Index.html Using Dom
 * ? NOW WE SHOULD LOAD JS IN INDEX.HTML FILE WRITE?
 * * Leave It To Webpack!!
 */

const container = document.querySelector('.center-box')

container.appendChild(ImageComponent.render('Webpack Logo', webpackLogo))
container.appendChild(
    ParagraphComponent.render('Welcome To The Webpacks Big World !')
)
container
    .appendChild(ParagraphComponent.render('به دنیا بزرگِ وب پک خوش آمدید !'))
    .classList.add('rtl-block')
