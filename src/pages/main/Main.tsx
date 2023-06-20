import {useState} from 'react'
import {Link} from 'react-router-dom'
import LoginModal from '@components/main/LoginModal/LoginModal'
import SignIn from '@components/sign-in/SignIn'
import { Button } from '@mui/material'

export default function Main() {
  const [isSignInDialog, setIsSignInDialog] = useState(false)
  const changeSignInDialog = () => {
    setIsSignInDialog(isSignInDialog === true ? false : true)
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>메인</div>
      <Link to="sign-up">회원가입</Link>
      <Button variant="text" onClick={changeSignInDialog}>
        로그인
      </Button>
      {isSignInDialog ? (
        <SignIn
          isDialog={isSignInDialog}
          changeSignInDialog={changeSignInDialog}
        />
      ) : null}
      {/* 아래는 확인용입니다. 메인 페이지 작업 시작하면서 삭제하겠습니다. */}
      <Button variant='contained' onClick={() => setIsOpen(true)}>로그인 모달 테스트</Button>
    </>
  )
}
