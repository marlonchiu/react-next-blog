import React, { useState } from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import { Row, Col, Input, Select, Button, DatePicker } from 'antd'
const { Option } = Select
const { TextArea } = Input

function AddArticle () {
  return (
    <div className='add-article'>
      <Row gutter={5}>
        <Col span={18}>
          <Row gutter={10}>
            <Col span={20}>
              <Input placeholder='博客标题' size='large' />
            </Col>
            <Col span={4}>
              &nbsp;
              <Select defaultValue='youtube' size='large'>
                <Option value='youtube'>视频教程</Option>
                <Option value='message'>大胖逼逼叨</Option>
                <Option value='smile'>我的生活</Option>
              </Select>
            </Col>
          </Row>
          <br />
          <Row gutter={10}>
            <Col span={12}>
              <TextArea
                className='markdown-content'
                rows={35}
                placeholder='文章内容'
              />
            </Col>
            <Col span={12}>
              <div className='show-html'>
                文章预览
              </div>
            </Col>
          </Row>
        </Col>
        <Col span={6}>
          <Row>
            <Col span={24}>
              <Button size='large'>暂存文章</Button>
              &nbsp;
              <Button type='primary' size='large' onClick={() => {}}>发布文章</Button>
              <br />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <br />
              <TextArea rows={4} placeholder='文章简介' />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <br />
              <div className='introduce-html'>
                文章状态：
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className='date-select'>
                <DatePicker
                  placeholder='发布日期'
                  size='large'
                />
              </div>
            </Col>
            <Col span={12}>
              <div className='date-select'>
                <DatePicker
                  placeholder='修改日期'
                  size='large'
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default AddArticle
