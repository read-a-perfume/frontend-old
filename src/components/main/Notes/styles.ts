import styled from "@emotion/styled"
import { Typography } from "@mui/material"

export const NoteName = styled(Typography)(({clicked}: {clicked: boolean}) => ({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  fontSize: 18,
  fontWeight: '500',
  marginTop: 16,
  color: clicked ? '#FE7156' : 'black',
}))

export const NoteImage = styled(Typography)(
  ({clicked}: {clicked: boolean}) => ({
    width: 104,
    height: 104,
    borderRadius: '100%',
    backgroundColor: '#F1F1F5',
    border: '3px solid white',
    outline: clicked ? '1px solid #FE7156' : '1px solid #F1F1F5',
    cursor: 'pointer',
  }),
)

export const NoteTitle = styled(Typography)({
  fontFamily: 'AritaBuri, sans-serif, Arial !important',
  color: 'white',
  fontSize: 32,
  fontWeight: '500',
  position: 'absolute',
  paddingLeft: 32,
  paddingTop: 53,
  marginBottom: 20,
})

export const NoteSubTitle = styled(Typography)({
  fontSize: 18,
  color: 'white',
  position: 'absolute',
  paddingLeft: 32,
  paddingTop: 53,
  marginTop: 100,
})

export const ProductLayout = styled.div({
  display: 'flex',
  flex: 1,
  height: 600,
  gap: 32,
  flexWrap: 'wrap',
  marginBottom: 136,
})

export const ProductBox = styled.div({
  width: '31%',
  height: 284,
  borderRadius: 16,
  background: 'white',
  border: '1px solid #DBDBDB',
  overflow: 'hidden',
})

export const ProductInfoBox = styled.div({
  paddingLeft: 24,
  marginTop: -6,
  height: 78,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  borderTop: '1px solid #EDEDED',
})

export const NoteBox = styled.div({
  height: 600,
  width: 376,
  borderRadius: 16,
  overflow: 'hidden',
})

export const ProductName = styled(Typography)({
  color: '#191919',
  fontSize: 18,
  fontWeight: '500',
})

export const BrandName = styled(Typography)({
  color: '#A9A9A9',
  fontSize: 14,
})
