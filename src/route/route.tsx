import React from 'react'

import SignUp from '@pages/sign-up/SignUp'
import Main from '@pages/main/Main'
import Brand from '@pages/brand/Brand'
import MagazineContent from '@components/brand/Magazine/MagazineContent'
import BrandSettings from '@components/brand/BrandSettings'
import PostMagazine from '@components/brand/Magazine/PostMagazine'

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
  {
    type: 'brand',
    name: 'brand-settings',
    key: 'brand-settings-key',
    route: '/brand/:id/settings',
    component: <BrandSettings />,
  },
  {
    type: 'magazine',
    name: 'magazine-detail',
    key: 'magazine-detail-key',
    route: '/brand/:id/magazine/:id',
    component: <MagazineContent />,
  },
  {
    type: 'magazine',
    name: 'post-magazine',
    key: 'post-magazine-key',
    route: '/brand/:id/magazine/post',
    component: <PostMagazine />,
  },
]

export default routes