import styled from '@emotion/styled'
import {Box, ButtonBase, FormGroup} from '@mui/material'
import {theme} from '@theme/theme'

export const SignUpFormContainer = styled(FormGroup)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& > * + *': {
    marginTop: 24,
  },

  maxWidth: 500,
}))

export const BackButton = styled(ButtonBase)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  marginBottom: 66,
  '& span': {
    marginLeft: 13,
  },
}))

export const ConsentBox = styled(Box)(() => ({
  marginBottom: 30,
  padding: 4,
  paddingBottom: 0,
  borderRadius: 4,
  '& li': {
    listStyle: 'none',
  },
}))

export const LoginLinkBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  '& *': {
    fontSize: theme.typography.body4.fontSize,
  },
}))
