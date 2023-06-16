import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {theme} from '@theme/theme'
import { NavProps } from './Headers.interface'

export const Nav = styled.div({
  width: '100%',
  height: '56px',
  background: 'black',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Logo = styled.img({
  width: '146px',
  height: '25px',
  objectFit: 'contain',
  marginRight: '52px',
  cursor: 'pointer',
})

export const NavItem = styled(Typography)<NavProps>(({clicked}) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: '500',
  textDecoration: clicked ? 'underline' : 'none',
  textUnderlineOffset: '7px',
  color: 'white',
  marginRight: '32px',
  cursor: 'pointer'
}))

export const LeftNav = styled.div({
  marginLeft: '67px',
  display: 'flex',
})

export const RightNav = styled.div({
  marginRight: '400.57px',
  display: 'flex'
})

export const Section = styled.div({
  width: '100%',
  height: '636px',
  background: theme.palette.grey[800],
})

export const Headers = styled.div({
  height: '90%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '360px',
  marginRight: '415px',
})

export const CarouselItems = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'left',
})

export const CarouselTitles = styled.div({
  marginTop: '-100px',
})

export const TopSectionTitle = styled(Typography)({
  fontSize: theme.typography.hero.fontSize,
  fontWeight: '700',
  color: 'white',
  marginBottom: '8px',
})

export const TopSectionSubTitle = styled(Typography)({
  fontSize: theme.typography.h3.fontSize,
  color: 'white',
})

export const BgItem = styled.div({
  width: '368px',
  height: '368px',
  background: theme.palette.primary.main,
  borderRadius: '100%',
  position: 'relative',
  left: '30%',
  bottom: '45px',
})

export const Item = styled.img({
  width: '386px',
  height: '377px',
  marginTop: '52px',
  position: 'absolute',
  zIndex: 1,
})

export const CategorySection = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '48px',
  position: 'absolute',
  top: '59.7%',
})

export const CategoryBox = styled.div({
  borderRadius: '4px',
})

export const CategorySpan = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  marginTop: '8px',
  color: theme.palette.grey[600],
  display: 'flex',
  justifyContent: 'center',
})

export const CategoryImage = styled.img({
  width: '64px',
  height: '64px',
})
