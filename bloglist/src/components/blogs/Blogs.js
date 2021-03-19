import React,{ useEffect } from 'react'


import BlogPost from './BlogPost'
import { useDispatch, useSelector } from 'react-redux'
import { initBlogs } from '../../reducers/blogs.reducer'

const Blogs = () => {
  const blogs = useSelector(state => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initBlogs())
  },[dispatch])
  return (
    <div id='blogList'>
      {blogs.length===0 ? 'No blog posted' : blogs.map(blog => {
        return(
          <BlogPost
            key={blog.id}
            blog={blog}

          />

        )

      })}
    </div>
  )
}



export default Blogs
