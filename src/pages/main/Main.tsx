import LoginModal from '@components/main/LoginModal/LoginModal';
import {useState} from 'react'
import {Link} from 'react-router-dom'

export default function Main() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <div>메인</div>
      <Link to="sign-up">회원가입</Link>
      <button onClick={() => setIsOpen(true)}>로그인 모달 열기</button>
    </>
  )
}
