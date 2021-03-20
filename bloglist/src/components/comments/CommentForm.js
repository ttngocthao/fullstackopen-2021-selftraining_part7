import React from 'react'
import { useDispatch } from 'react-redux'

import { updateBlog } from '../../reducers/blogs.reducer'
import { setNotification } from '../../reducers/notification.reducer'


const CommentForm = ({ blog }) => {
  const dispatch = useDispatch()

  const handleAddComment =(e) => {
    e.preventDefault()

    const newComment = e.target.comment.value

    const updatedBlog = { comments: [...blog.comments, newComment] }

    dispatch(updateBlog(blog.id,updatedBlog))

    dispatch(setNotification(`New comment for ${blog.title} is successfully added`,5))
  }
  return (
    <form onSubmit={handleAddComment}>
      <input type='text' name='comment'/><button type='submit'>add comment</button>
    </form>
  )
}

export default CommentForm
