/* eslint-disable @typescript-eslint/no-unused-vars */
import FormInput from '@components/sign-up-form/FormInput'
import RadioTerm from '@components/sign-up-form/RadioTerm'
import WestIcon from '@mui/icons-material/West'
import {
  Box,
  Button,
  ButtonBase,
  FormGroup,
  Typography,
  styled,
} from '@mui/material'
import {theme} from '@theme/theme'
import {useEffect, useState} from 'react'

interface SignUpInputs {
  id: string
  password: string
  passwordCheck: string
  email: string
}

interface EnterpriseInputs extends SignUpInputs {
  companyName: string
  bizNum: string
  phoneNumer: string
}

type Props = {
  type: 'personal' | 'enterprise' | ''
}

const initInputs: EnterpriseInputs = {
  id: '',
  password: '',
  passwordCheck: '',
  companyName: '',
  bizNum: '',
  email: '',
  phoneNumer: '',
}

const initRequiredConsent = {
  ltAge: false,
  termOfUse: false,
  privacy: false,
}

const initOptionalConsent = {
  marketingConsent: false,
  promotionConsent: false,
}

const SignUpFormContainer = styled(FormGroup)(() => ({
  display: 'flex',
  flexDirection: 'column',
  '& > * + *': {
    marginTop: 24,
  },
}))

const BackButton = styled(ButtonBase)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  color: 'white',
  '& span': {
    marginLeft: 13,
  },
}))

const ConsentBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.grey[600],
  marginBottom: 30,
  padding: 4,
  paddingBottom: 0,
  borderRadius: 4,
}))

export default function SignUpForm(props: Props) {
  const [signUpInputs, setSigUpInputs] = useState<EnterpriseInputs>(initInputs)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false)
  const [allConsentChecked, setAllConsentChecked] = useState<boolean>(false)
  const [requiredConsent, setRequiredConsent] = useState(initRequiredConsent)
  const [optionalConsent, setOptionalConsent] = useState(initOptionalConsent)

  const onToggleShowPassword = () => setShowPassword(prev => !prev)
  const onToggleShowPasswordCheck = () => setShowPassword(prev => !prev)

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setSigUpInputs({...signUpInputs, [event.target.name]: event.target.value})
  }

  const onChangeAllConsentChecked = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    const requiredConsent = {
      ltAge: checked,
      privacy: checked,
      termOfUse: checked,
    }

    const optionalConsent = {
      marketingConsent: checked,
      promotionConsent: checked,
    }

    setRequiredConsent(requiredConsent)
    setOptionalConsent(optionalConsent)
    setAllConsentChecked(checked)
  }

  const onChangeRequiredConsent = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    console.log(event.target.name)
    setRequiredConsent(prev => ({
      ...prev,
      [event.target.name]: checked,
    }))
  }

  const onChangeOptionalConsent = (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
  ) => {
    setOptionalConsent(prev => ({
      ...prev,
      [event.target.name]: checked,
    }))
  }

  useEffect(() => {
    console.log('Rendering....')
  }, [])

  return (
    <SignUpFormContainer>
      <BackButton>
        <WestIcon />
        <span>Back</span>
      </BackButton>
      <Typography variant="h1" color="white">
        회원가입
      </Typography>

      <FormInput
        label="아이디"
        name="id"
        value={signUpInputs.id}
        onChange={onChangeInputs}
        placeholder="6~16자 / 영문 소문자, 숫자 사용 가능"
      />

      <Button variant="outlined">중복확인</Button>

      <FormInput
        label="비밀번호"
        name="password"
        type="password"
        value={signUpInputs.password}
        onChange={onChangeInputs}
        showPassword={showPassword}
        onToggleShowPassword={onToggleShowPassword}
        onMouseDownPassword={onMouseDownPassword}
        placeholder=""
      />

      <FormInput
        label="비밀번호 재확인"
        name="passwordCheck"
        type="password"
        value={signUpInputs.passwordCheck}
        onChange={onChangeInputs}
        showPassword={showPasswordCheck}
        onToggleShowPassword={onToggleShowPasswordCheck}
        onMouseDownPassword={onMouseDownPassword}
      />

      <FormInput
        label="본인 확인 이메일"
        type="email"
        name="email"
        value={signUpInputs.email}
        onChange={onChangeInputs}
        placeholder=""
      />

      <Button variant="outlined">인증필수</Button>

      <Typography color={theme.palette.grey[300]} variant="body3" mt={4}>
        약관동의
      </Typography>
      <ConsentBox>
        <Box
          style={{
            borderBottom: '1px solid',
            borderColor: theme.palette.grey[500],
            paddingBottom: 4,
          }}
        >
          <RadioTerm
            label="전체동의"
            name="all"
            checked={allConsentChecked}
            onChange={onChangeAllConsentChecked}
            subText="선택항목에 대한 동의 포함"
          />
        </Box>
        <ul
          style={{
            padding: 0,
            margin: 0,
            marginTop: 8,
          }}
        >
          <li>
            <RadioTerm
              label="만 14세 이상입니다."
              name="ltAge"
              checked={requiredConsent.ltAge}
              onChange={onChangeRequiredConsent}
              required
            />
          </li>
          <li>
            <RadioTerm
              label="이용약관"
              name="termOfUse"
              checked={requiredConsent.termOfUse}
              onChange={onChangeRequiredConsent}
              required
            />
          </li>
          <li>
            <RadioTerm
              label="개인정보 수집 및 이용동의"
              name="privacy"
              checked={requiredConsent.privacy}
              onChange={onChangeRequiredConsent}
              required
            />
          </li>
          <li>
            <RadioTerm
              label="개인정보 마케팅 활용 동의 "
              name="marketingConsent"
              checked={optionalConsent.marketingConsent}
              onChange={onChangeOptionalConsent}
            />
          </li>
          <li>
            <RadioTerm
              label="이벤트, 쿠폰, 특가 알림 메일 수신"
              name="promotionConsent"
              checked={optionalConsent.promotionConsent}
              onChange={onChangeOptionalConsent}
            />
          </li>
        </ul>
      </ConsentBox>
      <Button
        variant="contained"
        size="large"
        style={{
          width: '100%',
        }}
      >
        회원가입하기
      </Button>
    </SignUpFormContainer>
  )
}
