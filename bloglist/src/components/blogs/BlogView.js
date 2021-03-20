import React from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

const BlogView = () => {
  const blogs = useSelector(state => state.blogs)
  const match = useRouteMatch()
  const blog = blogs.find(blog => blog.id === match.params.id)
  if(!blog) return null
  return (
    <div>
      <h2>{blog.title} {blog.author}</h2>
      <p><Link to={blog.url}>{blog.url}</Link></p>
      <p>{blog.likes} likes <button onClick={() => alert('liked')}>like</button></p>
      <p>added by {blog.user.name}</p>
    </div>
  )
}

export default BlogView
