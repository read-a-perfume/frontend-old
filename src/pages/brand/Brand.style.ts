import {Step} from '@components/brand/InfoBoxes'
import styled from '@emotion/styled'
import {Button, ButtonGroup, Typography} from '@mui/material'
import {theme} from '@theme/theme'
import {Link} from 'react-router-dom'
import CustomIcons from 'src/assets/customIcons'

// Banner

export const Banner = styled.div({
  width: '100%',
  height: '470px',
  background: '#F1F1F5',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const BannerImage = styled.img({
  width: '100%',
  height: '470px',
  objectFit: 'cover',
  position: 'absolute',
  zIndex: 0,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
})

export const AddImageButton = styled(Button)(
  ({imageURL}: {imageURL: string}) => ({
    backgroundColor: imageURL ? 'white' : '#202020',
    color: imageURL ? '#191919' : 'white',
    fontSize: theme.typography.body3.fontSize,
    width: '137px',
    height: '34px',
    borderRadius: '10px',
    zIndex: 1,
    position: 'absolute',
    '&:hover': {
      background: '#202020',
    },
  }),
)

export const Blur = styled.div({
  width: '100%',
  height: '470px',
  background:
    'linearGradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%)',
  zIndex: 0,
  position: 'absolute',
})

export const AddBannerSpan = styled(Typography)(
  ({imageURL}: {imageURL: string}) => ({
    fontSize: theme.typography.body2.fontSize,
    fontWeight: 600,
    color: imageURL ? 'white' : '#191919',
    marginBottom: '80px',
    zIndex: 1,
    position: 'absolute',
  }),
)

// Brand Information

export const BrandInfoBlock = styled.div({
  width: '100%',
  paddingLeft: '160px',
  display: 'flex',
})

export const BrandInfo = styled.div({
  marginTop: '31px',
  marginLeft: '30px',
  display: 'flex',
  flexDirection: 'column'
})

export const BrandProfile = styled.img({
  width: '104px',
  height: '104px',
  borderRadius: '194.5px',
  background: 'white',
  marginTop: '-17px',
  zIndex: '0',
})

export const BrandTitle = styled(Typography)({
  fontSize: theme.typography.h3.fontSize,
  color: '#191919',
  textTransform: 'uppercase',
})

export const BrandSubTitle = styled(Typography)({
  fontSize: theme.typography.body2.fontSize,
  color: '#606060',
  marginTop: '6px',
})

export const BrandURL = styled(Link)({
  fontSize: theme.typography.body3.fontSize,
  color: '#FE7156',
  textDecoration: 'none',
  marginBottom: '16px'
})

export const BrandSettings = styled(Button)({
  width: '92px',
  height: '33px',
  border: '1px solid #DBDBDB',
  borderRadius: '10px',
  background: '#FFF',
  fontSize: theme.typography.body3.fontSize,
  color: '#191919',
  fontWeight: 600,
})

export const Follows = styled(Typography)(({color}: {color?: string}) => ({
  fontSize: theme.typography.body2.fontSize,
  color: color === 'red' ? '#FE7156' : '#A9A9A9',
  fontWeight: color === 'red' ? 600 : 400,
  marginLeft: color === 'red' ? '17px' : '2px',
}))

export const BrandContents = styled.div({
  marginTop: '80px',
  width: '100%',
  padding: '0px 160px',
  display: 'flex',
})

// Tabs
export const Tabs = styled.div({
  width: '100%',
  hegith: '64px',
  borderBottom: '1px solid #DCDCDC',
  display: 'flex',
  justifyContent: 'space-between'
})

export const Tab = styled.div(({current}: {current: boolean}) => ({
  fontFamily: 'AritaBuri !important',
  fontSize: theme.typography.h3.fontSize,
  color: '#191919',
  fontWeight: 600,
  borderBottom: current ? '1px solid black' : 'none',
  textAlign: 'center',
  width: '172px',
  padding: '20px 0px',
  cursor: 'pointer',
  position: 'relative',
  marginBottom: '-1px',
}))

export const AddProductButton = styled(Button)({
  width: '101px',
  height: '34px',
  borderRadius: '10px',
  background: '#FE7156',
  fontSize: theme.typography.body3.fontSize,
  color: 'white',
  "&:hover" : {
    background: '#FE7156'
  }
})

export const WriteMagazine = styled(Button)({
  width: '137px',
  height: '34px',
  borderRadius: '10px',
  background: '#202020',
  fontSize: theme.typography.body3.fontSize,
  color: 'white',
  "&:hover" : {
    background: '#202020'
  }
})

// Products & Magazine

export const CardBox = styled.div({
  flexWrap: 'wrap',
  marginTop: '44px',
  padding: '0px 160px',
  display: 'flex',
  justifyContent: 'space-around',
  rowGap: '60px',
  marginBottom: '60px',
})

export const Card = styled.div(
  ({width, height}: {width: string; height: string}) => ({
    height: height,
    width: width,
    borderRadius: '16px',
    border: '1px solid #EDEDED',
  }),
)

export const CardImage = styled.img(({height}: {height: string}) => ({
  height: height,
  width: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  borderRadius: '16px 16px 0px 0px',
}))

export const MagazineInfo = styled.div({
  width: '100%',
  padding: '0px 24px',
})

export const EditorProfile = styled.img({
  width: '40px',
  height: '40px',
  borderRadius: '40px',
  objectFit: 'cover',
})

export const OptionsGroup = styled(ButtonGroup)({
  border: '1px solid #C9CCD7',
  borderRadius: '10px',
  width: '61px',
  height: '60px',
  background: 'white'
})

export const EditButton = styled(Button)({
  height: '30px',
  width: '100%',
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: '#191919'
})

export const DeleteButton = styled(Button)({
  height: '30px',
  width: '100%',
  fontSize: theme.typography.body4.fontSize,
  fontWeight: 500,
  color: '#FF3B3B',
})

export const CardTitle = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: theme.typography.h4.fontSize,
  color: '#131313',
  fontWeight: 500,
  marginBottom: '16px',
})

