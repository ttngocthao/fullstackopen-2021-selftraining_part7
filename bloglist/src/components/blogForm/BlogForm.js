import React,{ useState, useRef } from 'react'
import Togglable from '../togglable/Togglable'
// import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { createBlog } from '../../reducers/blogs.reducer'
import { setNotification } from '../../reducers/notification.reducer'


const BlogForm = () => {
  const dispatch = useDispatch()
  const blogFormRef = useRef()
  const [title,setTitle]= useState('')
  const [author,setAuthor]= useState('')
  const [url,setUrl] = useState('')

  const addBlog =(e) => {
    e.preventDefault()

    try {
      // const res = await blogService.create(newBlogObj)
      // const allBlogs = await blogService.getAll()
      // setBlogs(sortList(allBlogs,'likes','des'))
      dispatch(createBlog({ title,author,url }))
      dispatch(setNotification(`A new blog ${title} by ${author} was added`,5))

    } catch (error) {
      console.log(error)
      dispatch(setNotification(error.response.data.error,5,'failed'))


    }
    setTitle('')
    setAuthor('')
    setUrl('')
    blogFormRef.current.toggleVisibility()
  }

  return (
    <Togglable buttonLabel='New Blog' ref={blogFormRef}>
      <form onSubmit={addBlog}>
        <h2>Creat new</h2>
        <div>
                Title:
          <input
            type='text'
            value={title}
            name='title'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
                Author:
          <input
            type='text'
            value={author}
            name='author'
            id='author'
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
                Url:
          <input
            type='text'
            value={url}
            name='url'
            id='url'
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <button id='createNewBlogBtn' type='submit'>Create</button>
      </form>
    </Togglable>

  )
}

BlogForm.propTypes = {}

export default BlogForm
