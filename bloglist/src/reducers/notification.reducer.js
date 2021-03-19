const initialState = {
  visible: false,
  message: '',
  successful: true
}

const notificationReducer = (state=initialState,action) => {
  switch(action.type){
  case 'SHOW_NOTIFICATION':
    return { ...state, visible:true,message: action.data.message, successful: action.data.type ==='success' ? true :false }
  case 'HIDE_NOTIFICATION':
    return { ...state, visible:false, message:'' }
  default:
    return state
  }
}
export const setNotification=(message,timeInSeconds,type='success') => {
  return async dispatch => {
    await dispatch({
      type:'SHOW_NOTIFICATION',
      data: { message,type }
    })
    setTimeout(() => {
      dispatch({
        type:'HIDE_NOTIFICATION'
      })
    },timeInSeconds*1000)
  }
}
export default notificationReducer