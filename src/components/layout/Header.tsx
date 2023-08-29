import {FormControl, IconButton, InputAdornment} from '@mui/material'
import FlexBox from './FlexBox'
import {useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {
  HeaderLayout,
  HeaderNavigation,
  Input,
  Logo,
  NavBottom,
  NavTop,
  PostButtons,
} from './Header.styles'
import CustomIcons from 'src/assets/customIcons'
import LoginModal from '@components/LoginModal/LoginModal'
import NotificationModal from '@components/Notification/NotificationModal'

const Header = ({editorPostCompleted}: {editorPostCompleted?: boolean}) => {
  const navigate = useNavigate()
  const isLoggedIn = true
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [popOpen, setPopOpen] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const location = useLocation()

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLoggedIn) {
      setIsOpen(true)
    } else {
      setKeyword(event?.target.value)
    }
  }

  const rightComponent = () => {
    if (location.pathname.split('/').includes('post')) {
      return (
        <FlexBox gap="16px">
          <PostButtons btntype="cancel">취소</PostButtons>
          <PostButtons btntype="upload" disabled={!editorPostCompleted}>
            매거진 업로드
          </PostButtons>
        </FlexBox>
      )
    } else {
      return (
        <FormControl>
          <Input
            placeholder="향수,브랜드,뉴스 무엇이든 검색해보세요!"
            endAdornment={
              <InputAdornment position="end">
                <IconButton style={{marginRight: '-5px'}}>
                  <CustomIcons.SearchIcon />
                </IconButton>
              </InputAdornment>
            }
            onChange={changeHandler}
            value={keyword}
          />
        </FormControl>
      )
    }
  }

  return (
    <>
      <NotificationModal isOpen={popOpen} setIsOpen={setPopOpen} />
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderLayout style={{display: 'flex', flexDirection: 'column'}}>
        <HeaderNavigation height="58px">
          <NavTop
            onClick={() => (!isLoggedIn ? setIsOpen(true) : setPopOpen(true))}
          >
            알림
          </NavTop>
          <NavTop
            onClick={() =>
              !isLoggedIn ? setIsOpen(true) : navigate('/mypage')
            }
          >
            마이페이지
          </NavTop>
        </HeaderNavigation>
        <HeaderNavigation height="94px">
          <FlexBox>
            <Logo src={'/images/logo-text.png'} alt="logo" onClick={() => navigate('/')} />
            <FlexBox
              alignItems="center"
              gap="52px"
              style={{marginLeft: '182px'}}
            >
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('home')
                }
              >
                Home
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('service 링크')
                }
              >
                Our Service
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('brand 링크')
                }
              >
                Brand
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('note 링크')
                }
              >
                Note
              </NavBottom>
              <NavBottom
                onClick={() =>
                  !isLoggedIn ? setIsOpen(true) : console.log('news 링크')
                }
              >
                News
              </NavBottom>
            </FlexBox>
          </FlexBox>
          {rightComponent()}
        </HeaderNavigation>
      </HeaderLayout>
    </>
  )
}

export default Header
