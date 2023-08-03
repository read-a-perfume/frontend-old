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
import EditOptions from '../../layout/EditOptions'
import {Link} from 'react-router-dom'

const Magazine = ({
  enterprise,
  data,
}: {
  enterprise: boolean
  data: {
    id: number
    image: string
    title: string
    content: string
    hastag: string[]
  }
}) => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false)

  return (
    <Card width="512px" height="594px">
      <Link
        to={`/brand/:id/magazine/${data.id}`}
        style={{textDecoration: 'none'}}
      >
        <CardImage
          height="320px"
          src="/images/brand-magazine.png"
          alt="brand magazine"
        />
      </Link>
      <MagazineInfo>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          style={{marginBottom: '8px', marginTop: '16px'}}
        >
          <EditorProfile
            src="/images/brand-magazine.png"
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
        <Link
          to={`/brand/:id/magazine/${data.id}`}
          style={{textDecoration: 'none'}}
        >
          <CardTitle>{data.title}</CardTitle>
          <CardSpan>{data.content}</CardSpan>
          <HashTags>{'#' + data.hastag.join(' #')}</HashTags>
        </Link>
      </MagazineInfo>
    </Card>
  )
}

export default Magazine
