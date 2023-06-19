/* eslint-disable  @typescript-eslint/no-explicit-any */
import {SignInForm} from './SignInForm'
import {SignInDialog} from './SignInStyle'

type SignIn = {
  isDialog: boolean
  changeSignInDialog: any
}

const SignIn = ({...props}: SignIn) => {
  return (
    <SignInDialog
      open={props.isDialog}
      onClose={props.changeSignInDialog}
      fullWidth
    >
      <SignInForm />
    </SignInDialog>
  )
}

export default SignIn;