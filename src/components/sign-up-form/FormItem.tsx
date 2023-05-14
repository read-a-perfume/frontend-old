import {styled, Box} from '@mui/material'

export const FormItem = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  '& input': {
    fontSize: theme.typography.body3,
    color: theme.palette.grey[400],
  },
}))
