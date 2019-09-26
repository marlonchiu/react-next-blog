import React from 'react'
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'
const Item = Menu.Item

const Header = () => (
  <div className='header'>
    <Row type='flex' justify='center'>
      <Col xs={24} sm={24} md={10} lg={15} xl={12}>
        <span className='header-logo'>技术胖</span>
        <span className='header-txt'>专注前端开发,每年100集免费视频。</span>
      </Col>
      <Col className='menu-list' xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode='horizontal'>
          <Item key='home'>
            <Icon type='home' />
            首页
          </Item>
          <Item key='video'>
            <Icon type='youtube' />
            视频
          </Item>
          <Item key='life'>
            <Icon type='smile' />
            生活
          </Item>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default Header
