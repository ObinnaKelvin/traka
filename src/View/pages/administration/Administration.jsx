import React from 'react'
import Skeleton from 'react-loading-skeleton'
import { DashboardSkeletonLoading, IncidenceSkeletonLoading } from '../../components/loading/Loading'
import NavBar from '../../components/navigation/NavBar'
import './administration.scss'

const Administration = () => {
  return (
    <div className='administration-container'>
        <NavBar />

        Administration Page


        {/* <IncidenceSkeletonLoading /> */}
        {/* <DashboardSkeletonLoading cards={7}/> */}
    </div>
  )
}

export default Administration