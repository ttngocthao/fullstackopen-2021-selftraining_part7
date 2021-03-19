import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import notificationReducer from './reducers/notification.reducer'
import blogsReducer from './reducers/blogs.reducer'
import usersReducer from './reducers/users.reducer'

const reducer = combineReducers({
  notification: notificationReducer,
  blogs: blogsReducer,
  users: usersReducer
})

const store =createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store