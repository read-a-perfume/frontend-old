import {
  Box,
  // Button,
  // Dialog,
  // Grid,
  Tab,
  Tabs,
  // TextField,
  Typography,
} from '@mui/material'
import {
  DialogGridContainer,
  DialogGrid,
  SignInDialogContent,
  DialogGridTitle,
  DialogGridSubTitle,
  TabBox,
  SignInTextField,
  TextFieldLabel,
  LoginButton,
} from './SignInStyle'
import {
  // ChangeEventHandler,
  SyntheticEvent, useCallback, useState} from 'react'
import axios from 'axios'

interface TabItemProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabItem(props: TabItemProps) {
  const {children, value, index} = props

  return (
    <Box sx={{width: '100%'}} hidden={value !== index}>
      {value === index && <Typography>{children}</Typography>}
    </Box>
  )
}

export const SignInForm = () => {
  const [value, setValue] = useState(0)
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const handleChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      setValue(newValue)
    },
    [],
  )
  const onChangeId = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value)
    },
    [],
  )
  const onChangePw = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)
    },
    [],
  )

  const onLogin = async () => {
    try {
      axios.post('/api/v1/login', {username, password})
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <SignInDialogContent>
      <DialogGridContainer container spacing={1}>
        <DialogGrid item>
          <DialogGridTitle>Read a Perfume</DialogGridTitle>
          <DialogGridSubTitle variant="h2">
            향기로움을 찾는 사람들의 리뷰 모음집
          </DialogGridSubTitle>
        </DialogGrid>
        <DialogGrid item>
          <TabBox>
            <Tabs
              variant="fullWidth"
              textColor="inherit"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{style: {background: 'black'}}}
            >
              <Tab label="개인용"></Tab>
              <Tab label="기업용"></Tab>
            </Tabs>
          </TabBox>
          <TabItem value={value} index={0}>
            <Box sx={{py: 1}}>
              <SignInTextField
                onChange={onChangeId}
                variant="outlined"
                value={username}
                label={<TextFieldLabel>아이디</TextFieldLabel>}
                size="small"
              />
              <SignInTextField
                onChange={onChangePw}
                variant="outlined"
                label={<TextFieldLabel>패스워드</TextFieldLabel>}
                value={password}
                size="small"
                type="password"
              />
              <LoginButton
                variant="contained"
                customColor="#F8DB52"
                onClick={onLogin}
              >
                로그인
              </LoginButton>
              <LoginButton variant="outlined" customColor="white" sx={{mt: 1}}>
                Google 로그인
              </LoginButton>
            </Box>
          </TabItem>
          <TabItem value={value} index={1}>
            기업 로그인 폼
          </TabItem>
        </DialogGrid>
      </DialogGridContainer>
    </SignInDialogContent>
  )
}
