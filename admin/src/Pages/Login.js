import React, { useState } from 'react'
import { Card, Input, Icon, Button, Spin, message } from 'antd'
import '../static/css/Login.css'
import { checkLoginRequest } from '../config/request'

function Login (props) {
  const [userName, setUserName] = useState('admin')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // 登录
  const checkLogin = () => {
    setIsLoading(true)
    if (!userName) {
      message.error('用户名不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 200)
      return false
    }
    if (!password) {
      message.error('密码不能为空')
      setTimeout(() => {
        setIsLoading(false)
      }, 200)
      return false
    }

    const dataProps = { userName, password }

    checkLoginRequest(dataProps).then(res => {
      console.log(res)
      setIsLoading(false)
      if (res.status === 200) {
        message.success(res.message)
        localStorage.setItem('openId', res.openId)
        props.history.push('/index')
      } else {
        message.error(res.message)
      }
    })
  }

  return (
    <div className='login-wrap'>
      <Spin tip='Loading...' spinning={isLoading}>
        <Card className='login-card' title='React Next Blog System' bordered style={{ width: 400 }}>
          <Input
            id='userName'
            value={userName}
            size='large'
            placeholder='Enter your username'
            prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={(e) => { setUserName(e.target.value) }}
          />
          <br />
          <br />
          <Input.Password
            id='password'
            value={password}
            size='large'
            placeholder='Enter your password'
            prefix={<Icon type='key' style={{ color: 'rgba(0,0,0,.25)' }} />}
            onChange={(e) => { setPassword(e.target.value) }}
          />
          <br />
          <br />
          <Button type='primary' size='large' block onClick={checkLogin}> Login in </Button>
        </Card>
      </Spin>
    </div>
  )
}

export default Login
