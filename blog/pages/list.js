import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'
const List = () => (
  <>
    <Head>
      <title>List</title>
    </Head>
    <Header />
    <Row className='comm-main' type='flex' justify='center'>
      <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
        左侧区域
      </Col>
      <Col className='comm-box' xs={0} sm={0} md={7} lg={5} xl={4}>
        右侧区域
      </Col>
    </Row>
  </>
)

export default List
