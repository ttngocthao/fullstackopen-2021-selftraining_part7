import blogsService from '../services/blogs.js'
const initialState =[]

const blogsReducer =(state=initialState,action) => {
  switch(action.type){
  case 'INIT_BLOGS':
    return action.data
  case 'CREATE_BLOG':
    return [...state,action.data]
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

export default blogsReducer