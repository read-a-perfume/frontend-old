import FlexBox from '@components/layout/FlexBox'
import {
  Card,
  CardImage,
  CardSpan,
  CardTitle,
  EditorProfile,
  HashTags,
  MagazineInfo,
} from '@pages/brand/Brand.style'
import {useState} from 'react'
import CustomIcons from 'src/assets/customIcons'
import EditOptions from './EditOptionsModal/EditOptions'

const Magazine = ({enterprise}: {enterprise: boolean}) => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false)

  return (
    <Card width="512px" height="594px">
      <CardImage
        height="320px"
        src="/images/brand-magazine.png"
        alt="brand magazine"
      />
      <MagazineInfo>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          style={{marginBottom: '8px', marginTop: '16px'}}
        >
          <EditorProfile
            src="/images/brand-image.png"
            alt="editor profile image"
          />
          {enterprise && (
            <CustomIcons.HamburgerIcon
              onClick={() => setOptionsOpen(!optionsOpen)}
              style={{cursor: 'pointer'}}
            />
          )}
          {optionsOpen && <EditOptions />}
        </FlexBox>
        <CardTitle>심플한 디자인이 돋보이는 전설적인 향수 N°5 빠르펭</CardTitle>
        <CardSpan>
          심플한 디자인이 돋보이는 전설적인 향수 N°5 빠르펭. 시간을 초월하여
          사랑받는 아이콘으로 여성의 진정한 아름다움을 표현합니다. 알데하이드
          플로랄 부케는 &quot;여성의 향기를 담은 여성미의 진수&quot;를 만들어
          달라고 부탁한 가브리엘...
        </CardSpan>
        <HashTags>#플로랄 #여름신작 #슬로우 썸머</HashTags>
      </MagazineInfo>
    </Card>
  )
}

export default Magazine
