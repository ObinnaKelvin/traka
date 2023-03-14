import React from 'react'
import { LoadingScreen } from '../../components/loading/Loading'
import NavBar from '../../components/navigation/NavBar'
import './notifications.scss'

const Notifications = () => {
  return (
    <div className='notifications-container'>
        <NavBar />
        {/* <LoadingScreen /> */}
    </div>
  )
}

export default Notifications