import styled from '@emotion/styled'
import {Card, CardContent, Typography} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CustomIcons from "../../../assets/icons/customIcons"
import {theme} from '@theme/theme';

export const CardContainer = styled.div({
  margin: '185px 360px 0px 360px',
})

export const CardTitle = styled(Typography)({
  fontSize: theme.typography.h2.fontSize,
  fontWeight: 700,
  marginBottom: '42px',
})

export const ContentCard = styled(Card)({
  width: '294px',
  height: '234px',
  background: theme.palette.grey[600],
  borderRadius: '4px',
})

export const Contents = styled.div({
  display: 'flex',
  gap: '8px',
  marginBottom: '116px',
})

export const NewsContainer = styled.div({
  display: 'flex',
})

export const NewsTab = styled.div({
  width: '360px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  marginTop: '75px',
})

export const Tab = styled(Typography)<{clicked?: boolean}>(({clicked}) => ({
  width: '212px',
  height: '48px',
  borderRadius: '32px',
  background: clicked ? theme.palette.grey[800] : 'white',
  color: clicked ? 'white' : theme.palette.grey[400],
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}))

export const InstaProfile = styled.img({
  borderRadius: '100%',
  width: '36px',
  height: '36px',
  marginRight: '8px',
})

export const NewsCard = styled(Card)({
  width: '395px',
  height: '315px',
  minHeight: '225px',
  boxShadow: 'none',
  border: '1px solid #EFEFEF',
  borderRadius: '4px',
})

export const NewsCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #EFEFEF',
  marginLeft: '4px',
})

export const FlexBox = styled.div({
  display: 'flex',
  alignItems: 'center',
})

export const HeartIcon = styled(FavoriteIcon)({
  color: '#FF334C',
  width: '24px',
  height: '24px',
  marginRight: '4px'
})

export const CommentIcon = styled(CustomIcons.CommentIcon)({
  width: '24px',
  height: '24px',
  marginBottom: '-6px',
  marginLeft: '19.43px',
  marginRight: '4px'
})