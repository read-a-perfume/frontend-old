import {SettingsTitle} from '@pages/brand/Brand.style'
import {Category} from './style'
import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import FlexBox from '@components/layout/FlexBox'
import CustomIcons from 'src/assets/customIcons'
import {useState} from 'react'
import {theme} from '@theme/theme'
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ko from 'date-fns/locale/ko'
import {InputProps} from './AccountLayout'
registerLocale('ko', ko)

const CustomDateInput = styled.input({
  width: 240,
  height: 38,
  borderRadius: 10,
  border: '1px solid #EDEDED',
  background: 'white',
  padding: '8px 20px',
  fontSize: 14,
  fontWeight: '500',
  letterSpacing: 0.28,
  outline: 'none',
})

const GenderText = styled(Typography)({
  marginLeft: 6,
  fontSize: 14,
  fontWeight: '400',
  color: theme.palette.grey[600],
})

const Privacy = ({
  inputs,
  setInputs,
}: {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}) => {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div>
      <SettingsTitle style={{marginTop: 36, marginBottom: 20}}>
        개인정보
      </SettingsTitle>
      <Category style={{marginBottom: 10}}>생년월일</Category>
      <FlexBox alignItems="center">
        <DatePicker
          dateFormat="yyyy.MM.dd"
          locale={'kr'}
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          customInput={
            <CustomDateInput
              value={inputs.birth}
              onChange={event =>
                setInputs({...inputs, birth: event.target.value})
              }
            />
          }
          // renderCustomHeader={({
          //   date,
          //   changeYear,
          //   changeMonth,
          //   decreaseMonth,
          //   increaseMonth,
          //   prevMonthButtonDisabled,
          //   nextMonthButtonDisabled,
          // }) => <div>asdf</div>}
          // renderMonthContent={() => {

          // }}
          // renderDayContents={() => {

          // }}
        />
        <div
          style={{
            marginLeft: -36,
            zIndex: 1,
            background: 'white',
            height: 20,
            width: 20,
          }}
        >
          <CustomIcons.CalendarIcon />
        </div>
      </FlexBox>
      <Category>성별</Category>
      <FlexBox gap="36px">
        <FlexBox alignItems="center">
          {inputs.gender === 'male' ? (
            <CustomIcons.RadioChecked />
          ) : (
            <div
              role="presentation"
              style={{cursor: 'pointer', display: 'flex'}}
              onClick={() => setInputs({...inputs, gender: 'male'})}
            >
              <CustomIcons.RadioUnchecked />
            </div>
          )}
          <GenderText>남성</GenderText>
        </FlexBox>
        <FlexBox alignItems="center">
          {inputs.gender === 'female' ? (
            <CustomIcons.RadioChecked />
          ) : (
            <div
              role="presentation"
              style={{cursor: 'pointer', display: 'flex'}}
              onClick={() => setInputs({...inputs, gender: 'female'})}
            >
              <CustomIcons.RadioUnchecked />
            </div>
          )}
          <GenderText>여성</GenderText>
        </FlexBox>
        <FlexBox alignItems="center">
          {inputs.gender === 'none' ? (
            <CustomIcons.RadioChecked />
          ) : (
            <div
              role="presentation"
              style={{cursor: 'pointer', display: 'flex'}}
              onClick={() => setInputs({...inputs, gender: 'none'})}
            >
              <CustomIcons.RadioUnchecked />
            </div>
          )}
          <GenderText>선택하지않음</GenderText>
        </FlexBox>
      </FlexBox>
    </div>
  )
}

export default Privacy
