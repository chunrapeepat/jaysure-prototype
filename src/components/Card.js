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

export default () => (
  <Container>
    <img src="http://via.placeholder.com/350x200"/>
    <div>
      <Heading>Chun Rapeepat</Heading>
      <Desc>What the dick man??? Hello 123</Desc>
    </div>
  </Container>
)
