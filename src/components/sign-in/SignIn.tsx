import {SignInForm} from './SignInForm'
import {SignInDialog, SignInDialogContent} from './SignInStyle'

type SignIn = {
  isDialog: boolean
  changeSignInDialog: any
}

export const SignIn = ({...props}: SignIn) => {
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
