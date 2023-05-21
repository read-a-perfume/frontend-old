import React from 'react'

import SignUp from '@pages/sign-up/SignUp'
import Main from '@pages/main/Main'

const routes = [
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
