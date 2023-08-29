import FlexBox from '@components/layout/FlexBox'
import {SectionSubTitle, SectionTitle} from '@pages/main/Main.style'
import React, {useState} from 'react'
import CustomIcons from 'src/assets/customIcons'
import {noteData} from '../constants'
import {
  BrandName,
  NoteBox,
  NoteImage,
  NoteName,
  NoteSubTitle,
  NoteTitle,
  ProductBox,
  ProductInfoBox,
  ProductLayout,
  ProductName,
} from './styles'

const Notes = () => {
  const [clickedNote, setClickedNote] = useState<string>('fruit')

  return (
    <div style={{marginTop: '112px'}}>
      <SectionTitle>노트별 향수 추천</SectionTitle>
      <SectionSubTitle>
        사랑받고 있는 노트별 향수를 추천해드려요!
      </SectionSubTitle>
      <FlexBox alignItems="center">
        <CustomIcons.BeforeIcon style={{marginRight: 36, cursor: 'pointer'}} />
        <FlexBox style={{gap: '5.8%', width: '100%', marginRight: 36}}>
          {noteData.map(note => (
            <FlexBox
              key={note.name}
              style={{flexDirection: 'column', alignItems: 'center'}}
            >
              <NoteImage
                clicked={clickedNote === note.name}
                onClick={() => setClickedNote(note.name)}
              >
                {/* <img src="" alt="note" /> */}
              </NoteImage>
              <NoteName clicked={clickedNote === note.name}>
                {note.name.toUpperCase()}
              </NoteName>
            </FlexBox>
          ))}
        </FlexBox>
        <CustomIcons.AfterIcon
          style={{marginLeft: 36, cursor: 'pointer', marginRight: '3%'}}
        />
      </FlexBox>
      <FlexBox style={{marginTop: 74, gap: 32}}>
        <NoteBox>
          <img
            src="images/note_bg.png"
            alt="note"
            style={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), lightgray 50% / cover no-repeat',
              borderRadius: 16,
              position: 'absolute',
            }}
          />
          <NoteTitle>
            {clickedNote.toUpperCase()}
            <br />
            NOTE
          </NoteTitle>
          <NoteSubTitle>
            나무 향을 의미하며,
            <br />
            건조하고 성숙한 느낌을 전달합니다.
          </NoteSubTitle>
        </NoteBox>
        <ProductLayout>
          {new Array(6).fill(0).map(el => (
            <ProductBox key={el}>
              <img
                src="images/perfume_test.png"
                alt="product"
                style={{objectFit: 'contain', width: '100%', height: 206}}
              />
              <ProductInfoBox>
                <ProductName>오드퍼퓸 플레르드뽀 750ml</ProductName>
                <BrandName>딥디크</BrandName>
              </ProductInfoBox>
            </ProductBox>
          ))}
        </ProductLayout>
      </FlexBox>
    </div>
  )
}

export default Notes
