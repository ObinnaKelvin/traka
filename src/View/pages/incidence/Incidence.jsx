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
    </div>
  )
}

export default Incidence