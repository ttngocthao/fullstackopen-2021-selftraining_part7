import React from 'react'
import PropTypes from 'prop-types'
import ListGroup from 'react-bootstrap/ListGroup'
//,{ useState } import { useDispatch, useSelector } from 'react-redux'
// import { removeBlog, updateBlog } from '../../reducers/blogs.reducer'
// import { setNotification } from '../../reducers/notification.reducer'

import { Link } from 'react-router-dom'

const BlogPost = ({ blog }) => {

  return (
    <ListGroup.Item>
      <div className='blogPost'>
        <p><Link to={`/blogs/${blog.id}`}>{blog.title} - {blog.author}</Link></p>
        {/* <button className='toggleBtn' onClick={handleViewDetailClick}>{viewDetail ? 'Hide':'View'}</button>{viewDetail && <div style={{ display: viewDetail ? 'block' : 'none' }} id='toggleContent'>
        <p>{blog.url}</p>
        <p className='likes'>likes {blog.likes} <button className='likeBtn' onClick={handleLikeClick}>like</button></p>
        <p>{blog.author}</p>
        {postOwner && <button className='removeBtn' onClick={handleRemoveClick}>Remove</button>}
      </div>} */}

      </div>
    </ListGroup.Item>

  )
}

BlogPost.propTypes = {
  blog: PropTypes.object.isRequired,

}

export default BlogPost
