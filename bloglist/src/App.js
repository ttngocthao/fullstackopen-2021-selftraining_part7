import React,{ useEffect } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

//import BlogForm from './components/blogForm/BlogForm'
import LoginForm from './components/loginForm/LoginForm'
//import Blogs from './components/blogs/Blogs'
import Notification from './components/notification/Notification'
import { initUser, logout } from './reducers/auth.reducer'
import { getUsers } from './reducers/users.reducer'
import Users from './components/users/Users'
import User from './components/users/User'


function App() {
  const dispatch = useDispatch()
  const match = useRouteMatch('/users/:id')
  const users = useSelector(state => state.users)
  const userMatched =match ? users.find(u => u.id===match.params.id) : null

  const notification = useSelector(state => state.notification)
  const user = useSelector (state => state.auth.user)

  const handleLogout =(e) => {
    e.preventDefault()
    dispatch(logout())
  }

  useEffect(() => {
    dispatch(initUser())
  },[dispatch])

  useEffect(() => {
    dispatch( getUsers())
  },[dispatch])

  return (
    <div>
      <h1>Blog</h1>


      {notification.visible && <Notification/>}

      {!user ? <LoginForm /> :   <div>{user.username} logged in <button onClick={handleLogout}>Logout</button></div>}

      {/* {user && user.token &&
        <>

          <br/>

          <BlogForm/>


          <br/>

          <Blogs/>

        </>
      }*/}
      <Switch>
        <Route path='/users/:id' >
          <User data={userMatched}/>
        </Route>
        <Route path='/users' exact>
          <Users/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
