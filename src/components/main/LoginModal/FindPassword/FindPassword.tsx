import React from 'react'
import FlexBox from '@components/layout/FlexBox'
import {FormControl, TextField, Typography} from '@mui/material'
import {theme} from '@theme/theme'
import {LoginLayoutProps} from '../LoginModal.interface'
import {ConfirmButton, FindLayout, FindSpan, Label} from './FindPassword.style'
import { inputStyle } from '../LoginModal.style'
import CustomIcons from 'src/assets/customIcons'

const FindPassword = ({setCondition}: LoginLayoutProps) => {
  return (
    <FindLayout>
      <FlexBox
        onClick={() => setCondition('')}
        style={{cursor: 'pointer'}}
        alignItems="center"
      >
        <CustomIcons.ArrowLeftIcon style={{ marginBottom: '-16px'}} />
        <Typography
          fontSize={theme.typography.body2.fontSize}
          color={theme.palette.grey[800]}
        >
          Back
        </Typography>
      </FlexBox>
      <Typography
        fontSize={theme.typography.h1.fontSize}
        fontWeight="700"
        style={{marginTop: '65px', marginBottom: '34px'}}
      >
        비밀번호 찾기
      </Typography>
      <FormControl fullWidth>
        <Label>아이디</Label>
        <TextField
          required
          fullWidth
          size="small"
          placeholder="아이디"
          name="search_id"
          sx={inputStyle}
        />
        <Label>이메일</Label>
        <TextField
          required
          fullWidth
          size="small"
          placeholder="이메일"
          name="search_email"
          sx={inputStyle}
        />
        <ConfirmButton type="submit" fullWidth onClick={() => setCondition('password_email')}>
          확인
        </ConfirmButton>
      </FormControl>
      <FlexBox justifyContent="center" style={{marginTop: '27px'}}>
        <FindSpan>아이디가 기억나지 않는다면?&nbsp;</FindSpan>
        <FindSpan color="blue" onClick={() => setCondition('id')}>
          {' '}
          아이디 찾기
        </FindSpan>
      </FlexBox>
    </FindLayout>
  )
}

export default FindPassword