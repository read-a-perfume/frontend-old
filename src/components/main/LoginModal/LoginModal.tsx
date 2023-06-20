import {useState} from 'react'
import FindId from './FindId/FindId'
import IdResult from './FindId/IdResult'
import FindPassword from './FindPassword/FindPassword'
import SendEmail from './FindPassword/SendEmail'
import LoginLayout from './layout/Login'
import {ModalProps} from './layout/LoginModal.interface'
import {ModalLayout, ModalStyle} from './layout/LoginModal.style'

function LoginModal({isOpen, setIsOpen}: ModalProps) {
  const [condition, setCondition] = useState<string>('')

  return (
    <ModalStyle open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalLayout>
        {!condition && (
          <LoginLayout
            setCondition={setCondition}
            condition={condition}
            setIsOpen={setIsOpen}
          />
        )}
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
