import React from 'react'
import { Link } from 'react-router-dom'
import './addbutton.css'

const AddButton = () => {
  return (
    <div className='add-container'>
        <Link className="add-link" to="/create">
          <div className="add-button">
              +
          </div>
        </Link>
    </div>
  )
}

export default AddButton