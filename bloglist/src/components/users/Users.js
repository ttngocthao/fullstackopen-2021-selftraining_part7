import React from 'react'
import { useSelector } from 'react-redux'

import { Link } from 'react-router-dom'

const Users = () => {
  // const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  // useEffect(() => {
  //   dispatch(getUsers())
  // }, [dispatch])
  return (
    <div>
      <h2>Users</h2>

      {users && users.length!==0 && <table>
        <thead>
          <tr>
            <th>creator&apos;s name</th>
            <th>blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (<tr key={user.id}><td><Link to={`/users/${user.id}`}>{user.name}</Link></td><td>{user.blogs.length}</td></tr>)})}
        </tbody>

      </table> }

    </div>
  )
}

export default Users
