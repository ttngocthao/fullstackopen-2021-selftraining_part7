import React,{ useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'

//import blogService from './services/blogs'

import BlogForm from './components/blogForm/BlogForm'
import LoginForm from './components/loginForm/LoginForm'
import Blogs from './components/blogs/Blogs'
import Notification from './components/notification/Notification'
import { initUser, logout } from './reducers/users.reducer'



function App() {
  const dispatch = useDispatch()

  const notification = useSelector(state => state.notification)
  const user = useSelector (state => state.users.user)



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

      {!user && <LoginForm />}

      {user && user.token &&
        <>
          <div>{user.username} logged in <button onClick={handleLogout}>Logout</button></div>
          <br/>

          <BlogForm/>


          <br/>

          <Blogs/>

        </>
      }
    </div>
  )
}

export default App
