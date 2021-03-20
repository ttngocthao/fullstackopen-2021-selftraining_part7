import React from 'react'
import PropTypes from 'prop-types'

//,{ useState } import { useDispatch, useSelector } from 'react-redux'
// import { removeBlog, updateBlog } from '../../reducers/blogs.reducer'
// import { setNotification } from '../../reducers/notification.reducer'

import { Link } from 'react-router-dom'

const BlogPost = ({ blog }) => {
  // const dispatch = useDispatch()
  // const user = useSelector(state => state.auth.user)
  // const [viewDetail,setViewDetail] = useState(false)
  // const  postOwner= user.username===blog.user.username ? true : false

  // const handleViewDetailClick = () => {
  //   setViewDetail(!viewDetail)
  // }

  // const handleLikeClick =() => {
  //   const updatedBlog = { likes: blog.likes+1 }
  //   dispatch(updateBlog(blog.id,updatedBlog))
  //   dispatch(setNotification('You have liked the post',5))

  //   //  dispatch(setNotification(error.response.data.error,5,'failed'))

  // }

  // const handleRemoveClick =() => {
  //   const result = window.confirm(`Remove blog ${blog.title} by ${blog.author}`)
  //   if(result){
  //     dispatch(removeBlog(blog.id))
  //     dispatch(setNotification(`Blog ${blog.title} by ${blog.author} was successfully deleted`,5))
  //   }
  // }

  return (
    <div className='blogPost' style={{ border:'1px solid black',borderRadius:'2px',padding:'5px',margin:'20px 0' }}>
      <p><Link to={`/blogs/${blog.id}`}>{blog.title} - {blog.author}</Link></p>
      {/* <button className='toggleBtn' onClick={handleViewDetailClick}>{viewDetail ? 'Hide':'View'}</button>{viewDetail && <div style={{ display: viewDetail ? 'block' : 'none' }} id='toggleContent'>
        <p>{blog.url}</p>
        <p className='likes'>likes {blog.likes} <button className='likeBtn' onClick={handleLikeClick}>like</button></p>
        <p>{blog.author}</p>
        {postOwner && <button className='removeBtn' onClick={handleRemoveClick}>Remove</button>}
      </div>} */}

    </div>
  )
}

BlogPost.propTypes = {
  blog: PropTypes.object.isRequired,

}

export default BlogPost
