import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/list.css'
import { getListByTypeId } from '../api/request'

function ListPage(props) {
  // console.log(props)
  const { list } = props
  const [myList, setMyList] = useState([])

  useEffect(() => {
    setMyList(list)
  })

  return (
    <>
      <Head>
        <title>List</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div className='comm-list'>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <List
              itemLayout='vertical'
              dataSource={myList}
              renderItem={
                item => (
                  <List.Item>
                    <div className='list-title'>
                      <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                        <a>{item.title}</a>
                      </Link>
                    </div>
                    <div className='list-icon'>
                      <span><Icon type='calendar' />{item.addTime}</span>
                      <span><Icon type='folder' />{item.typeName}</span>
                      <span><Icon type='fire' />{item.view_count}人</span>
                    </div>
                    <div className='list-context'>{item.introduce}</div>
                  </List.Item>
                )
              }
            />
          </div>
        </Col>

        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

ListPage.getInitialProps = async (context) => {
  const id = context.query.id
  const articleList = await new Promise((resolve) => {
    getListByTypeId(id).then(res => {
      // console.log('远程获取数据结果:', res)
      resolve({
        list: res.data
      })
    })
  })

  return articleList
}

export default ListPage
