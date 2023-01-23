import { faCircleCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddButton from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './incidence.css'

const Incidence = () => {
  return (
    <div className='incidence-container'>
      <AddButton />
      <NavBar />
      <p className='incidence-header'>Incidences</p>
      <div className="incidence-location">
        <span><FontAwesomeIcon icon={faLocationDot}/></span>
        <span>
          <select className='incidence-select'>
            <option value="All Facilities">All Facilities</option>
            <option value="Ikeja - Awolowo">Ikeja - Awolowo</option>
            <option value="Ikeja - Adeniyi Jones">Ikeja - Adeniyi Jones</option>
            <option value="Victoria Island">Victoria Island</option>
            <option value="FABAC">FABAC</option>
            <option value="Ikoyi">Ikoyi</option>
          </select>
        </span>
      </div>
      <div className="incidence-tabs-wrapper">
        <div className="incidence-tab">All (7)</div>
        <div className="incidence-tab">Open(6)</div>
        <div className="incidence-tab">Closed(1)</div>
      </div>
      <div className="incidence-wrapper">
        <div className="incidence-cases">
          <div className="incidence-category">Bed Occupancy</div>
          <div className="incidence-detail">Patient needs to be admitted for an emergency surgery.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority high'>High</div>•
            <div className='incidence-user'>By Damilola</div>•
            <div className='incidence-date'>23 January 09:53am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">Service price update</div>
          <div className="incidence-detail">Service needs to be updated for tomorrows clinic.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority medium'>Medium</div>•
            <div className='incidence-user'>By Mary</div>•
            <div className='incidence-date'>25 January 10:28am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">EMR Bug</div>
          <div className="incidence-detail">Patient account balance displays zero balance</div>
          <div className="incidence-reporter">
            <div className='incidence-priority immediate'>Immediate</div>•
            <div className='incidence-user'>By Susan</div>•
            <div className='incidence-date'>25 January 10:28am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">Password Reset</div>
          <div className="incidence-detail">Conceirge user's password expired.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority low'>Low</div>•
            <div className='incidence-user'>By Abiola</div>•
            <div className='incidence-date'>25 January 10:28am</div>
          </div>
        </div>
        <div className="incidence-cases">
          <div className="incidence-category">User creation</div> <FontAwesomeIcon icon={faCircleCheck} className="done" /> {/* Logic-If closed is true then display the done icon */}
          <div className="incidence-detail">New HMO staffs needs to be created.</div>
          <div className="incidence-reporter">
            <div className='incidence-priority medium'>Medium</div>•
            <div className='incidence-user'>By Deborah</div>•
            <div className='incidence-date'>27 January 02:31pm</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Incidence