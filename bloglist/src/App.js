import React,{ useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'

//import BlogForm from './components/blogForm/BlogForm'
import LoginForm from './components/loginForm/LoginForm'
//import Blogs from './components/blogs/Blogs'
import Notification from './components/notification/Notification'
import { initUser, logout } from './reducers/auth.reducer'
import Users from './components/users/Users'



function App() {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.notification)
  const user = useSelector (state => state.auth.user)

  const handleLogout =(e) => {
    e.preventDefault()
    dispatch(logout())
  }

  useEffect(() => {
    dispatch(initUser())
  },[])

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
        <Route path='/users'>
          <Users/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
