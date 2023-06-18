import {InputProps} from '../LoginModal.interface'
import {ModalInputs, ModalInputStyle} from '../LoginModal.style'

function LoginModalInputs({inputs, setInputs, setErrors}: InputProps) {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputs({...inputs, [name]: value})
    setErrors('test')
  }

  return (
    <div>
      <ModalInputs
        required
        fullWidth
        size="small"
        placeholder="아이디"
        name="id"
        sx={ModalInputStyle}
        onChange={changeHandler}
      />
      <ModalInputs
        required
        fullWidth
        size="small"
        placeholder="비밀번호"
        name="password"
        sx={ModalInputStyle}
        onChange={changeHandler}
      />
    </div>
  )
}

export default LoginModalInputs
