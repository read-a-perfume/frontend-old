import styled from '@emotion/styled'
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material'
import {theme} from '@theme/theme'
import FlexBox from './FlexBox'
import CustomIcons from 'src/assets/customIcons'
import LoginModal from '@components/LoginModal/LoginModal'
import {useState} from 'react'

const HeaderLayout = styled.div({
  height: '152px',
  display: 'flex',
  width: '100%',
})

const HeaderNavigation = styled.div(
  ({height, gap}: {height: string; gap?: string}) => ({
    display: 'flex',
    alignItems: 'center',
    height: height,
    gap: gap,
    paddingLeft: '160px',
    paddingRight: '160px',
    '&:nth-child(2)': {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }),
)

const NavTop = styled(Typography)({
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  lineHeight: '150%',
  cursor: 'pointer',
})

const NavBottom = styled(Typography)({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 500,
  lineHeight: '150%',
  cursor: 'pointer',
})

const Logo = styled.img({
  width: '236px',
  height: '28.81px',
  objectFit: 'contain',
  cursor: 'pointer',
})

const Input = styled(OutlinedInput)({
  width: '376px',
  height: '36.4px',
  fontSize: theme.typography.body3.fontSize,
  '& fieldset': {
    border: '1px solid #EDEDED',
    borderRadius: '10px',
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.body3.fontSize,
      // color: '#A9A9A9',
    },
  },
})

interface HeaderIProps {
  isLoggedIn: boolean
}

const Header = ({isLoggedIn}: HeaderIProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isLoggedIn) {
      setIsOpen(true)
    } else {
      setKeyword(event?.target.value)
    }
  }

  return (
    <>
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <HeaderLayout style={{display: 'flex', flexDirection: 'column'}}>
        <HeaderNavigation
          height="58px"
          gap="28px"
          style={{justifyContent: 'end'}}
        >
          <NavTop
            onClick={() =>
              !isLoggedIn ? setIsOpen(true) : console.log('알림 링크')
            }
          >
            알림
          </NavTop>
          <NavTop
            onClick={() =>
              !isLoggedIn ? setIsOpen(true) : console.log('마이페이지 링크')
            }
          >
            마이페이지
          </NavTop>
        </HeaderNavigation>
        <HeaderNavigation height="94px">
          <FlexBox>
            <Logo src={'/images/logo-text.png'} alt="logo" />
            <FlexBox
              alignItems="center"
              style={{marginLeft: '182px', gap: '52px'}}
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
        </HeaderNavigation>
      </HeaderLayout>
    </>
  )
}

export default Header
