import Header from '@components/layout/Header'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {theme} from '@theme/theme'
import FlexBox from '@components/layout/FlexBox'
import {useParams} from 'react-router-dom'
import CustomIcons from 'src/assets/customIcons'
import {magazineData} from '@components/main/constants'
import {LinkButton, PostFooter} from './Magazine.style'

const BannerSpan = styled(Typography)({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 600,
  color: 'white',
  marginBottom: '80px',
  zIndex: 1,
  position: 'absolute',
})

const BannerImage = styled.img({
  width: '100%',
  height: '470px',
  objectFit: 'fill',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

export const Blur = styled.div({
  background:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat',
  opacity: 0.6,
  position: 'absolute',
  width: '100%',
  height: '470px',
  zIndex: 1,
})

export const BannerBox = styled.div({
  width: '100%',
  height: '470px',
  background: '#F1F1F5',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
})

const MagazineContent = () => {
  const path = useParams()
  const data = magazineData[Number(path.id)]

  return (
    <>
      <Header />
      <BannerBox>
        <FlexBox style={{padding: '0px 160px'}} direction={'column'}>
          <CustomIcons.BeforeIcon width="24" height="24" style={{zIndex: 2}} />
          <Typography
            style={{fontSize: 14, color: 'white', zIndex: 2, marginTop: 16}}
          >
            #선물하기좋은 #탬버린즈퍼퓸핸드
          </Typography>
          <Typography
            style={{
              fontSize: 36,
              fontWeight: '600',
              lineHeight: '150%',
              color: 'white',
              fontFamily: 'AritaBuri !important',
              marginTop: 12,
              zIndex: 2,
            }}
          >
            산뜻한 감촉과 함께 풍부한 영양을 공급하는 동시에
            <br />
            매력적인 향기를 전달하는 퍼퓸핸드
          </Typography>
          <FlexBox alignItems="center" style={{marginTop: 19}}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 194.5,
                border: '1px solid black',
                background: 'white',
                marginRight: 8,
                zIndex: 2,
              }}
            ></div>
            <Typography
              style={{
                fontSize: 18,
                fontWeight: '600',
                textTransform: 'uppercase',
                color: 'white',
                marginRight: 12,
                zIndex: 2,
              }}
            >
              TAMBURINS
            </Typography>
            <Typography style={{fontSize: 14, color: 'white', zIndex: 2}}>
              {new Date().toISOString().split('T')[0].split('-').join('.')}
            </Typography>
          </FlexBox>
        </FlexBox>
        <BannerImage src={data.image} alt="banner" style={{zIndex: 1}} />
        <Blur />
      </BannerBox>
      <div style={{paddingLeft: 160, paddingRight: 160, marginTop: 88}}>
        testing~~
      </div>
      <PostFooter>
        <LinkButton>이전글</LinkButton>
        <LinkButton>다음글</LinkButton>
      </PostFooter>
    </>
  )
}

export default MagazineContent
