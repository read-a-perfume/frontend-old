import styled from '@emotion/styled'
import {Button, TextareaAutosize, Typography} from '@mui/material'
import {AddBannerSpan, AddImageButton} from '@pages/brand/Brand.style'
import {theme} from '@theme/theme'
import CustomIcons from 'src/assets/customIcons'

// PostMagazine

export const ContentWrapper = styled.section({
  width: '100%',
  minHeight: '650px',
  paddingLeft: 160,
  paddingRight: 160,
  paddingTop: 32,
})

export const TitleInput = styled.textarea({
  border: 'transparent',
  height: 110,
  width: '100%',
  fontSize: 36,
  fontWeight: '600',
  color: '#191919',
  fontFamily: 'AritaBuri !important',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'flex-start',
  resize: 'none',
  '&:placeholder': {
    color: '#A9A9A9',
  },
})

export const SubTitleInput = styled.input({
  border: 'transparent',
  width: '100%',
  fontSize: theme.typography.h2.fontSize,
  fontWeight: '600',
  color: '#191919',
  fontFamily: 'AritaBuri !important',
  marginBottom: 25,
  marginTop: 25,
  '&:placeholder': {
    color: '#A9A9A9',
  },
})

export const ContentInput = styled(TextareaAutosize)({
  border: 'transparent',
  width: '100%',
  minHeight: 36,
  fontSize: theme.typography.h4.fontSize,
  fontWeight: '500',
  color: '#191919',
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'flex-start',
  marginBottom: 48,
  lineBreak: 'auto',
  resize: 'none',
  '&:placeholder': {
    color: '#A9A9A9',
  },
})

export const HeaderImage = styled.header({
  width: '100%',
  height: '470px',
  borderBottom: '1px solid black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const BannerContent = styled(AddBannerSpan)({
  zIndex: 2,
  textAlign: 'center',
  marginBottom: 106,
})

export const BannerButton = styled(AddImageButton)(
  ({image}: {image: boolean}) => ({
    zIndex: 2,
    background: image ? '#FE7156' : '#202020',
  }),
)

export const Attributes = styled.div({
  width: '100%',
  height: 48,
  paddingLeft: 160,
  display: 'flex',
  background: '#F1F1F5',
})

export const AttributeButton = styled(Button)({
  width: 113,
  height: 48,
  borderTop: 'none',
  borderBottom: 'none',
  borderRight: 'none',
  borderLeft: '1px solid #DBDBDB',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:nth-of-type(3)': {
    borderRight: '1px solid #DBDBDB',
  },
  '&:hover': {
    background: 'transparent',
  },
})

export const AttributeText = styled(Typography)({
  color: '#191919',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: '500',
  marginLeft: 2,
})

export const AddImage = styled.div({
  width: 1192,
  height: 586,
  borderRadius: 16,
  background: '#F1F1F5',
  border: '1px solid #EDEDED',
<<<<<<< HEAD
  overflow: 'hidden',
  marginTop: 48,
  marginBottom: 48
=======
  display: 'flex',
  flexDirection: 'column',
  
>>>>>>> c01173c (feat: move style from styles to component)
})

export const ContentImage = styled.img({
  width: 1192,
  height: 586,
  objectFit: 'fill',
  position: 'absolute',
  zIndex: 1,
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
  borderRadius: 16,
})

export const OptionsIcon = styled(CustomIcons.HamburgerIcon)({
  zIndex: 2,
  position: 'absolute',
  marginTop: 32,
  cursor: 'pointer',
})
