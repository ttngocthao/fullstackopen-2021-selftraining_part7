import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../reducers/auth.reducer'
const Navigation = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const handleLogout =(e) => {
    e.preventDefault()
    dispatch(logout())
  }
  return (
    <header style={{ backgroundColor:'silver', padding: '5px', marginBottom: '10px' }}>
      <nav>
        <Link to='/' style={{ paddingRight: '10px' }}>blogs</Link>
        <Link to='/users' style={{ paddingRight: '10px' }}>users</Link>
        {user && <span>{user.name} logged in <button onClick={handleLogout}>Logout</button></span>}
      </nav>
    </header>
  )
}

export default Navigation
