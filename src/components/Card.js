import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;

  & img {
    width: 100%;
  }

  & div {
    padding: 10px;
  }
`

const Heading = styled.div`
  font-family: sans-serif;
  font-weight: bold;
`

const Desc = styled.div`
  font-family: sans-serif;
  line-height: 25px;
  color: #555;
`

export default ({img, heading, desc}) => (
  <Container>
    <img src={img}/>
    <div>
      <Heading>{heading}</Heading>
      <Desc>{desc}</Desc>
    </div>
  </Container>
)
