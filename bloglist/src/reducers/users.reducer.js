import userService from '../services/login'
import blogService from '../services/blogs'

const initialState = {
  user: null
}

const usersReducer =(state=initialState,action) => {
  switch(action.type){
  case 'LOG_IN':
  case 'INIT_USER':
    return { ...state,user:action.data }
  case 'LOG_OUT':
    return { ...state,user:null }
  default:
    return state
  }
}

export const login =(username,password) => {
  return async dispatch => {
    const user = await userService.login({
      username, password
    })
    window.localStorage.setItem(
      'loggedBlogappUser', JSON.stringify(user)
    )
    blogService.setToken(user.token)
    dispatch({
      type: 'LOG_IN',
      data: user
    })
  }
}
export const initUser =() => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)

      blogService.setToken(user.token)
      dispatch({
        type:'INIT_USER',
        data: user
      })
    }
  }
}

export const logout =() => {
  return async dispatch => {
    window.localStorage.clear()
    dispatch({
      type:'LOG_OUT'
    })
  }
}

export default usersReducer