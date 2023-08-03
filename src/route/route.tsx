import Main from '@pages/main/Main'
import SignUp from '@pages/sign-up/SignUp'
import Test from '@pages/test/Test'
import Brand from '@pages/brand/Brand'
import MagazineContent from '@components/brand/Magazine/MagazineContent'
import BrandSettings from '@components/brand/BrandSettings'
import PostMagazine from '@components/brand/Magazine/PostMagazine'

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