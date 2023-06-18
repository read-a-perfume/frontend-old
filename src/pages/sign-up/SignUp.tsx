import UserTypeSelect from '@components/user-type-select-box/UserTypeSelect'
import {Box, styled} from '@mui/material'
import SignUpForm from '@components/sign-up-form/SignUpForm'
import {useState} from 'react'

export type SignUpType = 'personal' | 'enterprise' | ''

export default function SignUp() {
  const [currentType, setCurrentType] = useState<SignUpType>('')

  // const onChangeType = (type: SignUpType) => {
  //   setCurrentType(type)
  // }

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
