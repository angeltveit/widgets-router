import { Component, Template } from '@scoutgg/widgets'
import page from 'page'
console.log('loaded', Component)
@Component('ang')
@Template(function (html) { html `<h1>Hello!</h1>` })
export class PageRouter extends HTMLElement {
  connectedCallback() {
    console.log('im connected')
  }
}
