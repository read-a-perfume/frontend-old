import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  FormControl,
  FormHelperText,
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
  label: string
  type?: 'text' | 'password' | 'email'
  value: string
  name: string
  placeholder?: string
  showPassword?: boolean
  text?: React.ReactNode
  children?: React.ReactNode

  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
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
        <FormControl variant="filled">
          <OutlinedInput
            style={{
              fontSize: theme.typography.body3.fontSize,
            }}
            color="info"
            type={showPassword ? 'text' : type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            endAdornment={
              type === 'password' && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onToggleShowPassword}
                    onMouseDown={onMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOff style={{color: theme.palette.grey[400]}} />
                    ) : (
                      <Visibility style={{color: theme.palette.grey[400]}} />
                    )}
                    {children}
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        </FormControl>
        {text}
      </FormItem>
    </Grid>
  )
}
