import './style.css'
import Alpine from 'alpinejs'

const component = () => {
  return {
    async addComponent(address: string) {
      return await(await fetch(address)).text()
    }
  }
}

const toggle = () => {
  return {
    about: false,
    experience: false,
    projects: false,
    contact: false,

    toggle(section: string) {
      switch(section) {
        case 'about':
          this.unsetAll()
          this.about = true
          break
        case 'experience':
          this.unsetAll()
          this.experience = true
          break
        case 'projects':
          this.unsetAll()
          this.projects = true
          break
        case 'contact':
          this.unsetAll()
          this.contact = true
          break
        default:
          console.log('nothing')
      }
    },

    unsetAll() {
      this.about = false
      this.experience = false
      this.projects = false
      this.contact = false
    }
  }
}

window.Alpine = Alpine

Alpine.store("show_test", false)
Alpine.store("hello", "Hello World from Alpine!")

document.addEventListener('alpine:init', () => {
  Alpine.data("component", component),
  Alpine.data("toggle", toggle)
})


Alpine.start()
