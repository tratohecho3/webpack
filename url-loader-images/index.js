import {firstMessage, delayedMessage} from './message.js'
import img from './uf.jpg'
import './estilos.css'
document.write(firstMessage)

const imagen = document.createElement('img')
imagen.setAttribute('src', img)
document.body.append(imagen)
delayedMessage()
console.log('hello jajaja2')