import Header from '@components/layout/Header'
import LoginModal from '@components/LoginModal/LoginModal'
import Magazines from '@components/main/Magazines/Magazines'
import Notes from '@components/main/Notes/Notes'
import Review from '@components/main/Review/Review'
import {useState} from 'react'
import { Banner, BannerBox, BannerButton, BannerImage, Content, Title } from './Main.style'

export default function Main() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const isLoggedIn = false;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header />
      <Banner onClick={() => setIsOpen(!isLoggedIn ? true : false)}>
        <BannerImage src="/images/banner.png" alt="banner" />
        <BannerBox>
          <Title>
            REED A PERFUME에 오신것을 환영합니다.
            <br />
            향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
          </Title>
          <BannerButton variant="outlined">리뷰 작성하기</BannerButton>
        </BannerBox>
      </Banner>
      <Content>
        <Magazines />
        <Notes />
        <Review />
      </Content>
    </>
  )
}