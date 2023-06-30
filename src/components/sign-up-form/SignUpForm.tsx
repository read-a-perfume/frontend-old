import {BASE_URL} from '@api/Apiconfig'
import {CheckEmail, CheckId} from '@api/sign-up/action'
import FormInput from '@components/sign-up-form/FormInput'
import RadioTerm from '@components/sign-up-form/RadioTerm'
import WestIcon from '@mui/icons-material/West'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  Typography,
  styled,
} from '@mui/material'
import {useMutation} from '@tanstack/react-query'
import {theme} from '@theme/theme'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {
  BackButton,
  ConsentBox,
  LoginLinkBox,
  SignUpFormContainer,
} from './styles'

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

const CheckButton = styled(Button)(() => ({
  display: 'flex',
  height: '55px',
  width: '100%',
  wordBreak: 'keep-all',
  color: 'white',
  marginTop: 36,
}))

export default function SignUpForm(props: Props) {
  // const {type} = props
  const [signUpInputs, setSigUpInputs] = useState<EnterpriseInputs>(initInputs)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPasswordCheck, setShowPasswordCheck] = useState<boolean>(false)
  const [allConsentChecked, setAllConsentChecked] = useState<boolean>(false)
  const [requiredConsent, setRequiredConsent] = useState(initRequiredConsent)
  const [optionalConsent, setOptionalConsent] = useState(initOptionalConsent)
  const [checkId, setCheckId] = useState<boolean>()
  const [emailAuthReady, setEmailAuthReady] = useState<boolean>(false)
  const [checkAuthNum, setCheckAuthNum] = useState<boolean>(false)
  const [emailSendAlertOpen, setEmailSendAlertOpen] = useState<boolean>(false)
  const [authCode, setAuthCode] = useState<string>('')

  const onToggleShowPassword = () => setShowPassword(prev => !prev)
  const onToggleShowPasswordCheck = () => setShowPasswordCheck(prev => !prev)

  const onMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onChangeInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const validationId = () => {
    const {id} = signUpInputs
    const idRex = /^[a-z]+[a-z0-9]{6,16}$/g

    if (id === '' || !id) {
      alert('아이디를 입력해주세요.')
      return false
    }

    if (!idRex.test(id)) {
      alert('올바른 아이디를 입력해주세요.')
      return false
    }

    return true
  }

  const checkIdQuery = useMutation({
    mutationFn: CheckId,
    onSuccess: () => {
      setCheckId(true)
    },
  })
  const onClickIdCheck = () => {
    checkIdQuery.mutate(signUpInputs.id)
  }

  const checkEmail = useMutation({
    mutationFn: CheckEmail,
    onSuccess: () => {
      console.log('asdsadsadsa')
      setEmailAuthReady(true)
      setEmailSendAlertOpen(true)
    },
  })

  const onClickEmailCheck = () => {
    checkEmail.mutate(signUpInputs.email)
  }
  const onClickSubmitBtn = async () => {
    try {
      const {id, password, email} = signUpInputs
      const {marketingConsent, promotionConsent} = optionalConsent

      await axios.post(BASE_URL + '/api/v1/signup/email', {
        username: id,
        name: '',
        password,
        email,
        marketingConsent,
        promotionConsent,
      })
    } catch (e) {
      console.error(e)
    }
  }
  // const onClickSubmitBtn = async () =>
  //   signUpQuery.mutate({
  //     id: signUpInputs.id,
  //     password: signUpInputs.password,
  //     email: signUpInputs.email,
  //     marketingConsent: optionalConsent.marketingConsent,
  //     promotionConsent: optionalConsent.promotionConsent,
  //   })

  const closeEmailSendAlert = () => {
    setEmailSendAlertOpen(false)
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
      <Typography variant="h1" mb={4}>
        회원가입
      </Typography>

      <Grid container width="100%" columnSpacing={2} rowSpacing={2}>
        <FormInput
          label="아이디"
          name="id"
          value={signUpInputs.id}
          onChange={onChangeInputs}
          placeholder="6~16자 / 영문 소문자, 숫자 사용 가능"
          text={
            checkId === false ? (
              <Typography
                variant="body5"
                color={theme.palette.error.main}
                mt={1}
              >
                중복된 아이디입니다. 다른 아이디로 다시 시도해주세요.
              </Typography>
            ) : checkId === true ? (
              <Typography
                variant="body5"
                color={theme.palette.info.main}
                mt={1}
              >
                사용가능한 아이디입니다.
              </Typography>
            ) : undefined
          }
        />

        <Grid item xs={3}>
          <CheckButton
            variant="contained"
            disableElevation
            style={{
              backgroundColor:
                checkId === false
                  ? theme.palette.error.main
                  : checkId === true
                  ? theme.palette.grey[200]
                  : 'black',
            }}
            onClick={onClickIdCheck}
            disabled={checkId}
          >
            중복확인
          </CheckButton>
        </Grid>
        <FormInput
          label="비밀번호"
          name="password"
          type="password"
          value={signUpInputs.password}
          onChange={onChangeInputs}
          showPassword={showPassword}
          onToggleShowPassword={onToggleShowPassword}
          onMouseDownPassword={onMouseDownPassword}
          placeholder="8~16자 / 문자, 숫자, 특수 문자 모두 혼용"
        />

        <FormInput
          label="비밀번호 재확인"
          name="passwordCheck"
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
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
          placeholder="이메일을 입력해주세요."
        />

        <Grid item xs={3}>
          <CheckButton
            disableElevation
            variant="contained"
            color="inherit"
            onClick={onClickEmailCheck}
            style={{
              backgroundColor:
                checkAuthNum === false ? 'black' : theme.palette.grey[200],
            }}
          >
            인증(필수)
          </CheckButton>
        </Grid>
        {emailAuthReady && (
          <>
            <FormInput
              label=""
              name="authCode"
              value={authCode}
              onChange={e => setAuthCode(e.target.value)}
              placeholder="인증코드 6자리 입력"
              text={
                emailAuthReady ? (
                  <Typography variant="body5" mt={1}>
                    혹시 인증번호가 오지 않았다면
                    <button
                      type="button"
                      onClick={onClickEmailCheck}
                      style={{
                        cursor: 'pointer',
                        margin: '0px 4px',
                        padding: 0,
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: theme.palette.secondary.main,
                        textDecoration: 'underline',
                      }}
                    >
                      재발급
                    </button>
                    을 눌러주세요.
                  </Typography>
                ) : undefined
              }
            />
            <Grid item xs={3}>
              <CheckButton
                disableElevation
                variant="contained"
                color="inherit"
                onClick={() => console.log('authCode checked')}
                style={{
                  backgroundColor:
                    checkAuthNum === false ? 'black' : theme.palette.grey[200],
                  marginTop: 16,
                }}
              >
                인증번호확인
              </CheckButton>
            </Grid>
          </>
        )}

        <Grid item xs={10}>
          <Typography variant="body3" mb={2}>
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
            color="inherit"
            size="large"
            style={{
              width: '100%',
            }}
            onClick={onClickSubmitBtn}
          >
            회원가입하기
          </Button>
        </Grid>
        <Grid item xs={10}>
          <LoginLinkBox>
            <Typography color={theme.palette.grey[400]} variant="body4">
              이미 회원이신가요?
            </Typography>
            <Link
              to="#"
              style={{
                cursor: 'pointer',
                margin: '0px 4px',
                padding: 0,
                backgroundColor: 'transparent',
                border: 'none',
                color: theme.palette.secondary.main,
                textDecoration: 'underline',
                marginLeft: 8,
              }}
            >
              로그인하기
            </Link>
          </LoginLinkBox>
        </Grid>
      </Grid>

      <Dialog open={emailSendAlertOpen}>
        <DialogContent>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography align="center" variant="body2" mb={2} fontWeight={600}>
              인증 메일을 발송했습니다.
              <br />
              메일함을 확인해주세요.
            </Typography>
            <Button
              disableElevation
              variant="contained"
              onClick={closeEmailSendAlert}
            >
              확인
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </SignUpFormContainer>
  )
}
