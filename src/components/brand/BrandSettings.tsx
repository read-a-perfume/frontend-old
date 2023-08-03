import Header from '@components/layout/Header'
import {useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import FlexBox from '@components/layout/FlexBox'
import { Section, SettingsNav, SettingsNavItems, SettingsTitle } from '@pages/brand/Brand.style'
import Form from './BrandForm'

const BrandSettings = () => {
  const isLogged = true
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(0)

  const firstBlock = useRef<HTMLDivElement>(null)
  const secondBlock = useRef<HTMLDivElement>(null)
  const thirdBlock = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isLogged) {
      navigate('/')
    }
  }, [])

  return (
    <>
      <Header />
      <Section ref={firstBlock}>
        <SettingsNav>
          <SettingsTitle>설정 및 관리</SettingsTitle>
          <FlexBox gap="15px" direction="column">
            <SettingsNavItems
              clicked={clicked === 0}
              onClick={() => {
                setClicked(0)
                firstBlock.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              브랜드 기본 정보
            </SettingsNavItems>
            <SettingsNavItems
              clicked={clicked === 1}
              onClick={() => {
                setClicked(1)
                secondBlock.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              관리자 계정 관리
            </SettingsNavItems>
            <SettingsNavItems
              clicked={clicked === 2}
              onClick={() => {
                setClicked(2)
                thirdBlock.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                })
              }}
            >
              알림 설정
            </SettingsNavItems>
          </FlexBox>
        </SettingsNav>
        <Form secondBlock={secondBlock} thirdBlock={thirdBlock} />
      </Section>
    </>
  )
}

export default BrandSettings