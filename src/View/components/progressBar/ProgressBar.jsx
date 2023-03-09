import { useEffect, useState } from 'react'

import './progressbar.scss'


export const UploadProgress = ({percent}) => {
    return(
        <div className="uploadprogress-container">
            <span>Uploaded...{percent}%</span>
            <div className="uploadprogress-bar" style={{width:`${percent}%`, transition:"width 1s"}}></div>
            <div className="uploadprogress-trail"></div>
        </div>
    )
}