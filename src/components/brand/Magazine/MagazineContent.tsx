import Header from '@components/layout/Header'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {theme} from '@theme/theme'
import FlexBox from '@components/layout/FlexBox'
import { useParams } from 'react-router-dom'
import CustomIcons from 'src/assets/customIcons'
import { Banner } from '@pages/brand/Brand.style'
import { magazineData } from '@components/main/constants'

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
  objectFit: 'contain',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

export const Blur = styled.div({
  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat',
  opacity: 0.6,
  position: 'absolute',
  width: '100%',
  height: '470px',
  zIndex: 1
})

const MagazineContent = () => {
  const path = useParams();
  const data = magazineData[Number(path.id)]

  return (
    <>
      <Header />
      <Banner>
        <FlexBox>
          <CustomIcons.ArrowLeftIcon width="24" height="24" style={{zIndex: 2}} />
          <BannerSpan style={{zIndex: 2}}>asdf</BannerSpan>
        </FlexBox>
        <BannerImage src={data.image} alt="banner" style={{zIndex: 1}} />
        <Blur />
      </Banner>
    </>
  )
}

export default MagazineContent