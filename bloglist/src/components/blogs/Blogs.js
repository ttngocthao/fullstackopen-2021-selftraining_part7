import React from 'react'


import BlogPost from './BlogPost'
import { useSelector } from 'react-redux'


const Blogs = () => {
  const blogs = useSelector(state => state.blogs)

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
