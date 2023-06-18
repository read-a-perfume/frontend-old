import FlexBox from '@components/layout/FlexBox'
import {Divider} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {ButtonsProps} from '../LoginModal.interface'
import {
  DividerText,
  GoogleButton,
  GoogleIcon,
  LoginButton,
  ModalSpan,
} from '../LoginModal.style'

const Buttons = ({tabClick, errors}: ButtonsProps) => {
  const navigate = useNavigate()

  return (
    <>
      <LoginButton
        fullWidth
        sx={{marginTop: errors ? '0px' : '25px'}}
        onClick={() => navigate('/login')}
      >
        로그인
      </LoginButton>
      {tabClick !== 'company' && (
        <>
          <div style={{ marginTop: '35px'}}>
            <Divider />
            <FlexBox
              justifyContent="center"
              alignItems="center"
              style={{width: '100%'}}
            >
              <DividerText>또는</DividerText>
            </FlexBox>
          </div>
          <GoogleButton fullWidth style={{}}>
            <GoogleIcon />
            Google 로그인
          </GoogleButton>
        </>
      )}
      <FlexBox justifyContent="center" style={{marginTop: '27px'}}>
        <ModalSpan>아직 회원이 아니신가요?&nbsp;</ModalSpan>
        <ModalSpan color="blue" onClick={() => navigate('/sign-up')}>
          {' '}
          회원가입하기
        </ModalSpan>
      </FlexBox>
    </>
  )
}

export default Buttons
