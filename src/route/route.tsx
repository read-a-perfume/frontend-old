import React from 'react'

import SignUp from '@pages/sign-up/SignUp'
import Main from '@pages/main/Main'
import Brand from '@pages/brand/Brand'

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
  {
    type: 'brand',
    name: 'brand',
    key: 'brand-key',
    route: '/brand/:id',
    component: <Brand />,
  },
]

export default routes
