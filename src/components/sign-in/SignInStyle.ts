import {
  Box,
  Dialog,
  DialogContent,
  FormGroup,
  Grid,
  Paper,
  styled,
  Typography,
} from '@mui/material'
export const SignInDialog = styled(Dialog)(({theme}) => ({
  maxWidth: 420,
  margin: '0 auto',
}))
export const SignInDialogContent = styled(DialogContent)(() => ({
  width: '100%',
}))

export const DialogGridContainer = styled(Grid)(() => ({}))
export const DialogGrid = styled(Grid)(() => ({}))
export const DialogGridTitle = styled(Typography)(() => ({
  fontSize: '22px',
  color: '#131313',
}))
export const DialogGridSubTitle = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
}))
