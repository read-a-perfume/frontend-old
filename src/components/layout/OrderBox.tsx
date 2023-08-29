import React from 'react'
import FlexBox from './FlexBox'
import { OrderButton } from '@components/main/Review/Review.style'
// import {OrderButton} from '@components/min/Review/styles'

const OrderBox = ({
  data,
  ordered,
  setOrdered,
}: {
  data: string[]
  ordered: string
  setOrdered: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <FlexBox style={{gap: 12}}>
      {data.map(item => (
        <OrderButton
          key={item}
          clicked={ordered === item}
          onClick={() => setOrdered(item)}
        >
          {item}
        </OrderButton>
      ))}
    </FlexBox>
  )
}

export default OrderBox
