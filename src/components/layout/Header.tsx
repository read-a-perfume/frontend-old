import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import { theme } from '@theme/theme'
import FlexBox from './FlexBox'

const HeaderLayout = styled.div({
  height: '116px',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
})

const HeaderSpan = styled(Typography)({
    fontWeight: '500',
    fontSize: theme.typography.body1.fontSize,
})

const PostButton = styled(Button)({
    background: '#353535',
    height: '42px',
    width: '120px',
    fontSize: '15px',
    color: 'white',
    fontWeight: '500',
})

const Header = () => {
  return (
    <HeaderLayout>
      <FlexBox alignItems='center' style={{width: '380px'}}>
        <img src={'/public/images/logo-text.png'} alt="logo" />
        <HeaderSpan>홈</HeaderSpan>
        <HeaderSpan>검색</HeaderSpan>
        <HeaderSpan>마이페이지</HeaderSpan>
        <PostButton>글쓰기</PostButton>
      </FlexBox>
    </HeaderLayout>
  )
}

export default Header
