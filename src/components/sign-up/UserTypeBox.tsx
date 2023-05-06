import {Box, Radio, Typography, styled} from '@mui/material'
import {SignUpType} from '@pages/sign-up/SignUp'

type Props = {
  type: SignUpType
  currentType: SignUpType
  onChangeType: (type: SignUpType) => void
}

const content = {
  personal: '다양한 향수 컨텐츠를 구경하고 사람들과 소통해보세요.',
  enterprise: '향수를 홍보하여 브랜드 인지도를 높여보세요.',
}

export default function UserTypeBox(props: Props) {
  const {type, currentType, onChangeType} = props

  const ContentBox = styled(Box)(() => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '32px 35px',
    cursor: 'pointer',
    backgroundColor: currentType === type ? 'white' : 'rgba(255,255,255,0.5)',
    transition: '0.2s ease-in-out',
    '&+*': {
      marginLeft: 36,
    },
    '& img': {
      objectFit: 'contain',
    },
    '& .text': {
      wordBreak: 'keep-all',
    },
    '& .MuiRadio-root': {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    '& .current': {
      backgroundColor: 'white',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
  }))

  return (
    <ContentBox onClick={() => onChangeType(type)}>
      <Radio
        value={type}
        onChange={() => onChangeType(type)}
        checked={type === currentType}
      />
      <Box>
        <img
          src={`/images/sign_up_${type}.png`}
          alt={type === 'personal' ? '개인용' : '기업용'}
          width="100%"
        />
      </Box>
      <Box>
        <Typography
          variant="body1"
          fontWeight="bold"
          fontSize={18}
          align="center"
          mb={1}
        >
          {type === 'personal' ? '개인용' : '기업용'}
        </Typography>
        {type && (
          <Typography
            width="calc(100% - 20px)"
            variant="body2"
            className="text"
            align="center"
            // lineHeight="1.3rem"
          >
            {content[type]}
          </Typography>
        )}
      </Box>
    </ContentBox>
  )
}
