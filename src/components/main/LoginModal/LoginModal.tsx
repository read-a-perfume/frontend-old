import {useState} from 'react'
import FindId from './FindID/FindId'
import IdResult from './FindID/IdResult'
import FindPassword from './FindPassword/FindPassword'
import SendEmail from './FindPassword/SendEmail'
import LoginLayout from './layout/Login'
import {ModalProps} from './LoginModal.interface'
import {ModalLayout, ModalStyle} from './LoginModal.style'

function LoginModal({isOpen, setIsOpen}: ModalProps) {
  const [condition, setCondition] = useState<string>('')

  return (
    <ModalStyle open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalLayout>
        {!condition && <LoginLayout setCondition={setCondition} />}
        {condition === 'id' && <FindId setCondition={setCondition} />}
        {condition === 'id_result' && <IdResult />}
        {condition === 'password' && (
          <FindPassword setCondition={setCondition} />
        )}
        {condition === 'password_email' && <SendEmail />}
      </ModalLayout>
    </ModalStyle>
  )
}

export default LoginModal
