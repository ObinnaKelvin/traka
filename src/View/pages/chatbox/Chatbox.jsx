import React from 'react'
import NavBar from '../../components/navigation/NavBar'
import './chatbox.css'
import chat from '../../assets/images/chat.png'

const Chatbox = () => {
  return (
    <div className='chatbox-container'>
        <NavBar />
        <div className='chatbox-header'>Chatbox</div>
        <div className="chatbox-wrapper">
          <div className="chatbox-notification">

            <div className="chatbox-notification-icon">
              <img className='chatbox-icon-sizing' src={chat} alt="Chat png" />
            </div>
            <div className="chatbox-notification-description">
              Keep calm, light a fire and watch this space. ✌️
            </div>  
            <div className="chatbox-notification-description-sub">
              We'll be launching this section very soon.
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Chatbox