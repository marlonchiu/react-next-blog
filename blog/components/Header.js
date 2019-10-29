import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import '../static/style/components/header.css'
import { getTypeInfoRequest } from '../api/request'
import { Row, Col, Menu, Icon } from 'antd'
const Item = Menu.Item

const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await getTypeInfoRequest().then(res => {
        // console.log('远程获取数据结果:', res)
        return res.data
      })
      setNavArray(result)
    }
    fetchData()
  }, [])

  const handleClick = (e) => {
    if (e.key === 0) {
      Router.push('/index')
    } else {
      Router.push('/list?id=' + e.key)
    }
  }

  return (
    <div className='header'>
      <Row type='flex' justify='center'>
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className='header-logo'>
            <Link href={{ pathname: '/index' }}>
              <a>技术胖</a>
            </Link>
          </span>
          <span className='header-txt'>专注前端开发,每年100集免费视频。</span>
        </Col>
        <Col className='menu-list' xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode='horizontal' onClick={handleClick}>
            <Item key='0'>
              <Icon type='home' />
              博客首页
            </Item>
            {
              navArray.map(item => {
                return (
                  <Item key={item.id}>
                    <Icon type={item.icon} />
                    {item.typeName}
                  </Item>
                )
              })
            }
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header
