import {Box, styled} from '@mui/material'
import SignUpForm from '@components/sign-up-form/SignUpForm'
// import {useState} from 'react'

export type SignUpType = 'personal' | 'enterprise' | ''

export default function SignUp() {
  // const [currentType, setCurrentType] = useState<SignUpType>('')
  // setStateAction이 없어 에러가 발생하였습니다. 위 코드는 사용하실 것 같아 그대로 두고 임시 코드를 만들었습니다.
  // 위 코드 사용 시 아래 코드는 지우고 사용하시기 바랍니다.
  const currentType = '';


  const Container = styled(Box)(() => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }))

  return (
    <Container>
      <SignUpForm type={currentType} />
    </Container>
  )
}
