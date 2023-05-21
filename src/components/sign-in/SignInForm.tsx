import {Dialog, Tab, Tabs} from '@mui/material'
import {
  DialogGridContainer,
  DialogGrid,
  SignInDialogContent,
  DialogGridTitle,
  DialogGridSubTitle,
} from './SignInStyle'

export const SignInForm = () => {
  return (
    <SignInDialogContent>
      <DialogGridContainer container spacing={1}>
        <DialogGrid item>
          <DialogGridTitle>Read a Perfume</DialogGridTitle>
          <DialogGridSubTitle variant="h2">
            향기로움을 찾는 사람들의 리뷰 모음집
          </DialogGridSubTitle>
        </DialogGrid>
        <DialogGrid item>
          <Tabs>
            <Tab label="개인용"></Tab>
            <Tab label="기업용"></Tab>
          </Tabs>
        </DialogGrid>
      </DialogGridContainer>
    </SignInDialogContent>
  )
}
