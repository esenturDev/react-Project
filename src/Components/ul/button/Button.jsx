import React from 'react'
import styled from 'styled-components'

export const Button = ({children, onClick}) => {
  return (
    <Buttons onClick={onClick}>{children}</Buttons>
    
  )
}

const Buttons = styled.button`
  &:hover{
    transition: 1s;
    font-weight: 500;
    background-color: black;
  }
`