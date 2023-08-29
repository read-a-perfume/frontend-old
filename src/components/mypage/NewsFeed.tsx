import FlexBox from '@components/layout/FlexBox'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {theme} from '@theme/theme'
import React from 'react'
import HeartIcon from 'src/assets/HeartIcon'
import CustomIcons from 'src/assets/customIcons'

const Container = styled.div({
  width: 512,
  height: 420,
  borderRadius: 16,
  border: '1px solid #EDEDED',
  background: 'white',
  padding: '18px 24px',
})

const Name = styled(Typography)({
  fontSize: 18,
  fontWeight: '600',
})

const CoverImage = styled.div({
  height: 184,
  width: '100%',
  borderRadius: 16,
  background: 'slateblue',
  marginBottom: 14,
})

const Typo = styled(Typography)({
  fontSize: 16,
  fontWeight: '400',
  lineHeight: '150%',
  color: theme.palette.grey[800],
  marginBottom: 16,
})

const Hashtags = styled(Typography)({
  fontSize: 14,
  fontWeight: '400',
  color: theme.palette.primary.main,
  marginBottom: 17,
})

const Divider = styled.hr({
  border: 'none',
  height: 1,
  background: '#EDEDED',
})

const BottomTypo = styled(Typography)({
  fontSize: 14,
  fontWeight: '500',
  color: '#333',
  marginLeft: 6
})

const NewsFeed = () => {
  return (
    <Container>
      <FlexBox alignItems="center" style={{gap: 16, marginBottom: 19}}>
        <div
          style={{width: 32, height: 32, borderRadius: 32, background: 'blue'}}
        ></div>
        <Name>hwang_yo92</Name>
      </FlexBox>
      <CoverImage></CoverImage>
      <Typo>
        이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을
        감추고 있습니다.
      </Typo>
      <Hashtags>#플로랄 #플로랄 #고급짐</Hashtags>
      <Divider />
      <FlexBox style={{height: '9%'}} alignItems="center">
        <HeartIcon size="24" />
        <BottomTypo>좋아요 172개</BottomTypo>
        <div style={{ marginBottom: -13, marginLeft: 22}}>
          <CustomIcons.CommentIcon2 />
        </div>
        <BottomTypo>댓글 40개</BottomTypo>
      </FlexBox>
    </Container>
  )
}

export default NewsFeed
