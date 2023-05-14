import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
  FormControl,
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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void

  showPassword?: boolean
  onToggleShowPassword?: () => void
  onMouseDownPassword?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function FormInput(props: Props) {
  const {
    label,
    type,
    name,
    onChange,
    value,
    placeholder,
    showPassword,
    onMouseDownPassword,
    onToggleShowPassword,
  } = props

  return (
    <FormItem>
      <Typography variant="body3" color={theme.palette.grey[300]}>
        {label}
      </Typography>
      <FormControl variant="filled">
        <OutlinedInput
          style={{
            backgroundColor: theme.palette.grey[600],
            fontSize: theme.typography.body3.fontSize,
          }}
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
                    <VisibilityOff style={{color: 'white'}} />
                  ) : (
                    <Visibility style={{color: 'white'}} />
                  )}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </FormItem>
  )
}
