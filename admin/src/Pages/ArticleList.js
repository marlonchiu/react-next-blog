import React, { useState, useEffect } from 'react'
import '../static/css/ArticleList.css'
import { List, Row, Col, Button } from 'antd'

function ArticleList (props) {
  console.log(props)
  const [list, setList] = useState([])

  useEffect(() => {
    setList([
      {
        title: '123',
        typeName: '123',
        addTime: '123',
        part_count: '123',
        view_count: '123'
      }
    ])
  }, [])

  const Header = () => {
    return (
      <Row className='list-div'>
        <Col span={8}><b>标题</b></Col>
        <Col span={2}><b>类别</b></Col>
        <Col span={3}><b>发布时间</b></Col>
        <Col span={2}><b>集数</b></Col>
        <Col span={3}><b>浏览量</b></Col>
        <Col span={3}><b>置顶</b></Col>
        <Col span={3}><b>操作</b></Col>
      </Row>
    )
  }

  return (
    <div>
      <List
        header={Header()}
        bordered
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Row className='list-div'>
              <Col span={8}>{item.title}</Col>
              <Col span={2}>{item.typeName}</Col>
              <Col span={3}>{item.addTime}</Col>
              <Col span={2}>共<span>{item.part_count}</span>集</Col>
              <Col span={3}>{item.view_count}</Col>
              <Col span={3}>{item.view_count}</Col>
              <Col span={3}>
                <Button type='primary'>修改</Button>&nbsp;
                <Button>删除 </Button>
              </Col>
            </Row>
          </List.Item>
        )}
      />
    </div>
  )
}

export default ArticleList
