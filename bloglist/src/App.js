import React,{ Fragment, useEffect } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

import BlogForm from './components/blogForm/BlogForm'
import LoginForm from './components/loginForm/LoginForm'
import Blogs from './components/blogs/Blogs'
import Notification from './components/notification/Notification'
import { initUser } from './reducers/auth.reducer'
import { getUsers } from './reducers/users.reducer'
import { initBlogs } from './reducers/blogs.reducer'
import Users from './components/users/Users'
import User from './components/users/User'
import BlogView from './components/blogs/BlogView'
import Navigation from './components/navigation/Navigation'

import Container from 'react-bootstrap/Container'


function App() {
  const dispatch = useDispatch()
  const match = useRouteMatch('/users/:id')
  const users = useSelector(state => state.users)
  const userMatched =match ? users.find(u => u.id===match.params.id) : null

  const notification = useSelector(state => state.notification)
  const user = useSelector (state => state.auth.user)



  useEffect(() => {
    dispatch(initUser())
  },[dispatch])

  useEffect(() => {

    dispatch( getUsers())
    dispatch(initBlogs())

  },[dispatch])



  return (
    <Container fluid>
      <h1>Blog</h1>


      {notification.visible && <Notification/>}

      {user && <Navigation/>}

      <Switch>
        <Route path='/users/:id' >
          <User data={userMatched}/>
        </Route>
        <Route path='/users' exact>
          <Users/>
        </Route>
        <Route path='/login' exact>
          {!user ? <LoginForm/> : <Redirect to='/'/>}
        </Route>
        <Route path='/blogs/:id'>
          <BlogView/>
        </Route>
        <Route path='/'>
          {user ? <Fragment> <BlogForm/>
            <br/>
            <Blogs/></Fragment> : <Redirect to='/login'/>}
        </Route>
      </Switch>
    </Container>
  )
}

export default App
