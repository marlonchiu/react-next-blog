import React from 'react'
import Head from 'next/head'
import { Row, Col, Icon, Breadcrumb, Affix } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../static/style/pages/detailed.css'

import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
import Tocify from '../components/tocify.tsx'

import { getArticleByIdRequest } from '../api/request'

const Detailed = (props) => {
  const { content, title, typeName, addTime, view_count } = props
  const renderer = new marked.Renderer()
  const tocify = new Tocify()

  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value
    }
  })

  const html = marked(content)

  return (
    <div>
      <Head>
        <title>博客详细页面</title>
      </Head>
      <Header />
      <Row className='comm-main' type='flex' justify='center'>
        <Col className='comm-left' xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className='bread-div'>
              <Breadcrumb>
                <Breadcrumb.Item><a href='/'>首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className='detailed-title'>
                {title}
              </div>
              <div className='list-icon center'>
                <span><Icon type='calendar' />{addTime}</span>
                <span><Icon type='folder' />{typeName}</span>
                <span><Icon type='fire' />{view_count}人</span>
              </div>
              <div className='detailed-content' dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </Col>
        <Col className='comm-right' xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className='detailed-nav comm-box'>
              <div className='nav-title'>
                <Icon type='book' />
                文章目录
              </div>
              <div className='toc-list'>
                {tocify && tocify.render()}
              </div>
            </div>
          </Affix>
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async (context) => {
  const id = context.query.id
  const articleDetail = await new Promise((resolve) => {
    getArticleByIdRequest(id).then(res => {
      // console.log('远程获取数据结果:', res)
      resolve(res.data[0])
    })
  })

  return articleDetail
}

export default Detailed
