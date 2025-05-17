import './style.css'
import Alpine from 'alpinejs'

const component = () => {
  return {
    async addComponent(address: string) {
      return await(await fetch(address)).text()
    }
  }
}

window.Alpine = Alpine

Alpine.store("show_test", false)
Alpine.store("hello", "Hello World from Alpine!")

document.addEventListener('alpine:init', () => {
  Alpine.data("component", component)
})


Alpine.start()
