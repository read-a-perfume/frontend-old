import styled from '@emotion/styled'
import React from 'react'

const Circle = styled.div`
  background: linear-gradient(
    to bottom,
    rgba(217, 217, 217, 0),
    rgba(217, 217, 217, 1)
  );
`

const CircleForFavorite = () => {
  return (
    <div style={{width: 107.5, height: 107.5, borderRadius: '100%', background: 'white'}}>
      <Circle
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '100%',
          border: '5px solid white',
          outline: '1px solid rgba(219, 219, 219, 1)',
        }}
      />
    </div>
  )
}

export default CircleForFavorite
