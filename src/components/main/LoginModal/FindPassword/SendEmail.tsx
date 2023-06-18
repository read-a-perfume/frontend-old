import React from 'react'
import {useNavigate} from 'react-router-dom'
import {ConfirmButton, SendEmailContainer, SendEmailSpan} from './FindPassword.style'

const SendEmail = () => {
  const navigate = useNavigate()

  return (
    <SendEmailContainer>
      <SendEmailSpan textType="tiele"
      >
        이메일로 새 비밀번호를
        <br />
        보내드렸습니다.
      </SendEmailSpan>
      <SendEmailSpan 
      >
        이메일에 써있는 비밀번호로 로그인할 수 있어요.
        <br />
        비밀번호는 내 정보에서 변경할 수 있어요!
      </SendEmailSpan>
      <ConfirmButton fullWidth onClick={() => navigate('/login')}>
        로그인하기
      </ConfirmButton>
    </SendEmailContainer>
  )
}

export default SendEmail
