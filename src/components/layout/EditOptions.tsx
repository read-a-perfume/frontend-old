import {Box} from '@mui/material'
import { DeleteButton, EditButton, OptionsGroup } from '@pages/brand/Brand.style'

const EditOptions = () => {
  return (
    <Box sx={{position: 'absolute', marginLeft: '440px', marginTop: '80px'}}>
      <OptionsGroup
        size="medium"
        variant='text'
        color='inherit'
        orientation="vertical"
      >
        <EditButton>수정</EditButton>
        <DeleteButton>삭제</DeleteButton>
      </OptionsGroup>
    </Box>
  )
}

export default EditOptions
