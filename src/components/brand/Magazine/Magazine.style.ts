import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import {AddBannerSpan, AddImageButton} from '@pages/brand/Brand.style'

// PostMagazine

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

export const EditorTitle = styled(Typography)({
  fontSize: 18,
  fontWeight: '500',
  color: '#191919',
  marginRight: 40,
})

export const TitleInput = styled.input({
  height: 55,
  border: 'none',
  borderBottom: '1px solid #DBDBDB',
  fontSize: 18,
  fontWeight: '500',
})

export const AddButton = styled.div({
  width: 112,
  height: '100%',
  borderLeft: '1px solid #DBDBDB',
  borderRight: '1px solid #DBDBDB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
})

export const AddButtonText = styled(Typography)({
  fontSize: 14,
  fontWeight: 500,
  color: '#191919',
  marginLeft: 6,
})

export const TextBox = styled.div({
  marginLeft: 160,
  marginRight: 160,
  marginTop: 34,
})

export const ImageDefault = styled.div({
  width: 1192,
  marginTop: 34,
  marginBottom: 34,
  height: 586,
  background: '#F1F1F5',
  border: '1px solid #EDEDED',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const PostFooter = styled.div({
  width: '100%',
  position: 'fixed',
  bottom: 0,
  height: 112,
  borderTop: '1px solid black',
  padding: '0px 160px',
  background: 'white',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
})

export const LinkButton = styled(Button)({
  width: 73,
  height: 38,
  borderRadius: 10,
  border : '1px solid #DBDBDB',
  background: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 14,
  color: '#191919'
})
