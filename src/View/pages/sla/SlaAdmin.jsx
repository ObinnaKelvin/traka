import React from 'react'
import './sla.scss'
import NavBar from '../../components/navigation/NavBar'
import { SLACrumb } from '../../components/breadcrumb/Breadcrumb'
import SlaTable from './SlaTable'
import { SquareStack, Tag } from 'lucide-react';

function SlaAdmin() {
  return (
    <div className='slaAdmin-container'>
      <NavBar />

      <div className="slaAdmin-breadcrumb-wrapper">
        <SLACrumb />
      </div>

      <div className="slaAdmin-wrapper">
        <div className="slaAdmin-funtion-wrapper">
          <div className="slaAdmin-category">
            <span>Create Category</span>
            <span><Tag size={15}/></span>
          </div>
          <div className="slaAdmin-service">
            <span>Create Service</span>
            <span><SquareStack size={15} /></span>
          </div>
        </div>
        <SlaTable />
      </div>

    </div>
  )
}

export default SlaAdmin