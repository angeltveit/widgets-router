import { Component, Template, Attribute } from '@scoutgg/widgets'
import { getTagName } from '@scoutgg/widgets/cjs/decorators/component'
import { routes } from './decorator'
import { kebabCase } from 'lodash'
import page from 'page'

@Component('ang')
@Attribute('hashbang', Boolean, { default: false })
@Template(function (html) { html `${this.route}` })
export class PageRouter extends HTMLElement {
  connectedCallback() {
    this.route = ''
    routes.forEach(route => {
      page(route.route, (context, next) => {
        const tagname = this.route && this.route.tagName.toLowerCase()
        if(!this.route || tagname !== getTagName(route.self)) {
          const elem = document.createElement(getTagName(route.self))
          this.route = elem
        }

        Object.keys(context.params).forEach((attribute)=> {
          if(!isNaN(attribute)) return
          this.route.setAttribute(kebabCase(attribute), context.params[attribute])
        })
        this.render()
      })
    })
    page({ hashbang: this.hashbang })
  }
}
