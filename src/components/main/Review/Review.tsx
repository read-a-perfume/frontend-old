import FlexBox from '@components/layout/FlexBox'
import {MenuItem} from '@mui/material'
import {SectionSubTitle, SectionTitle} from '@pages/main/Main.style'
import React, { useState } from 'react'
import CustomIcons from 'src/assets/customIcons'
import ReviewCard from '../ReviewCard/ReviewCard'
import {DetailOrder, FilterButton, OrderButton} from './Review.style'

const Review = () => {
  const [filtered, setFiltered] = useState<string>('all')

  return (
    <div>
      <SectionTitle>향수 리뷰</SectionTitle>
      <SectionSubTitle>다양한 향수 리뷰를 피드에서 살펴보세요</SectionSubTitle>
      <FlexBox justifyContent="space-between">
        <FlexBox style={{gap: 12}}>
          <OrderButton
            clicked={filtered === 'all'}
            onClick={() => setFiltered('all')}
          >
            ALL
          </OrderButton>
          <OrderButton
            clicked={filtered === 'note'}
            onClick={() => setFiltered('note')}
          >
            향수 노트별
          </OrderButton>
          <OrderButton
            clicked={filtered === 'brand'}
            onClick={() => setFiltered('brand')}
          >
            브랜드별
          </OrderButton>
          <OrderButton
            clicked={filtered === 'mood'}
            onClick={() => setFiltered('mood')}
          >
            분위기별
          </OrderButton>
        </FlexBox>
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
