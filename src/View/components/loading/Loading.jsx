import React from 'react';
import './loading.scss';
import trakaImage from '../../assets/images/traka_logo.gif'
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