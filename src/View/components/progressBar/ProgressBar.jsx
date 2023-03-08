import { useState } from 'react'

import './progressbar.scss'


export const UploadProgress = ({percent}) => {
    const [width, setWidth] = useState("")

    const calculateWidth = () => {
        // const newWidth = 
    }
    return(
        <div className="uploadprogress-container">
            <span>Uploaded...{percent}</span>
            <div className="uploadprogress-bar" src={{}}></div>
            <div className="uploadprogress-trail"></div>
        </div>
    )
}