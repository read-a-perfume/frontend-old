import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CustomIcons from 'src/assets/icons/customIcons';
import Categories from '../Category/Categories';
import {
  BgItem,
  CarouselItems,
  CarouselTitles,
  Headers,
  Item,
  LeftNav,
  Logo,
  Nav,
  NavItem,
  RightNav,
  SearchIcon,
  Section,
  TopSectionSubTitle,
  TopSectionTitle,
} from './Headers.style'

function Header() {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState<string>('')

  return (
    <Section>
      <Nav>
        <LeftNav>
          <Logo src="images/logo-text.png" alt="logo" onClick={() => navigate('/')} />
          <NavItem onClick={() => setClicked('home')} clicked={clicked === 'home'}>
            홈 피드
          </NavItem>
          <NavItem onClick={() => setClicked('post')} clicked={clicked === 'post'}>
            글 쓰기
          </NavItem>
        </LeftNav>
        <RightNav>
          <NavItem onClick={() => navigate('/login')}>
            로그인
          </NavItem>
          <NavItem onClick={() => navigate('/sign-up')}>
            회원가입
          </NavItem>
          <SearchIcon />
        </RightNav>
      </Nav>
      <Headers>
        <CarouselTitles>
          <TopSectionTitle>이달의 추천</TopSectionTitle>
          <TopSectionSubTitle>
            사람들이 가장 많이 추천한 향수
          </TopSectionSubTitle>
        </CarouselTitles>
        <CarouselItems>
          <Item
            src="https://images.ctfassets.net/u1nb1km7t5q7/2KZlIMnS3ahdxSWKM3vuBp/8afba886bffcdbf208f2680aef178ffc/Aesop_Fragrance_Gloam_Eau_de_Parfum_50mL_Web_Large_684x668px.png"
            alt="Aesop_Fragrance_Gloam_Eau_de_Parfum"
          />
          <BgItem />
        </CarouselItems>
      </Headers>
      <Categories />
    </Section>
  )
}

export default Header;
