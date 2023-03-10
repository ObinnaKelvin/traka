import React from 'react'
import { Link } from 'react-router-dom'
import './addbutton.css'
import { faArrowLeft, faUpload, faXmark, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddButton = () => {
  return (
    <div className='add-container'>
        <Link className="add-link" to="/create">
          <div className="add-button">
              {/* + */}
              <FontAwesomeIcon icon={faPlus} />
          </div>
        </Link>
    </div>
  )
}

export default AddButton