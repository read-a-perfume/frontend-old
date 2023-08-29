import EditOptions from '@components/layout/EditOptions'
import FlexBox from '@components/layout/FlexBox'
import Header from '@components/layout/Header'
import {BannerBlur, BannerImage} from '@pages/brand/Brand.style'
import React, {useRef, useState} from 'react'
import CustomIcons from 'src/assets/customIcons'
import {
  AddImage,
  AttributeButton,
  Attributes,
  AttributeText,
  BannerButton,
  BannerContent,
  ContentImage,
  ContentInput,
  ContentWrapper,
  HeaderImage,
  OptionsIcon,
  SubTitleInput,
  TitleInput,
} from './Magazine.style'

type DataBox = {
  id: number
  subtitle: string
  content: string
}

const PostMagazine = () => {
  const fileRef = useRef<HTMLInputElement>(null)
  const postImageRef = useRef<HTMLInputElement>(null)
  const [fileURL, setFileURL] = useState<string>('')
  const [postImageURL, setPostImageURL] = useState<string>('')
  const [dataBoxes, setDataBoxes] = useState<DataBox[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [pattern, setPattern] = useState<number[]>([])

  const changeImageHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {
    event.preventDefault()

    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0])
      if (name === 'main') {
        setFileURL(newFileURL)
      } else if (name === 'content') {
        setPostImageURL(newFileURL)
      }
    }
  }

  const subtitleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    idx: number,
  ) => {
    const {value} = event.target

    if (idx > dataBoxes.length) return
    const contentUpdate = JSON.parse(JSON.stringify(dataBoxes))
    contentUpdate[idx].subtitle = value
    setDataBoxes(contentUpdate)
  }

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
    idx: number,
  ) => {
    const {value} = event.target

    if (idx > dataBoxes.length) return
    const contentUpdate = JSON.parse(JSON.stringify(dataBoxes))
    contentUpdate[idx].content = value
    setDataBoxes(contentUpdate)
  }

  return (
    <>
      <Header />
      <HeaderImage>
        <input
          type="file"
          accept="image/jpg,image/png,image/jpeg"
          hidden
          ref={fileRef}
          onChange={event => changeImageHandler(event, 'main')}
        />
        <BannerContent imageurl={fileURL}>
          매겨진에서 보여줄
          <br />
          커버 이미지를 추가하세요.
        </BannerContent>
        <BannerButton
          image={fileURL.length > 0}
          imageurl={fileURL}
          onClick={() => {
            if (fileRef.current) {
              fileRef.current.click()
            }
          }}
        >
          컴퓨터에서 가져오기
        </BannerButton>
        {fileURL && (
          <>
            <BannerImage src={fileURL} alt="banner" style={{zIndex: 1}} />
            <BannerBlur />
          </>
        )}
      </HeaderImage>
      <Attributes>
        <AttributeButton onClick={() => {
          const newInput = {
            id: pattern.length - 1,
            subtitle: '',
            content: '',
          }
      
          setDataBoxes([...dataBoxes, newInput])
          setPattern([...pattern, 1])
        }}>
          <CustomIcons.TitleIcon />
          <AttributeText>소제목 추가</AttributeText>
        </AttributeButton>
        <AttributeButton onClick={() => {
          setPattern([...pattern, 2])
          setDataBoxes([...dataBoxes, {
            id: pattern.length - 1,
            subtitle: 'image',
            content: 'image',
          }])
        }}>
          <CustomIcons.ImageIcon />
          <AttributeText>이미지 추가</AttributeText>
        </AttributeButton>
        <AttributeButton onClick={() => setPattern([...pattern, 3])}>
          <CustomIcons.TagIcon />
          <AttributeText>태그 추가</AttributeText>
        </AttributeButton>
      </Attributes>
      <ContentWrapper>
        <TitleInput placeholder="매거진 제목을 입력하세요." />
        {pattern.map((el, index) => {
          if (el === 1) {
            return (
              <div key={index}>
                <SubTitleInput
                  name={`subtitle-${index}`}
                  placeholder="소제목을 입력하세요."
                  onChange={event => subtitleChangeHandler(event, index)}
                  value={dataBoxes[index].subtitle}
                />
                <ContentInput
                  name={`content-${index}`}
                  placeholder="본문글을 자유롭게 작성하세요."
                  onChange={event => contentChangeHandler(event, index)}
                  value={dataBoxes[index].content}
                  minRows={1}
                  maxRows={10}
                />
              </div>
            )
          } else if (el === 2) {
            return (
              <AddImage key={el}>
                <FlexBox
                  justifyContent="end"
                  style={{width: '100%', paddingRight: 32}}
                >
                  <OptionsIcon onClick={() => setIsOpen(true)} />
                  {isOpen && <EditOptions />}
                </FlexBox>
                <FlexBox
                  justifyContent="center"
                  alignItems="center"
                  style={{width: 1192, height: 586, position: 'absolute'}}
                >
                  <input
                    type="file"
                    accept="image/jpg,image/png,image/jpeg"
                    hidden
                    ref={postImageRef}
                    onChange={event => changeImageHandler(event, 'content')}
                  />
                  {!postImageURL && (
                    <>
                      <BannerContent
                        imageurl={postImageURL}
                        style={{marginBottom: 80}}
                      >
                        이미지를 추가해보세요.
                      </BannerContent>
                      <BannerButton
                        image={postImageURL.length > 0}
                        imageurl={postImageURL}
                        onClick={() => {
                          if (postImageRef.current) {
                            postImageRef.current.click()
                          }
                        }}
                      >
                        컴퓨터에서 가져오기
                      </BannerButton>
                    </>
                  )}
                </FlexBox>
                {postImageURL && (
                  <ContentImage src={postImageURL} alt="banner" />
                )}
              </AddImage>
            )
          }
        })}
      </ContentWrapper>
    </>
  )
}

export default PostMagazine
