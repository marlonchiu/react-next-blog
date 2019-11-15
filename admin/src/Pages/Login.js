import React, { useState } from 'react'
import { Card, Input, Icon, Button, Spin } from 'antd'
import '../static/css/Login.css'

function Login () {
  const [userName, setUserName] = useState('admin')
  const [password, setPassword] = useState('123456')
  const [isLoading, setIsLoading] = useState(false)

  // 登录
  const checkLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
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
