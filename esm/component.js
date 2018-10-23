import { Component, Template, Attribute } from '@scoutgg/widgets'
import { getTagName } from '@scoutgg/widgets/cjs/decorators/component'
import { routes } from './decorator'
import page from 'page'

@Component('ang')
@Attribute('hashbang', Boolean, { default: false })
@Template(function (html) { html `${this.route}` })
export class PageRouter extends HTMLElement {
  connectedCallback() {
    this.route = ''
    routes.forEach(route => {
      page(route.route, (context, next) => {
        const elem = document.createElement(getTagName(route.self))
        Object.keys(context.params).forEach((attribute)=> {
          if(!isNaN(attribute)) return
          elem.setAttribute(attribute, context.params[attribute])
        })
        this.route = elem
        this.render()
      })
    })
    page({ hashbang: this.hashbang })
  }
}
