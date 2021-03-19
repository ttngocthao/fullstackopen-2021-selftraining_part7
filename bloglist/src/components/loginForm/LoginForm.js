import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/auth.reducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin =(e) => {
    e.preventDefault()
    // handleLogin({ username,password })
    dispatch(login(username,password))
    setUsername('')
    setPassword('')
    //!not handle error yet.
    // dispatch(setNotification(error.response.data.error,5,'failed'))
  }
  return (
    <form onSubmit={handleLogin}>
      <div>
          Username
        <input
          type="text"
          value={username}
          name="Username"
          id='username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
          Password
        <input
          type="password"
          value={password}
          name="Password"
          id='password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit" id='loginBtn'>login</button>
    </form>
  )
}



export default LoginForm
