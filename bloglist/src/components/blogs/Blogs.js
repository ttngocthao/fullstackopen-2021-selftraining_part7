import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import BlogPost from './BlogPost'
import { useSelector } from 'react-redux'


const Blogs = () => {
  const blogs = useSelector(state => state.blogs)

  return (
    <ListGroup>
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
    </ListGroup>

  )
}



export default Blogs
