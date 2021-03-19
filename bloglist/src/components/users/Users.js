import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../reducers/users.reducer'
const Users = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])
  return (
    <div>
      <h2>Users</h2>

      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        {users && users.length!==0 && users.map(user => <tr key={user.id}>
          <td>{user.name}</td> <td>{user.blogs.length}</td></tr>)}
      </table>

    </div>
  )
}

export default Users
