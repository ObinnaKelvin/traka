import React from 'react'
import AddButton from '../../components/addButton/AddButton'
import NavBar from '../../components/navigation/NavBar'
import './incidence.css'

const Incidence = () => {
  return (
    <div className='incidence-container'>
      <AddButton />
      <NavBar />
      Incidence
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
      </div>
    </div>
  )
}

export default Incidence