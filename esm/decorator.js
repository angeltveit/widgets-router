const routes = new Set()

export function Route(route, element) {
  //routes.add(route, element)
  return function run(cl) {
    console.log('Route decorator ran')
  }
}

export { routes }
