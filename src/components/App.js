import React from 'react'
import styled from 'styled-components'

import Card from './Card'
import Navbar from './Navbar'
import {Container} from '../core/helper'

const AppContainer = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
`

export default () => (
  <div>
    <Navbar />
    <Container>
      <AppContainer>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>

        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>
        <Card
          heading="Chun Rapeepat"
          desc="What the dick man??? Hello 123"
          img="http://via.placeholder.com/350x200"/>

      </AppContainer>
      <br/><br/>
    </Container>
  </div>
)