export const CardSpan = styled(Typography)({
  fontSize: theme.typography.body2.fontSize,
  color: '#707070',
  marginBottom: '8px',
})

export const HashTags = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  color: '#FE7156',
})

export const BrandName = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  color: '#131313',
  marginBottom: '8px',
})

export const ProductName = styled(Typography)({
  fontSize: theme.typography.body1.fontSize,
  color: '#131313',
  fontWeight: 600,
})

export const InfoBox = styled.div({
  width: '375px',
  height: '46px',
  borderRadius: '10px',
  background: '#F1F1F1',
  display: 'flex',
  alignItems: 'center',
})

export const BoxContent = styled.div(({left}: {left: boolean}) => ({
  width: '188px',
  borderRight: left ? '1px solid #BDBDBD' : 'none',
  paddingLeft: left ? '32px' : '28px',
  display: 'flex',
}))

export const Categories = styled(Typography)(
  ({color = '#949494'}: {color?: string}) => ({
    color: color,
    fontSize: theme.typography.body3.fontSize,
    fontWeight: 500,
  }),
)

export const Types = styled(Typography)({
  color: '#333',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  marginLeft: '16px',
})

export const Divider = styled.hr({
  width: '190px',
  height: '2px',
  background: '#DBDBDB',
  border: 'none',
})

export const DetailedInfoBox = styled.div({
  width: '375px',
  height: '113px',
  borderRadius: '10px',
  background: '#F1F1F1',
  display: 'flex',
  flexDirection: 'column',
  padding: '13px 32px',
  gap: '10px',
})

export const Dot = styled.div(({marginLeft}: {marginLeft: Step}) => ({
  width: '10px',
  height: '10px',
  background: '#202020',
  position: 'absolute',
  zIndex: 0,
  borderRadius: '100%',
  marginTop: '-15px',
  marginLeft: marginLeft,
}))

export const PerfumeHamburger = styled(CustomIcons.HamburgerIcon)({
  position: 'absolute',
  marginTop: '24px',
  marginRight: '24px',
  cursor: 'pointer'
})