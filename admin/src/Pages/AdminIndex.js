import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import '../static/css/AdminIndex.css'
const { Content, Footer, Sider } = Layout
const { SubMenu } = Menu

function AdminIndex (props) {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  }

  const handleClickDesk = (e) => {
    props.history.push('/home')
  }

  const handleClickArticle = (e) => {
    // console.log(e)
    // console.log(e.item.props)
    if (e.key === 'addArticle') {
      props.history.push('/article/add')
    } else if (e.key === 'articleList') {
      props.history.push('/article/list')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['desk']} mode='inline'>
          <Menu.Item key='desk' onClick={handleClickDesk}>
            <Icon type='home' />
            <span>工作台</span>
          </Menu.Item>
          <SubMenu
            key='article'
            onClick={handleClickArticle}
            title={
              <span>
                <Icon type='appstore' />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key='addArticle'>添加文章</Menu.Item>
            <Menu.Item key='articleList'>文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key='message'>
            <Icon type='message' />
            <span>留言管理</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>后台管理</Breadcrumb.Item>
            <Breadcrumb.Item>工作台</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            <div>
              <Route path='/home' exact component={AddArticle} />
              <Route path='/article/add/' exact component={AddArticle} />
              <Route path='/article/add/:id' exact component={AddArticle} />
              <Route path='/article/list/' component={ArticleList} />
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>React-Next-Blog 后台管理系统 Created by Ant Design</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminIndex
