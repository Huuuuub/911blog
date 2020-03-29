import React from 'react'
import styled from 'styled-components'

const StyledVisuel = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center
`;

const Visuel = ({children, size}) => {
  return (
    <StyledVisuel>
      {children}
    </StyledVisuel>
  )
}

export default Visuel