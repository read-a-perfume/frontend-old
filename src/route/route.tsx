import Main from '@pages/main/Main'
import SignUp from '@pages/sign-up/SignUp'
import Test from '@pages/test/Test'

type Route = {
  type: string
  name: string
  key: string
  route: string
  component: React.ReactElement
}

const routes: Route[] = [
  {
    type: 'index',
    name: 'main',
    key: 'main-key',
    route: '/',
    component: <Main />,
  },
  {
    type: 'signUp',
    name: 'signUp',
    key: 'signUp-key',
    route: '/sign-up',
    component: <SignUp />,
  },
  {
    type: 'test',
    name: 'test',
    key: 'test-key',
    route: '/test',
    component: <Test />,
  },
  // {
  //   type: 'collapse',
  //   name: 'test',
  //   key: 'test-key',
  //   collapse: [
  //     {
  //       name: 'test-first',
  //       key: 'test-first-key',
  //       route: '/test-first',
  //       component: <TestFirst />,
  //     },
  //   ],
  // },
]

export default routes
