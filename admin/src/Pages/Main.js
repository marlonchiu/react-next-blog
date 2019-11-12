import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from './Login'

function Main() {
  return (
    <Router>
      <Route path='/login/' exact component={Login} />
      <Redirect to='/login/' />
    </Router>
  )
}

export default Main
