import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  styled,
  TextField,
  Typography,
} from '@mui/material'

interface LoginButtonProps {
  customColor: '#F8DB52' | 'white'
}

export const SignInDialog = styled(Dialog)(() => ({
  maxWidth: 420,
  margin: '0 auto',
}))
export const SignInDialogContent = styled(DialogContent)(() => ({
  width: '100%',
}))

export const DialogGridContainer = styled(Grid)(() => ({}))
export const DialogGrid = styled(Grid)(() => ({
  width: '100%'
}))
export const DialogGridTitle = styled(Typography)(() => ({
  fontSize: '22px',
  color: '#131313',
}))
export const DialogGridSubTitle = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 'bold',
}))
export const TabBox = styled(Box)(() => ({
  borderBottom: 1,
  borderColor: 'divider'
}))
export const SignInTextField = styled(TextField)(() => ({
  width: '100%',
  marginBottom: '10px',
}))
export const TextFieldLabel = styled('label')(() => ({
  fontSize: '14px'
}))
export const LoginButton = styled(Button)<LoginButtonProps>(({...props}) => ({
  boxShadow: 'none',
  width: '100%',
  background: props.customColor,
  color: 'black',
  borderColor: '#EFEFEF',
  '&:hover': {
    borderColor: '#EFEFEF'
  }
}))