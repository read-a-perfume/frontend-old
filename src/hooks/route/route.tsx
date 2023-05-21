import {JSXElementConstructor, Key, ReactElement} from 'react'
import {Route} from 'react-router-dom'

type routes = {
  collapse: any
  key: Key
  route: string
  component: ReactElement<any, string | JSXElementConstructor<any>>
}

export const useGetRoutes = (allRoutes: any[]): any => {
  const routeList = allRoutes.map((route: routes) => {
    if (route.collapse) {
      return useGetRoutes(route.collapse)
    }
    if (route.route) {
      return (
        <Route path={route.route} element={route.component} key={route.key} />
      )
    }
    return null
  })
  return routeList
}
