import FlexBox from '@components/layout/FlexBox'
import {Typography} from '@mui/material'
import {theme} from '@theme/theme'
import {useState} from 'react'
import {LoginLayoutProps, UserInfo} from '../LoginModal.interface'
import {
  Checked,
  ErrorText,
  FindId,
  FindPassword,
  NotChecked,
} from '../LoginModal.style'
import Buttons from './Buttons'
import LoginModalInputs from './LoginModalInputs'
import LoginModalTitle from './LoginModalTitle'

function LoginLayout({setCondition}: LoginLayoutProps) {
  const [checked, setChecked] = useState<boolean>(false)
  const [inputs, setInputs] = useState<UserInfo>({id: '', password: ''})
  const [errors, setErrors] = useState<string>('')
  const [tabClick, setTabClick] = useState<string>('personal')
  return (
    <>
      <LoginModalTitle setTabClick={setTabClick} tabClick={tabClick} />
      <LoginModalInputs
        inputs={inputs}
        setInputs={setInputs}
        setErrors={setErrors}
      />
      <FlexBox justifyContent="space-between" style={{marginTop: '8px'}}>
        <FlexBox>
          {checked ? (
            <Checked onClick={() => setChecked(!checked)} />
          ) : (
            <NotChecked onClick={() => setChecked(!checked)} />
          )}
          <Typography
            fontSize={theme.typography.body4.fontSize}
            fontWeight="500"
            color={theme.palette.grey[500]}
          >
            로그인 상태 유지
          </Typography>
        </FlexBox>
        <FlexBox alignItems="center">
          <FindPassword onClick={() => setCondition('password')}>
            비밀번호 찾기
          </FindPassword>
          <FindId onClick={() => setCondition('id')}>아이디 찾기</FindId>
        </FlexBox>
      </FlexBox>
      {errors && (
        <ErrorText>
          {errors}
        </ErrorText>
      )}
      <Buttons errors={errors} tabClick={tabClick} />
    </>
  )
}

export default LoginLayout
