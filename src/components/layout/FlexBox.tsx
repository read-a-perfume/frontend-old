/* eslint-disable  @typescript-eslint/no-explicit-any */
interface FlexBoxProps {
    children: any
    direction?: any | undefined
    justifyContent?: string
    alignItems?: string
    style?: any
    onClick?: React.MouseEventHandler<HTMLDivElement>
  }
  
  const FlexBox = ({
    children,
    direction = 'flex',
    justifyContent,
    alignItems,
    style,
    onClick,
  }: FlexBoxProps) => {
    return (
      <div
        role={'presentation'}
        onClick={onClick}
        style={{
          display: 'flex',
          flexDirection: direction,
          justifyContent: justifyContent,
          alignItems: alignItems,
          ...style,
        }}
      >
        {children}
      </div>
    )
  }
  
  export default FlexBox