import React from 'react'
// import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const Notification = () => {

  const notification = useSelector(state => state.notification)
  const { successful,message } = notification

  const styles ={
    color: successful ? 'green': 'red',
    borderRadius:'5px',
    padding:'15px',
    margin:'20px 0',
    border:`2px solid ${successful ? 'green' : 'red'}`
  }
  return (
    <div id='notification' style={styles}>
      {message}
    </div>
  )
}

// Notification.propTypes ={}

export default Notification
