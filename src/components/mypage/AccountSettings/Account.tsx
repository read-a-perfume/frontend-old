import {SettingsTitle} from '@pages/brand/Brand.style'
import {useState} from 'react'
import {BottomButton, Category, Input} from './style'
import CustomIcons from 'src/assets/customIcons'
import FlexBox from '@components/layout/FlexBox'
import {Button} from '@mui/material'
import {InputProps} from './AccountLayout'

const Account = ({
  inputs,
  setInputs,
}: {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div>
      <SettingsTitle style={{marginTop: 36, marginBottom: 20}}>
        계정관리
      </SettingsTitle>
      <Category style={{marginBottom: 10}}>이메일</Category>
      <Input
        value={inputs.email}
        onChange={event => setInputs({...inputs, email: event.target.value})}
        type="email"
      />
      <Category style={{marginBottom: 10}}>비밀번호</Category>
      <FlexBox alignItems="center" style={{marginBottom: 81}}>
        <Input
          style={{width: 188, paddingRight: 50}}
          type={showPassword ? 'text' : 'password'}
          value={inputs.password}
          onChange={event =>
            setInputs({...inputs, password: event.target.value})
          }
        />
        {showPassword ? (
          <div
            role="presentation"
            style={{
              marginLeft: -36,
              zIndex: 1,
              background: 'white',
              height: 20,
              width: 20,
              cursor: 'pointer',
            }}
            onClick={() => setShowPassword(false)}
          >
            <CustomIcons.ShowPassword />
          </div>
        ) : (
          <div
            role="presentation"
            style={{
              marginBottom: 2,
              marginLeft: -36,
              zIndex: 1,
              background: 'white',
              height: 20,
              width: 20,
              cursor: 'pointer',
            }}
            onClick={() => setShowPassword(true)}
          >
            <CustomIcons.HidePassword />
          </div>
        )}
        <Button
          style={{
            width: 65,
            height: 33,
            borderRadius: 10,
            border: '1px solid #DBDBDB',
            background: '#F1F1F5',
            fontSize: 14,
            fontWeight: '500',
            marginLeft: 34,
            color: 'black',
          }}
        >
          변경
        </Button>
      </FlexBox>
      <FlexBox style={{width: '100%'}} alignItems="center">
        <BottomButton>저장하기</BottomButton>
      </FlexBox>
    </div>
  )
}

export default Account
