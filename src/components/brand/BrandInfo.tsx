import FlexBox from '@components/layout/FlexBox'
import {
  BrandInfo,
  BrandInfoBlock,
  BrandProfile,
  BrandSettings,
  BrandSubTitle,
  BrandTitle,
  BrandURL,
  Follows,
} from '@pages/brand/Brand.style'

const BrandInfoDetail = ({enterprise}: {enterprise: boolean}) => {
  return (
    <BrandInfoBlock>
      <BrandProfile src="/images/brand-logo.png" alt="brand logo" />
      <BrandInfo>
        <FlexBox alignItems="center">
          <BrandTitle>TAMBURINS</BrandTitle>
          <Follows color="red">2480</Follows>
          <Follows>팔로워</Follows>
        </FlexBox>
        <BrandSubTitle>
          제품보다 새로운 경험, 공간 등의 콘텐츠를 통해서 새로운 감성을 전달하는
          탬버린즈
        </BrandSubTitle>
        <BrandURL to="https://www.tamburins.com">
          https://www.tamburins.com
        </BrandURL>
        {enterprise && <BrandSettings>설정 및 관리</BrandSettings>}
      </BrandInfo>
    </BrandInfoBlock>
  )
}

export default BrandInfoDetail
