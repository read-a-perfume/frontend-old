import {SettingsTitle} from '@pages/brand/Brand.style'
import {Category} from './style'
import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import FlexBox from '@components/layout/FlexBox'
import CustomIcons from 'src/assets/customIcons'
import {useState} from 'react'
import {theme} from '@theme/theme'
import DatePicker, {registerLocale} from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ko from 'date-fns/locale/ko'
import {InputProps} from './AccountLayout'
import {getMonth, getYear} from 'date-fns'
registerLocale('ko', ko)

const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

const CalendarTitle = styled(Typography)({
  fontSize: 18,
  fontWeight: '700',
  color: 'black',
})

const MonthChangeBtn = styled(Button)({
  background: 'transparent',
})

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
  const [date, setDate] = useState<Date>(new Date())
  const years = new Array(50)
    .fill(0)
    .map((_, i) => i + (new Date().getFullYear() - 50 + 1))

  return (
    <div>
      <SettingsTitle style={{marginTop: 36, marginBottom: 20}}>
        개인정보
      </SettingsTitle>
      <Category style={{marginBottom: 10}}>생년월일</Category>
      <FlexBox alignItems="center">
        <div>
          <DatePicker
            customInput={<CustomDateInput />}
            onSelect={date =>
              setInputs({...inputs, birth: date.toISOString().split('T')[0]})
            }
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div>
                <FlexBox justifyContent="space-between" alignItems="center">
                  {/* 이전 월로 이동하는 버튼 */}
                  <MonthChangeBtn
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <CustomIcons.BeforeIconBlack />
                  </MonthChangeBtn>
                  {/* 현재 날짜 */}
                  <FlexBox>
                    <CalendarTitle>
                      {Number(date.toISOString().split('T')[0].split('-')[1])}월{' '}
                    </CalendarTitle>
                    <CalendarTitle>
                      &nbsp;{date.toISOString().split('T')[0].split('-')[0]}
                    </CalendarTitle>
                  </FlexBox>
                  {/* 다음 월로 이동하는 버튼 */}
                  <MonthChangeBtn
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <CustomIcons.AfterIconBlack />
                  </MonthChangeBtn>
                </FlexBox>
                <FlexBox justifyContent="center" gap="10" style={{height: 20}}>
                  <div className="custom-react-datepicker__select-item">
                    <select
                      value={months[getMonth(date)]}
                      onChange={({target: {value}}) =>
                        changeMonth(months.indexOf(value))
                      }
                    >
                      {months.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <span>월</span>
                  </div>
                  <div className="custom-react-datepicker__select-item">
                    <select
                      value={getYear(date)}
                      onChange={({target: {value}}) =>
                        changeYear(Number(value))
                      }
                    >
                      {years.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <span>년</span>
                  </div>
                </FlexBox>
              </div>
            )}
            locale={ko}
            dateFormat="yyyy.MM.dd"
            selected={new Date(date)}
            onChange={date => {
              if (date) {
                setDate(date)
              }
            }}
          />
        </div>
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
