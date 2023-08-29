import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import {theme} from '@theme/theme'

export const Name = styled(Typography)({
  fontSize: 16,
  fontWeight: '600',
  marginBottom: 4,
})

export const Category = styled(Typography)({
  margin: '24px 0px',
  fontSize: 14,
  fontWeight: '600',
  color: theme.palette.grey[600],
})

export const Input = styled.input({
  width: 216,
  height: 38,
  padding: '8px 20px',
  borderRadius: 10,
  border: '1px solid #EDEDED',
  background: 'white',
  fontSize: 14,
  fontWeight: '500',
  lineHeight: '160%',
  letterSpacing: 0.28,
  outline: 'none',
})

export const TypeBox = styled.div({
  width: 336,
  height: 106,
  borderRadius: 10,
  border: '1px solid #EDEDED',
  background: 'white',
})

export const BottomButton = styled(Button)({
  width: 214,
  height: 46,
  background: theme.palette.primary.main,
  borderRadius: 10,
  border: '1px solid #FF5838',
  fontSize: 16,
  fontWeight: "500",
  color: 'white',
  marginBottom: 150,
  marginLeft: 60,
  "&:hover": {
    background: '#FF5838'
  }
})
