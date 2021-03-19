import React,{ useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import loginService from './services/login'
import blogService from './services/blogs'

import BlogForm from './components/blogForm/BlogForm'
import LoginForm from './components/loginForm/LoginForm'
import Blogs from './components/blogs/Blogs'
import Notification from './components/notification/Notification'
import { setNotification } from './reducers/notification.reducer'


function App() {

  const dispatch = useDispatch()
  const notification = useSelector(state => state.notification)


  const [user,setUser] = useState(null)

  // const sortList =(listArr,sortCriteria='id',order='asc') => {
  //   listArr.sort((a, b) => {
  //     const itemA = a[sortCriteria]
  //     const itemB = b[sortCriteria]
  //     let comparison = 0
  //     if (itemA > itemB) {
  //       comparison = 1
  //     }
  //     if (itemA < itemB) {
  //       comparison = -1
  //     }
  //     if(order==='des'){
  //       return comparison * -1
  //     }else{
  //       return comparison
  //     }

  //   })
  //   return listArr
  // }




  const handleLogin =async({ username,password }) => {
    try {

      const user = await loginService.login({
        username, password
      })

      //? save user info to local storage
      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogService.setToken(user.token) //to use in create a new blog post
      setUser(user)

    } catch (error) {
      /**
       * ! Access error message from server
       * ! error.response.data.error
       */

      dispatch(setNotification(error.response.data.error,5,'failed'))

    }
  }

  const handleLogout =(e) => {
    e.preventDefault()
    window.localStorage.clear()
    setUser(null)
  }





  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])//?get user info and token from locals storage if available.

  return (
    <div>
      <h1>Blog</h1>


      {notification.visible && <Notification/>}

      {!user && <LoginForm handleLogin={handleLogin}/>}

      {user && user.token &&
        <>
          <div>{user.username} logged in <button onClick={handleLogout}>Logout</button></div>
          <br/>

          <BlogForm/>


          <br/>

          <Blogs

            user={user}

          />

        </>
      }
    </div>
  )
}

export default App
