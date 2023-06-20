import {InputProps} from './LoginModal.interface'
import {ModalInputs, ModalInputStyle} from './LoginModal.style'

const Inputs = ({setInputs, setErrors, inputs}: InputProps) => {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target
    setInputs({...inputs, [name]: value})
    setErrors('')
  }

  return (
    <>
      <ModalInputs
        required
        fullWidth
        size="small"
        placeholder="아이디"
        name="id"
        sx={ModalInputStyle}
        value={inputs.id}
        onChange={changeHandler}
      />
      <ModalInputs
        required
        fullWidth
        type="password"
        size="small"
        placeholder="비밀번호"
        name="password"
        sx={ModalInputStyle}
        value={inputs.password}
        onChange={changeHandler}
      />
    </>
  )
}

export default Inputs
