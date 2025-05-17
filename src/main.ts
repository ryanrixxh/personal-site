import './style.css'
import Alpine from 'alpinejs'

const component = () => {
  return {
    async addComponent(component: string) {
      return await(await fetch(`components/${component}`)).text()
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
Alpine.store("content", {
  // TODO: Populate this array from JSON
  projects: [
    {
      name: 'Serverless AWS NodeJS Template',
      description: 'Template for creating serverless microservices in AWS using Node.',
      image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://github.com/aligent/serverless-aws-nodejs-service-template',
      stack: ['Typescript', 'Serverless Framework', 'Nx']
    },
    {
      name: 'Twitch Timestamper',
      description: 'A cross platform desktop application for easily saving timestamps whilst livestreaming.',
      image: 'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://github.com/ryanrixxh/timestamper',
      stack: ['Rust', 'Typescript']
    },
    {
      name: 'News Aggregation Server',
      description: 'ATOM Feed Database, Aggregation Server and Feed Converter',
      image: 'https://plus.unsplash.com/premium_photo-1675334896026-b2412c3ca77f?q=80&w=2723&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      url: 'https://github.com/ryanrixxh/Backend-Aggregation-Server',
      stack: ['Java']
    }
  ]
})

document.addEventListener('alpine:init', () => {
  Alpine.data("component", component),
  Alpine.data("toggle", toggle)
})


Alpine.start()
