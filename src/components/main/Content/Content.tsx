import {Card, CardContent, CardMedia, Typography} from '@mui/material'
import {theme} from '@theme/theme'
import {cardData} from './cardData'
import {
  ContentCard,
  CardContainer,
  Contents,
  CardTitle,
  NewsContainer,
  NewsTab,
  Tab,
  InstaProfile,
  NewsCardContent,
  NewsCard,
  FlexBox,
  HeartIcon,
  CommentIcon,
} from './Content.style'
import {useState} from 'react'

function Content() {
  const [clicked, setClicked] = useState<string>('recent')

  return (
    <>
      <CardContainer>
        <CardTitle>브랜드관</CardTitle>
        <Contents>
          {cardData.map((el, index) => (
            <ContentCard key={index}>
              <CardContent>
                <Typography
                  fontSize={theme.typography.body2.fontSize}
                  fontWeight="500"
                  color="white"
                >
                  {el}
                </Typography>
              </CardContent>
            </ContentCard>
          ))}
        </Contents>
      </CardContainer>
      <NewsContainer>
        <NewsTab>
          <Tab
            onClick={() => setClicked('recent')}
            clicked={clicked === 'recent'}
          >
            최신
          </Tab>
          <Tab
            onClick={() => setClicked('follow')}
            clicked={clicked === 'follow'}
          >
            팔로잉
          </Tab>
        </NewsTab>
        <div>
          <CardTitle>뉴스피드</CardTitle>
          <NewsCard>
            {/* image가 있는 경우에 아래 media에 추가함. */}
            <CardMedia sx={{height: 239}} image="" title="green iguana" />
            <NewsCardContent>
              <FlexBox>
                <InstaProfile src="images/perfume_woody.png" alt="profile" />
                <Typography
                  fontSize={theme.typography.body3.fontSize}
                  fontWeight="500"
                  sx={{marginRight: '12px'}}
                >
                  Aesop
                </Typography>
                <Typography
                  fontSize={theme.typography.body3.fontSize}
                  fontWeight="700"
                  color={'#379170'}
                  sx={{cursor: 'pointer'}}
                >
                  팔로우
                </Typography>
              </FlexBox>
              <FlexBox>
                <HeartIcon />
                <Typography
                  fontSize={theme.typography.body3.fontSize}
                  fontWeight="350"
                  color={theme.palette.grey[500]}
                >
                  2,480
                </Typography>
                <CommentIcon />
                <Typography
                  fontSize={theme.typography.body3.fontSize}
                  fontWeight="350"
                  color={theme.palette.grey[500]}
                >
                  12
                </Typography>
              </FlexBox>
            </NewsCardContent>
          </NewsCard>
        </div>
      </NewsContainer>
    </>
  )
}

export default Content
