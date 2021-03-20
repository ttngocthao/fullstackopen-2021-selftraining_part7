import React from 'react'
import PropsType from 'prop-types'
const Comments = ({ blog }) => {
  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {blog.comments.length===0 ? <li>No comment has been made</li> : blog.comments.map((c,i) => <li key={i}>{c}</li>)}
      </ul>
    </div>
  )
}
Comments.propsType = {
  blog: PropsType.object.isRequired
}
export default Comments
