import {
  FormControl,
  // FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import {theme} from '@theme/theme'
import React from 'react'
import {FormItem} from './FormItem'

type Props = {
  label?: string
  type?: 'text' | 'password' | 'email'
  value?: string
  name?: string
  placeholder?: string
  showPassword?: boolean
  text?: React.ReactNode
  children?: React.ReactNode

  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onToggleShowPassword?: () => void
  onMouseDownPassword?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function FormInput(props: Props) {
  const {
    label,
    type,
    name,
    value,
    placeholder,
    showPassword,
    children,
    text,
    onChange,
    onMouseDownPassword,
    onToggleShowPassword,
  } = props

  return (
    <Grid item xs={9}>
      <FormItem>
        <Typography variant="body3" mb={2}>
          {label}
        </Typography>
        {children}
        {text}
      </FormItem>
    </Grid>
  )
}
