import React from 'react';
import './loading.scss';
import trakaImage from '../../assets/images/traka_logo.gif'
import Skeleton from 'react-loading-skeleton';
// const Loading = () => {
//   return (
//     <div>Loading</div>
//   )
// }

// export default Loading

export const CircularLoading = () => {
    return(
        <div className='circularloading-container'>
            <div className="circularpath"></div>
        </div>
    )
}

export const LoadingScreen = () => {
    return(
        <div className='loadingscreen-container'>
                {/* Image */}
                <img src={trakaImage} alt="Loading shot" className='loadingscreen-image'/>
        </div>
    )
}

export const IncidenceSkeletonLoading = ({cards}) => {
    return (
        <div className="incidence-skeleton-wrapper">
            {
                Array(cards).fill(0).map((item, index) =>
                <div className='incidence-skeleton' key={index}>
                    <div className='incidence-skeleton-title'>
                        <Skeleton />
                    </div>
                    <div className='incidence-skeleton-body'>
                        <Skeleton />
                    </div>
                    <div className='incidence-skeleton-tags'>
                        <Skeleton count={2} />
                    </div>
                </div>)
            }
        </div>
    )
}

export const DashboardSkeletonLoading = ({cards}) => {
    return (
        <div className="dashboard-skeleton-wrapper">

            <div className='dashboard-skeleton-a'>
                <div className='dashboard-skeleton-a-element'></div>
                <div className='dashboard-skeleton-a-figure'></div>
                <div className='dashboard-skeleton-a-element'></div>
                <div className='dashboard-skeleton-a-element'></div>
            </div>

            {
                Array(cards).fill(0).map((item, index) => 
                    <div className='dashboard-skeleton-b' key={index}>
                        <div className='dashboard-skeleton-b-element'></div>
                        <div className='dashboard-skeleton-b-figure'></div>
                        <div className='dashboard-skeleton-b-element'></div>
                        <div className='dashboard-skeleton-b-element'></div>
                    </div>
                )
            }
        </div>
    )
}