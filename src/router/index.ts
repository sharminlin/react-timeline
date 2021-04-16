interface RouteLink {
  [str: string]: string
}

export const routes: RouteLink = {
  home: '/',
  login: '/login'
}

export const getPageLink: (routeName: string) => string = (routeName: string) => {
  return routes[routeName] || '/'
}
