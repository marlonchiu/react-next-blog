import React, { useState } from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import { Row, Col, Input, Select, Button, DatePicker } from 'antd'
const { Option } = Select
const { TextArea } = Input

function AddArticle () {
  const [articleId, setArticleId] = useState(0) // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle, setArticleTitle] = useState('') // 文章标题

  const [articleContent, setArticleContent] = useState('') // markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容...') // html内容

  const [introduceMarkdown, setIntroduceMarkdown] = useState(null) // 简介的markdown内容
  const [introduceHtml, setIntroduceHtml] = useState('等待编辑') // 简介的html内容

  const [createDate, setCreateDate] = useState() // 发布日期
  const [updateDate, setUpdateDate] = useState() // 修改日志的日期

  const [typeInfo, setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType, setSelectType] = useState(1) // 选择的文章类别

  const renderer = new marked.Renderer()
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  })

  // 编写实时预览对应的方法
  const changeContent = (e) => {
    setArticleContent(e.target.value)
    const html = marked(e.target.value)
    setMarkdownContent(html)
  }
  const changeIntroduce = (e) => {
    setIntroduceMarkdown(e.target.value)
    const html = marked(e.target.value)
    setIntroduceHtml(html)
  }

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
                value={articleContent}
                className='markdown-content'
                rows={35}
                onChange={changeContent}
                onPressEnter={changeContent}
                placeholder='文章内容'
              />
            </Col>
            <Col span={12}>
              <div className='show-html' dangerouslySetInnerHTML={{ __html: markdownContent }} />
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
              <TextArea
                rows={4}
                placeholder='文章简介'
                value={introduceMarkdown}
                onChange={changeIntroduce}
                onPressEnter={changeIntroduce}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <br />
              <div className='introduce-html' dangerouslySetInnerHTML={{ __html: `文章简介：${introduceHtml}` }} />
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
