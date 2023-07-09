import Header from '@components/layout/Header'
import LoginModal from '@components/main/LoginModal/LoginModal'
import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import {theme} from '@theme/theme'
import { useState } from 'react'

const Banner = styled.div({
  width: '100%',
  height: '470px',
  background: 'red',
})

const BannerImage = styled.img({
  width: '100%',
  height: '470px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

const Title = styled(Typography)({
  fontSize: '36px',
  color: 'white',
  lineHeight: '150%',
  fontWeight: '600',
  zIndex: 0,
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
})

const BannerBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  paddingLeft: '160px',
  paddingRight: '160px',
})

const BannerButton = styled(Button)({
  width: '178px',
  height: '54px',
  borderRadius: '10px',
  border: '1px solid white',
  color: 'white',
  fontSize: theme.typography.body2.fontSize,
  marginTop: '79px',
})

export default function Main() {
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const isLoggedIn = false;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Header isLoggedIn={isLoggedIn} />
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
    </>
  )
}
