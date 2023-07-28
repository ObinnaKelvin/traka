import React from 'react'
import './sla.scss'
import NavBar from '../../components/navigation/NavBar'
import { SLACrumb } from '../../components/breadcrumb/Breadcrumb'

function SlaAdmin() {
  return (
    <div className='slaAdmin-container'>
      <NavBar />

      <div className="slaAdmin-breadcrumb-wrapper">
        <SLACrumb />
      </div>

      <div className="slaAdmin-wrapper">

      </div>
      
    </div>
  )
}

export default SlaAdmin