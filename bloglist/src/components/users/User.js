import React from 'react'


const User = ({ data }) => {

  if(!data) return null
  const user = data

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>Added blogs</h3>
      <ul>
        {user.blogs.length===0 ? <li>Have not got any post yet</li> : user.blogs.map(b => {
          return (
            <li key={b.id}>{b.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default User
