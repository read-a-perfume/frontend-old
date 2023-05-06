import UserTypeBox from '@components/sign-up/UserTypeBox'
import {Box, Button, Typography, styled} from '@mui/material'
import {grey} from '@mui/material/colors'
import {useState} from 'react'

export type SignUpType = 'personal' | 'enterprise' | ''

export default function SignUp() {
  const [currentType, setCurrentType] = useState<SignUpType>('')

  const onChangeType = (type: SignUpType) => {
    setCurrentType(type)
  }

  const Container = styled(Box)(() => ({
    backgroundColor: 'black',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }))

  const StartBtn = styled(Button)(({theme: theme}) => ({
    width: 280,
    height: 48,
    fontSize: theme.typography.body2.fontSize,
    backgroundColor: currentType === '' ? theme.palette.grey[500] : 'white',
    color: currentType === '' ? theme.palette.grey[600] : 'black',

    '&:hover': {
      backgroundColor: currentType === '' ? theme.palette.grey[500] : 'white',
      fontWeight: 'bold',
    },
  }))

  return (
    <Container>
      <Typography variant="h1" color="white" align="center" mb={4}>
        Read a Perfume 사용 용도가 무엇인가요?
      </Typography>
      <Typography color={grey['400']} align="center">
        컨텐츠를 구경하고 소통하고 싶으면 개인용을, 향수 홍보 목적이면 기업용을
        선택해주세요.
      </Typography>
      <Box display="flex" maxWidth="800px" marginX="auto" mt={10} mb={10}>
        <UserTypeBox
          type="personal"
          onChangeType={onChangeType}
          currentType={currentType}
        />
        <UserTypeBox
          type="enterprise"
          onChangeType={onChangeType}
          currentType={currentType}
        />
      </Box>

      <StartBtn>시작하기</StartBtn>
    </Container>
  )
}
