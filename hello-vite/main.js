import './style.scss'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import styles from './example.module.css'

console.log(styles)

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 class="${styles.title}">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more but don't go crazy!
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
