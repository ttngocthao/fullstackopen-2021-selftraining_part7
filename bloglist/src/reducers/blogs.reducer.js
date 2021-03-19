import blogsService from '../services/blogs.js'
const initialState =[]

const blogsReducer =(state=initialState,action) => {
  switch(action.type){
  case 'INIT_BLOGS':
    return action.data
  case 'CREATE_BLOG':
    return [...state,action.data]
  case 'UPDATE_BLOG':
    return state.map(blog => blog.id === action.data.blogId ? action.data.updatedBlog : blog)
  case 'REMOVE_BLOG':
    return state.filter(blog => blog.id!== action.data.blogId)
  default:
    return state
  }
}

export const initBlogs =() => {
  return async dispatch => {
    const blogs = await blogsService.getAll()
    dispatch({
      type: 'INIT_BLOGS',
      data: blogs
    })
  }
}

export const createBlog =(newBlogObj) => {
  return async dispatch => {
    const blog = await blogsService.create(newBlogObj)
    dispatch({
      type:'CREATE_BLOG',
      data: blog
    })
  }
}

export const removeBlog =(id) => {
  return async dispatch => {
    const res = await blogsService.remove(id)
    dispatch({
      type:'REMOVE_BLOG',
      data: { blogId:id,res }
    })
  }
}

export const updateBlog =(id,updatedBlogObj) => {
  return async dispatch => {
    const res = await blogsService.update(id,updatedBlogObj)
    dispatch({
      type:'UPDATE_BLOG',
      data: {
        blogId: id,
        updatedBlog: res
      }
    })
  }
}

export default blogsReducer