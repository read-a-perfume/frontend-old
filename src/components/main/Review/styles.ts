import styled from "@emotion/styled"
import { Button, Select } from "@mui/material"

export const OrderButton = styled(Button)(({clicked}: {clicked: boolean}) => ({
  height: 42,
  borderRadius: 21,
  fontSize: 16,
  fontWeight: '600',
  color: clicked ? 'white' : '#A9A9A9',
  background: clicked ? '#FE7156' : '#F1F1F5',
  padding: '8px 13px',
}))

export const DetailOrder = styled(Select)({
  width: 108,
  height: 42,
  background: 'white',
  borderRadius: 10,
  color: '#202020',
  fontSize: 16,
  fontWeight: '500',
})

export const FilterButton = styled(Button)({
  width: 91,
  height: 42,
  borderRadius: 10,
  border: '1px solid #202020',
  background: 'white',
  fontSize: 16,
  fontWeight: '500',
  color: '#202020',
})
