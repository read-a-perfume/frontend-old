import FlexBox from '@components/layout/FlexBox'
import {Button} from '@mui/material'
import {SettingsTitle} from '@pages/brand/Brand.style'
import {Category, Input, Name, TypeBox} from './style'
import {InputProps} from './AccountLayout'

const PublicProfile = ({
  inputs,
  setInputs,
}: {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}) => {
  return (
    <>
      <SettingsTitle style={{marginTop: -16}}>공개 프로필</SettingsTitle>
      <FlexBox alignItems="center">
        <div
          style={{
            width: 90,
            height: 90,
            borderRadius: 64,
            background: 'red',
            marginRight: 27,
          }}
        ></div>
        <div>
          <Name>test</Name>
          <Button
            variant="text"
            style={{
              padding: 0,
              marginTop: -14,
              fontSize: 12,
              fontWeight: '500',
              color: '#5D9EFF',
            }}
          >
            프로필 사진 바꾸기
          </Button>
        </div>
      </FlexBox>
      <Category style={{marginBottom: 10}}>자기소개</Category>
      <Input
        value={inputs.introduction}
        onChange={event =>
          setInputs({...inputs, introduction: event.target.value})
        }
      />
      <FlexBox style={{ width: 336}} justifyContent='space-between'>
        <Category style={{marginBottom: 18}}>내 타입</Category>
        <Category style={{marginBottom: 18, cursor: 'pointer'}}>수정하기</Category>
      </FlexBox>
      <TypeBox />
    </>
  )
}

export default PublicProfile
