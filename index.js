import app from './app.js'
import rutas from './router/rutas.js'

document.addEventListener('DOMContentLoaded', () => {
  app()  
})

window.addEventListener('hashchange', () => {
  rutas()
})