import Main from '@pages/main/Main'
import Brand from '@pages/brand/Brand'
import MagazineContent from '@components/brand/MagazineContent'
import BrandSettings from '@components/brand/BrandSettings'
import SignUp from '@pages/sign-up/SignUp'

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
    type: 'brand',
    name: 'brand',
    key: 'brand-key',
    route: '/brand/:id',
    component: <Brand />,
  },
  {
    type: 'brand-settings',
    name: 'brand-settings',
    key: 'brand-settings-key',
    route: '/brand/:id/settings',
    component: <BrandSettings />,
  },
  {
    type: 'magazine-detail',
    name: 'magazine-detail',
    key: 'magazine-detail-key',
    route: '/brand/:id/magazine/:id',
    component: <MagazineContent />,
  },
]

export default routes
