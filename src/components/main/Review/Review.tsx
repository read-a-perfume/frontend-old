import FlexBox from '@components/layout/FlexBox'
import {MenuItem} from '@mui/material'
import { useState } from 'react'
import CustomIcons from 'src/assets/customIcons'
import {DetailOrder, FilterButton, SectionSubTitle, SectionTitle} from './Review.style'
import OrderBox from '@components/layout/OrderBox'
import ReviewCard from './layout/ReviewCard'

const ORDERBY = ['All', '향수 노트별', '브랜드별', '분위기별']

const Review = () => {
  const [ordered, setOrdered] = useState<string>('all')

  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="space-between">
        <OrderBox data={ORDERBY} ordered={ordered} setOrdered={setOrdered} />
        <FlexBox style={{gap: 20}}>
          <DetailOrder
            defaultValue="help"
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#202020',
              },
            }}
          >
            <MenuItem value="help">도움순</MenuItem>
          </DetailOrder>
          <FilterButton>
            필터 <CustomIcons.FilterIcon style={{marginLeft: 10}} />
          </FilterButton>
        </FlexBox>
      </FlexBox>
      <FlexBox style={{marginTop: 48, flexWrap: 'wrap', gap: 32}}>
        {new Array(6).fill(0).map(el => (
          <ReviewCard key={el} />
        ))}
      </FlexBox>
    </div>
  )
}

export default Review
