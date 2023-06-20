import {useState} from 'react'
// import {useNavigate} from 'react-router-dom'
import {LoginConditionProps, UserInfo} from './LoginModal.interface'
import {ErrorText} from './LoginModal.style'
import Additionals from './Additionals'
import Buttons from './Buttons'
import Inputs from './Inputs'
import LoginModalTitle from './LoginModalTitle'

function LoginLayout({
  condition,
  setCondition,
  setIsOpen,
}: LoginConditionProps) {
  // const navigate = useNavigate()
  const [inputs, setInputs] = useState<UserInfo>({id: '', password: ''})
  const [errors, setErrors] = useState<string>('')
  const [tabClick, setTabClick] = useState<string>('personal')

  return (
    <>
      <LoginModalTitle setTabClick={setTabClick} tabClick={tabClick} setInputs={setInputs} />
      <Inputs setErrors={setErrors} setInputs={setInputs} inputs={inputs} />
      <Additionals setCondition={setCondition} />
      {errors && <ErrorText>{errors}</ErrorText>}
      <Buttons
        errors={errors}
        tabClick={tabClick}
        condition={condition}
        inputs={inputs}
        setIsOpen={setIsOpen}
      />
    </>
  )
}

export default LoginLayout
