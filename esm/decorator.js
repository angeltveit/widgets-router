const routes = new Set()

export function Route(route, element) {
  return function run(self) {
    routes.add({route, self})
  }
}

export { routes }
