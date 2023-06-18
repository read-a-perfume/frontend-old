import SignIn from '@components/sign-in/SignIn'
import {Button} from '@mui/material'
import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Main() {
  const [isSignInDialog, setIsSignInDialog] = useState(false)
  const changeSignInDialog = () => {
    setIsSignInDialog(isSignInDialog === true ? false : true)
  }
  return (
    <>
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
    </>
  )
}
