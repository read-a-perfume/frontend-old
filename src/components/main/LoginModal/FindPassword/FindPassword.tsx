import FlexBox from '@components/layout/FlexBox'
import {Typography} from '@mui/material'
import {theme} from '@theme/theme'
import {LoginLayoutProps} from '../layout/LoginModal.interface'
import {FindLayout} from './FindPassword.style'
import CustomIcons from 'src/assets/customIcons'
import Links from '@components/layout/Links'
import Inputs from './Inputs'
import {useState} from 'react'
import {FindIdInfo} from './FindPassword.interface'

const FindPassword = ({setCondition}: LoginLayoutProps) => {
  const [inputs, setInputs] = useState<FindIdInfo>({id: '', email: ''})
  const [errors, setErrors] = useState<string>('')

  return (
    <FindLayout>
      <FlexBox
        onClick={() => setCondition('')}
        style={{cursor: 'pointer'}}
        alignItems="center"
      >
        <CustomIcons.ArrowLeftIcon style={{marginBottom: '-16px'}} />
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
      <Inputs
        setCondition={setCondition}
        inputs={inputs}
        errors={errors}
        setErrors={setErrors}
        setInputs={setInputs}
      />
      <Links
        style={{marginTop: '27px'}}
        label="아이디가 기억나지 않는다면?"
        linkLabel="아이디 찾기"
        onClick={() => setCondition('id')}
      />
    </FindLayout>
  )
}

export default FindPassword
