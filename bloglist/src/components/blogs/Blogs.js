import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'

import BlogPost from './BlogPost'
import { useDispatch, useSelector } from 'react-redux'
import { initBlogs } from '../../reducers/blogs.reducer'

const Blogs = ({ handleUpdateBlog,user }) => {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initBlogs())
  },[dispatch])
  return (
    <div id='blogList'>
      {blogs.length===0 ? 'No blog posted' : blogs.map(blog => {
        // // postOwner={user.username===blog.user.username ? true : false}
        // console.log('user',user)
        // console.log('blog',blog)
        return(
          <BlogPost
            key={blog.id}
            blog={blog}
            handleUpdateBlog={handleUpdateBlog}
            postOwner={user.username===blog.user.username ? true : false}

          />

        )

      })}
    </div>
  )
}

Blogs.propTypes ={
  handleUpdateBlog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

export default Blogs
