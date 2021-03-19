import React,{ useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { removeBlog, updateBlog } from '../../reducers/blogs.reducer'
import { setNotification } from '../../reducers/notification.reducer'

const BlogPost = ({ blog,postOwner }) => {
  const dispatch = useDispatch()
  const [viewDetail,setViewDetail] = useState(false)

  const handleViewDetailClick = () => {
    setViewDetail(!viewDetail)
  }

  const handleLikeClick =() => {

    const updatedBlog = { likes: blog.likes+1 }
    dispatch(updateBlog(blog.id,updatedBlog))
    dispatch(setNotification('You have liked the post',5))

    //  dispatch(setNotification(error.response.data.error,5,'failed'))

  }

  const handleRemoveClick =() => {
    const result = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
    if(result){
      dispatch(removeBlog(blog.id))
      dispatch(setNotification(`Blog ${blog.title} by ${blog.author} was successfully deleted`,5))
    }
  }

  return (
    <div className='blogPost' style={{ border:'1px solid black',borderRadius:'2px',padding:'5px',margin:'20px 0' }}>
      <p>{blog.title} - {blog.author}<button className='toggleBtn' onClick={handleViewDetailClick}>{viewDetail ? 'Hide':'View'}</button></p>
      {viewDetail && <div style={{ display: viewDetail ? 'block' : 'none' }} id='toggleContent'>
        <p>{blog.url}</p>
        <p className='likes'>likes {blog.likes} <button className='likeBtn' onClick={handleLikeClick}>like</button></p>
        <p>{blog.author}</p>
        {postOwner && <button className='removeBtn' onClick={handleRemoveClick}>Remove</button>}
      </div>}

    </div>
  )
}

BlogPost.propTypes = {
  blog: PropTypes.object.isRequired,
  postOwner: PropTypes.bool.isRequired,
}

export default BlogPost
