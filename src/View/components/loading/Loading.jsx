import React from 'react';
import './loading.scss';
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