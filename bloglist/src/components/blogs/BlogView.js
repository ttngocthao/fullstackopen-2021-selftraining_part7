import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'
import { updateBlog } from '../../reducers/blogs.reducer'
import { setNotification } from '../../reducers/notification.reducer'
import CommentForm from '../comments/CommentForm'
import Comments from '../comments/Comments'

const BlogView = () => {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  const match = useRouteMatch()
  const blog = blogs.find(blog => blog.id === match.params.id)
  if(!blog) return null

  const handleLikeClick =() => {
    const updatedBlog = { likes: blog.likes+1 }
    dispatch(updateBlog(blog.id,updatedBlog))
    dispatch(setNotification('You have liked the post',5))

    //  dispatch(setNotification(error.response.data.error,5,'failed'))

  }
  return (
    <div>
      <div>
        <h2>{blog.title} {blog.author}</h2>
        <p><Link to={blog.url}>{blog.url}</Link></p>
        <p>{blog.likes} likes <button onClick={handleLikeClick}>like</button></p>
        <p>added by {blog.user.name}</p>
      </div>
      <CommentForm blog={blog}/>
      <Comments blog={blog}/>
    </div>
  )
}

export default BlogView
