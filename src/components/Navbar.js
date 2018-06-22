import React from 'react'
import styled from 'styled-components'
import {Input, Menu, Dropdown, Icon} from 'antd'

import {Container} from '../core/helper'

const NavContainer = styled.div`
  background-color: black;
  margin-bottom: 30px;
`

const Center = styled.div`
  text-align: center;
`

const Anchor = styled.div`
  color: #eee;
  display: inline-block;
  cursor: pointer;
  padding: 10px;

  &:hover {
    color: #ccc;
  }
`

const Right = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
`

const ProfileImage = styled.img`
  width: 30px;
  border-radius: 50%;
`

const Logo = styled.div`
  position: absolute;
  top: 0;

  & > img {
    height: 50px;
  }
`

export default () => (
  <NavContainer>
    <Container>
      <Logo>
        <img src="/logo.png"/>
      </Logo>
      <Center>
        <Anchor style={{'transform': 'scale(1.5)', 'marginRight': '30px'}}>
          <Dropdown trigger={['click']} overlay={(
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
              </Menu.Item>
            </Menu>
          )}>
            <a className="ant-dropdown-link" href="#">
              <i className="zmdi zmdi-apps"/> Category
            </a>
          </Dropdown>
        </Anchor>
        <Anchor>
          <Input.Search
            placeholder="input search text"
            style={{width: 300}}
          />
        </Anchor>
      </Center>
      <Right>
        <Anchor>Job Updates</Anchor>
        <Anchor>My Courses</Anchor>
        <Anchor><ProfileImage src="https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/26195402_1553150281470922_2397737099705971800_n.jpg?_nc_cat=0&oh=5ccd7a34d31dc0de6ee8b91d9f7706cd&oe=5BA54E4C"/></Anchor>
      </Right>
    </Container>
  </NavContainer>
)
