import { LinksProps } from "@components/LoginModal/layout/LoginModal.interface"
import { ModalSpan } from "@components/LoginModal/layout/LoginModal.style"
import FlexBox from "./FlexBox"

const Links = ({linkLabel, label, onClick, style}: LinksProps) => {
  return (
    <FlexBox justifyContent="center" style={style}>
      <ModalSpan>{label}&nbsp;</ModalSpan>
      <ModalSpan color="blue" onClick={onClick}>
        {linkLabel}
      </ModalSpan>
    </FlexBox>
  )
}

export default Links
