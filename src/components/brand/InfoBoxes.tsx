import FlexBox from '@components/layout/FlexBox'
import {
  BoxContent,
  BrandName,
  Card,
  CardBox,
  CardImage,
  Categories,
  DetailedInfoBox,
  Divider,
  Dot,
  InfoBox,
  PerfumeHamburger,
  ProductName,
  Types,
} from '@pages/brand/Brand.style'
import React from 'react'

export enum Step {
  '0%' = 0,
  '10%' = 19,
  '20%' = 38,
  '30%' = 57,
  '40%' = 76,
  '50%' = 95,
  '60%' = 114,
  '70%' = 133,
  '80%' = 152,
  '90%' = 171,
  '100%' = 190,
}

const InfoBoxes = ({enterprise}: {enterprise: boolean}) => {
  const productData = new Array(8).fill(0).map((_, i) => i + 1)

  return (
    <CardBox>
      {productData.map(el => (
        <FlexBox
          style={{flexDirection: 'column', gap: '32px', flexWrap: 'wrap'}}
          key={el}
        >
          <Card width="376px" height="426px">
            {enterprise && (
              <div
                style={{width: '100%', display: 'flex', justifyContent: 'end'}}
              >
                <PerfumeHamburger />
              </div>
            )}
            <CardImage src="/images/perfume.png" alt="product" height="341px" />
            <FlexBox alignItems="center" style={{flexDirection: 'column'}}>
              <BrandName>탬버린즈</BrandName>
              <ProductName>퍼퓸 카모</ProductName>
            </FlexBox>
          </Card>
          <FlexBox style={{flexDirection: 'column', gap: '12px'}}>
            <InfoBox>
              <BoxContent left={true}>
                <Categories>강도</Categories>
                <Types color="#333">적당한 향</Types>
              </BoxContent>
              <BoxContent left={false}>
                <Categories>지속력</Categories>
                <Types color="#333">3시간-6시간</Types>
              </BoxContent>
            </InfoBox>
            <DetailedInfoBox>
              <FlexBox alignItems="center">
                <Categories color="#333" style={{marginRight: '27px'}}>
                  독특한
                </Categories>
                <div>
                  <Divider />
                  <Dot marginLeft={Step['10%']} />
                </div>
                <Categories color="#333" style={{marginLeft: '20px'}}>
                  무난한
                </Categories>
              </FlexBox>
              <FlexBox alignItems="center">
                <Categories
                  color="#333"
                  style={{marginRight: '13px', width: '60px'}}
                >
                  자연적인
                </Categories>
                <div>
                  <Divider />
                  <Dot marginLeft={Step['80%']} />
                </div>
                <Categories
                  color="#333"
                  style={{width: '60px', marginLeft: '8px'}}
                >
                  인공적인
                </Categories>
              </FlexBox>
              <FlexBox alignItems="center">
                <Categories color="#333" style={{marginRight: '27px'}}>
                  데일리
                </Categories>
                <div>
                  <Divider />
                  <Dot marginLeft={Step['20%']} />
                </div>
                <Categories color="#333" style={{marginLeft: '20px'}}>
                  위클리
                </Categories>
              </FlexBox>
            </DetailedInfoBox>
          </FlexBox>
        </FlexBox>
      ))}
    </CardBox>
  )
}

export default InfoBoxes
