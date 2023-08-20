import FlexBox from '@components/layout/FlexBox'
import Header from '@components/layout/Header'
import OrderBox from '@components/layout/OrderBox'
import CircleForFavorite from '@components/mypage/CircleForFavorite'
import NewsFeed from '@components/mypage/NewsFeed'
import styled from '@emotion/styled'
import {Button, Typography} from '@mui/material'
import {Banner, BannerBox, BannerImage, Title} from '@pages/main/Main.style'
import {useState} from 'react'
import HeartIcon from 'src/assets/HeartIcon'
import CustomIcons from 'src/assets/customIcons'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useNavigate } from 'react-router-dom'

const Category = styled(Typography)({
  fontFamily: 'AritaBuri !important',
  fontSize: 32,
  fontWeight: '600',
  color: '#0F0F0F',
  marginTop: 88,
  marginBottom: 64,
})

const Box = styled.div({
  minWidth: 512,
  height: 380,
  borderRadius: 15,
  border: '1px solid #DBDBDB',
  background: 'white',
})

const Wrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  rowGap: 32,
  marginBottom: 130,
})

const data = ['All', '내가 작성한 피드', '좋아요', '??']

const feedData = new Array(50).fill(0).map((_, i) => i + 1)

const MyPage = () => {
  const [ordered, setOrdered] = useState<string>('All')
  const [currentPage, setCurrentPage] = useState<number>(0)
  const navigate = useNavigate()

  return (
    <>
      <Header />
      <Banner>
        <BannerImage src="/images/banner.png" alt="banner" />
        <BannerBox>
          <Title>
            REED A PERFUME에 오신것을 환영합니다.
            <br />
            ~~마이페이지관련멘트~~
          </Title>
        </BannerBox>
      </Banner>
      <div style={{margin: '0px 160px'}}>
        <Category>마이 페이지</Category>
        <FlexBox justifyContent="space-between">
          <Box style={{padding: '0px 24px', paddingTop: 14}}>
            <FlexBox
              style={{
                borderBottom: '1px solid #E7E7E7',
                height: 178,
                paddingBottom: 15,
              }}
              alignItems="center"
            >
              <div
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 64,
                  background: 'red',
                  marginRight: 24,
                }}
              ></div>
              <div>
                <Typography
                  style={{
                    fontSize: 28,
                    fontWeight: '600',
                    marginBottom: 11,
                  }}
                >
                  츠키
                  <span style={{fontSize: 23, fontWeight: '500'}}>님</span>
                </Typography>
                <Typography
                  style={{fontSize: 18, fontWeight: '500', marginBottom: 11}}
                >
                  안녕하세요 딥티크를 좋아하는 츠키입니다.
                  <br />
                  만나서 반가워요^^
                </Typography>
                <FlexBox alignItems="center">
                  <Typography
                    style={{fontSize: 16, fontWeight: '500', marginRight: 12}}
                  >
                    팔로워
                  </Typography>
                  <HeartIcon size="18" />
                  <Typography
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#707070',
                      marginRight: 55,
                      marginLeft: 6,
                    }}
                  >
                    2480
                  </Typography>
                  <Typography
                    style={{fontSize: 16, fontWeight: '500', marginRight: 12}}
                  >
                    팔로워
                  </Typography>
                  <HeartIcon size="18" />
                  <Typography
                    style={{
                      fontSize: 14,
                      fontWeight: '400',
                      color: '#707070',
                      marginLeft: 6,
                    }}
                  >
                    2480
                  </Typography>
                </FlexBox>
              </div>
            </FlexBox>
            <FlexBox
              style={{borderBottom: '1px solid #E7E7E7', height: 111}}
              alignItems="center"
            >
              <Typography
                style={{marginLeft: 11, fontSize: 18, fontWeight: '500'}}
              >
                MY TYPE
              </Typography>
            </FlexBox>
            <FlexBox
              justifyContent="center"
              alignItems="center"
              style={{height: '21%'}}
            >
              <Button
                style={{
                  width: 340,
                  borderRadius: 10,
                  border: '1px solid #DBDBDB',
                  color: '#191919',
                  fontSize: 16,
                  fontWeight: '500',
                  display: 'flex',
                }}
                onClick={() => navigate('/:id/settings')}
              >
                <FlexBox style={{marginBottom: -5, marginRight: 4}}>
                  <CustomIcons.PencilIcon />
                </FlexBox>
                내 프로필 편집
              </Button>
            </FlexBox>
          </Box>
          <Box style={{padding: 24}}>
            <Typography
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#707070',
                marginBottom: 24,
              }}
            >
              내 리뷰
            </Typography>
            <FlexBox
              direction={'column'}
              style={{
                borderTop: '1px solid #DBDBDB',
                borderBottom: '1px solid #DBDBDB',
                height: 219,
                gap: 47,
              }}
              justifyContent="center"
            >
              <FlexBox
                justifyContent="space-between"
                style={{width: '100%'}}
                alignItems="center"
              >
                <Typography
                  style={{fontSize: 22, fontWeight: '500', color: '#707070'}}
                >
                  작성중인 후기
                </Typography>
                <FlexBox alignItems="center">
                  <Typography
                    style={{fontSize: 20, fontWeight: '500', marginRight: 2}}
                  >
                    5
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#707070',
                    }}
                  >
                    건
                  </Typography>
                </FlexBox>
              </FlexBox>
              <FlexBox
                justifyContent="space-between"
                style={{width: '100%'}}
                alignItems="center"
              >
                <Typography
                  style={{fontSize: 22, fontWeight: '500', color: '#707070'}}
                >
                  작성한 후기
                </Typography>
                <FlexBox alignItems="center">
                  <Typography
                    style={{fontSize: 20, fontWeight: '500', marginRight: 2}}
                  >
                    15
                  </Typography>
                  <Typography
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#707070',
                    }}
                  >
                    건
                  </Typography>
                </FlexBox>
              </FlexBox>
            </FlexBox>
            <FlexBox
              justifyContent="center"
              alignItems="center"
              style={{height: '23%'}}
            >
              <Button
                style={{
                  width: 340,
                  borderRadius: 10,
                  border: '1px solid #DBDBDB',
                  color: '#191919',
                  fontSize: 16,
                  fontWeight: '500',
                  display: 'flex',
                }}
              >
                <FlexBox style={{marginBottom: -5, marginRight: 4}}>
                  <CustomIcons.PencilIcon />
                </FlexBox>
                리뷰 작성하기
              </Button>
            </FlexBox>
          </Box>
          <Box style={{width: 512}}>
            <Typography
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#707070',
                marginBottom: 24,
                paddingTop: 24,
                paddingLeft: 24,
                paddingRight: 24,
              }}
            >
              즐겨찾기 한 제품
            </Typography>
            <hr style={{border: 'none', height: 1, background: '#DBDBDB'}} />
            <FlexBox
              style={{
                height: 200,
                overflow: 'hidden',
                paddingLeft: 24,
              }}
              alignItems="center"
            >
              <FlexBox style={{gap: 33}}>
                <CircleForFavorite />
                <CircleForFavorite />
                <CircleForFavorite />
                <CircleForFavorite />
              </FlexBox>
            </FlexBox>
            <hr style={{border: 'none', height: 1, background: '#DBDBDB'}} />
            <FlexBox
              justifyContent="center"
              alignItems="center"
              style={{height: '16%'}}
            >
              <Button
                style={{
                  width: 340,
                  borderRadius: 10,
                  border: '1px solid #DBDBDB',
                  color: '#191919',
                  fontSize: 16,
                  fontWeight: '500',
                  display: 'flex',
                }}
              >
                더보기
              </Button>
            </FlexBox>
          </Box>
        </FlexBox>
        <Category style={{marginTop: 112}}>피드 모아보기</Category>
        <div style={{marginBottom: 48}}>
          <OrderBox data={data} ordered={ordered} setOrdered={setOrdered} />
        </div>
        <Wrapper>
          {feedData.slice(currentPage * 6, currentPage * 6 + 6).map(el => (
            <NewsFeed key={el} />
          ))}
        </Wrapper>
        <FlexBox
          style={{width: '100%', marginBottom: 78}}
          justifyContent="center"
          alignItems="center"
        >
          {Math.ceil(feedData.length / 6) < 7 ? (
            <FlexBox style={{gap: 16, marginBottom: 78}}>
              {new Array(Math.ceil(feedData.length / 6))
                .fill(0)
                .map((_, i) => i + 1)
                .map(num => (
                  <FlexBox
                    onClick={() => setCurrentPage(num - 1)}
                    alignItems="center"
                    justifyContent="center"
                    style={{
                      width: 40,
                      height: 43,
                      background:
                        num === currentPage + 1 ? '#D9D9D9' : '#F1F1F5',
                      fontSize: 16,
                      fontWeight: '500',
                      cursor: 'pointer',
                    }}
                    key={num}
                  >
                    {num}
                  </FlexBox>
                ))}
            </FlexBox>
          ) : (
            <>
              <div
                role="presentation"
                style={{marginRight: 16}}
                onClick={() => {
                  if (currentPage > 0) {
                    setCurrentPage(currentPage - 1)
                  }
                }}
              >
                <CustomIcons.BeforeIcon />
              </div>
              <FlexBox style={{gap: 16, marginRight: 16}}>
                {new Array(3)
                  .fill(0)
                  .map((_, i) => i + 1)
                  .map(el => (
                    <FlexBox
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        width: 40,
                        height: 43,
                        background:
                          el === currentPage + 1 ? '#D9D9D9' : '#F1F1F5',
                        fontSize: 16,
                        fontWeight: '500',
                      }}
                      key={el}
                    >
                      {el}
                    </FlexBox>
                  ))}
              </FlexBox>
              <MoreHorizIcon style={{marginRight: 16}} />
              <FlexBox style={{gap: 16, marginRight: 16}}>
                {new Array(Math.ceil(feedData.length / 6))
                  .fill(0)
                  .map((_, i) => i + 1)
                  .filter(el => el > Math.ceil(feedData.length / 6) - 3)
                  .map(el => (
                    <FlexBox
                      alignItems="center"
                      justifyContent="center"
                      style={{
                        width: 40,
                        height: 43,
                        background:
                          el === currentPage + 1 ? '#D9D9D9' : '#F1F1F5',
                        fontSize: 16,
                        fontWeight: '500',
                      }}
                      key={el}
                    >
                      {el}
                    </FlexBox>
                  ))}
              </FlexBox>
              <div
                role="presentation"
                onClick={() => {
                  if (currentPage < Math.ceil(feedData.length / 6) - 1) {
                    setCurrentPage(currentPage + 1)
                  }
                }}
              >
                <CustomIcons.AfterIcon />
              </div>
            </>
          )}
        </FlexBox>
      </div>
    </>
  )
}

export default MyPage
