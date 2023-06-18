import { LoginModalTitleProps } from '../LoginModal.interface'
import {ModalTab, ModalTitle, TabContent} from '../LoginModal.style'

const LoginModalTitle = ({ tabClick, setTabClick } : LoginModalTitleProps) => {

  return (
    <>
      <ModalTitle>
        향기로움을 찾는
        <br />
        사람들의 리뷰 모음집
      </ModalTitle>
      <TabContent>
        <ModalTab
          onClick={() => setTabClick('personal')}
          clicked={tabClick === 'personal'}
        >
          개인용
        </ModalTab>
        <ModalTab
          onClick={() => setTabClick('company')}
          clicked={tabClick === 'company'}
        >
          기업용
        </ModalTab>
      </TabContent>
    </>
  )
}

export default LoginModalTitle
