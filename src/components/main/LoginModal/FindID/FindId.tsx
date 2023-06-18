import FlexBox from '@components/layout/FlexBox'
import { FormControl, TextField, Typography } from '@mui/material'
import { theme } from '@theme/theme'
import CustomIcons from 'src/assets/customIcons'
import { ConfirmButton, FindLayout, FindSpan, Label } from '../FindPassword/FindPassword.style'
import {LoginLayoutProps} from '../LoginModal.interface'
import { inputStyle } from '../LoginModal.style'

const FindId = ({setCondition}: LoginLayoutProps) => {
  return (
    <FindLayout>
      <FlexBox
        onClick={() => setCondition('')}
        style={{cursor: 'pointer'}}
        alignItems="center"
      >
        <CustomIcons.ArrowLeftIcon style={{ marginBottom: '-16px'}} />
        <Typography
          fontSize={theme.typography.body2.fontSize}
          color={theme.palette.grey[800]}
        >
          Back
        </Typography>
      </FlexBox>
      <Typography
        fontSize={theme.typography.h1.fontSize}
        fontWeight="700"
        style={{marginTop: '65px', marginBottom: '34px'}}
      >
        아이디 찾기
      </Typography>
      <FormControl fullWidth>
        <Label>가입했던 이메일을 입력해주세요.</Label>
        <TextField
          required
          fullWidth
          size="small"
          placeholder="이메일을 입력해주세요."
          name="email"
          sx={inputStyle}
        />
        <ConfirmButton type="submit" fullWidth onClick={() => setCondition('id_result')}>
          확인
        </ConfirmButton>
      </FormControl>
      <FlexBox justifyContent="center" style={{marginTop: '27px'}}>
        <FindSpan>비밀번호가 기억나지 않는다면?&nbsp;</FindSpan>
        <FindSpan color="blue" onClick={() => setCondition('password')}>
          {' '}
          비밀번호 찾기
        </FindSpan>
      </FlexBox>
    </FindLayout>
  )
}

export default FindId
